const Users = require("../models/userModel");
const Company = require("../models/companyModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("./sendMail");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fetch = require("node-fetch");

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

const authCtrl = {
  register: async (req, res) => {
    try {
      const { firstname, lastname, email, password, role } = req.body;
      let fullname = firstname + lastname;
      let user_Name = fullname.toLowerCase().replace(/ /g, "");
      const user_email = await Users.findOne({ email });
      

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new Users({
        firstname,
        lastname,
        username: user_Name,
        email,
        password: passwordHash,
        role,
      });
      await newUser.save();

      try {
        if (role === "company") {
          let newCompany = new Company({
            idCompany: id._id,
          });
          await newCompany.save();
        }
      } catch (err) {
        console.log("err:", err.message);
      }
      // const activation_token = createActivationToken({ ...newUser._doc });
      // const url = `${CLIENT_URL}/activate/${activation_token}`;
      // sendMail(email, url, "Verify your email address");
      res.json({
        msg: "Register Success! ",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  activateEmail: async (req, res) => {
    try {
      // const { activation_token } = req.body;
      // const user = jwt.verify(
      //   activation_token,
      //   process.env.ACTIVATION_TOKEN_SECRET
      // );

      const { firstname, lastname, username, email, password, role } = user;

      const check = await Users.findOne({ email });
      if (check)
        return res.status(400).json({ msg: "This email already exists." });

      const newUser = new Users({
        firstname,
        lastname,
        username,
        email,
        password,
        role,
      });
      await newUser.save();

      try {
        if (role === "company") {
          let newCompany = new Company({
            idCompany: id._id,
          });
          await newCompany.save();
        }
      } catch (err) {
        console.log("err:", err.message);
      }

      res.json({ msg: "Account has been activated!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  upgradeAccount: async (req, res) => {
    const {
      companyName,
      address,
      industry,
      info,
      website,
      phoneNumber,
      companySize,
      logo,
      email,
    } = req.body;
    if (
      !companyName ||
      !address ||
      !industry ||
      !info ||
      !website ||
      !phoneNumber ||
      !companySize ||
      !email
    )
      return res.json({ msg: "Missing parameter!" });
    if (!logo) return res.json({ msg: "Missing logo!" });
    let user_Name = companyName.toLowerCase().replace(/ /g, "");
    try {
      const checkUser = await Users.findOne({ username: user_Name });
      if (checkUser) return res.json({ msg: "Company name is existed" });
      const user = await Users.findOneAndUpdate(
        { _id: req.user._id },
        {
          role: "company",
          username: user_Name,
          avatar: logo,
          firstname: "",
          lastname: companyName,
        }
      );
      const newCompany = new Company({
        idCompany: req.user._id,
        companyName,
        address,
        industry,
        info,
        website,
        phoneNumber,
        companySize,
        logo,
      });
      await newCompany.save();
      return res.json({ msg: "Upgrade success!", ...newCompany._doc });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email }).populate(
        "followers following",
        "avatar username firstname lastname followers following"
      );

      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });

      const access_token = createAccessToken({ id: user._id });
      const refresh_token = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/refresh_token",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
      });

      res.json({
        msg: "Login Success!",
        access_token,
        user: {
          ...user._doc,
          password: "",
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  googleLogin: async (req, res) => {
    try {
      const { tokenId } = req.body;
      const verify = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.MAILING_SERVICE_CLIENT_ID,
      });

      const { email_verified, email, name, picture } = verify.payload;

      const password = email + process.env.GOOGLE_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      if (!email_verified)
        return res.status(400).json({ msg: "Email verification failed." });

      const user = await Users.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ msg: "Password is incorrect." });

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Login success!" });
      } else {
        const newUser = new Users({
          name,
          email,
          password: passwordHash,
          avatar: picture,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ msg: "Login success!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
      return res.json({ msg: "Logged out!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "Please login now." });

      jwt.verify(
        rf_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, result) => {
          if (err) return res.status(400).json({ msg: "Please login now." });

          const user = await Users.findById(result.id)
            .select("-password")
            .populate(
              "followers following",
              "avatar username firstname lastname followers following"
            );

          if (user.role === "company") {
            const company = await Company.findOne({ idCompany: user._id });
            if (!user)
              return res.status(400).json({ msg: "This does not exist." });

            const access_token = createAccessToken({ id: result.id });
            return res.json({
              access_token,
              user: { ...user._doc, company }
            });
          }

          if (!user)
            return res.status(400).json({ msg: "This does not exist." });

          const access_token = createAccessToken({ id: result.id });

          res.json({
            access_token,
            user,
          });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      const access_token = createAccessToken({ id: user._id });
      const url = `${CLIENT_URL}/reset/${access_token}`;

      sendMail(email, url, "Reset your password");
      res.json({ msg: "Re-send the password, please check your email." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
      console.log(password);
      const passwordHash = await bcrypt.hash(password, 12);

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
        }
      );

      res.json({ msg: "Password successfully changed!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  companyRegister: async (req, res) => {
    try {
      const { email, password, companyName, size, city, address, info, contactName, phone } = req.body;
      let user_name = companyName.toLowerCase().replace(/ /g, "");
      const company_email = await Users.findOne({ email: email })


      //check email
      // if (company_email) return res.json({ msg: "This email already exists." })
      //check password
      if (password.length < 6)
        return res.status(400).json({ msg: "Password must be at least 6 characters." })


      const passwordHash = await bcrypt.hash(password, 12)

      const newUser = new Users({
        email, username: user_name, companyName, role: "company", size, city, address, info, contactName, phone, password: passwordHash, firstname: "", lastname: companyName
      })
      const newCompany = new Company({
        companyName, role: "company", size, city, address, info, contactName, phone
      })

      // const activation_token = createActivationToken({ ...newCompany._doc, ...newUser._doc });
      // const url = `${CLIENT_URL}/company/activate/${activation_token}`;
      // sendMail(email, url, "Verify your email address");
      res.json({
        msg: "Register Success! ",
      });
    } catch (error) {
      return res.json(error.message)
    }
  },
  companyLogin: async (req, res) => {
    try {
      const { email, password } = req.body
      const users = await Users.findOne({ email })
        .populate("followers following", "avatar username firstname lastname followers following")

      if (!users) return res.status(400).json({ msg: "This email does not exist." })

      const isMatch = await bcrypt.compare(password, users.password)
      if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." })

      const company = await Company.findOne({ idCompany: users._id })

      const access_token = createAccessToken({ id: users._id })
      const refresh_token = createRefreshToken({ id: users._id })

      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
      })

      res.json({
        msg: 'Login Success!',
        access_token,
        user: {
          ...users._doc,
          company: { ...company._doc },
          password: ''
        }
      })
    } catch (error) {
      return res.json(res.json(error.message))
    }
  },
  activateEmailCompany: async (req, res) => {
    try {
      // const { activation_token } = req.body;
      // const user = jwt.verify(
      //   activation_token,
      //   process.env.ACTIVATION_TOKEN_SECRET
      // );

      const { firstname, lastname, email, username, role, password, companyName, size, city, address, info, contactName, phone } = user;
      const check = await Users.findOne({ email });
      if (check)
        return res.status(400).json({ msg: "This email already exists." });

      const newUser = new Users({
        firstname,
        lastname,
        username: username,
        role, email, password
      });
      await newUser.save()
      const newCompany = new Company({ idCompany: newUser._id, companyName, size, city, address, info, contactName, phone });
      await newCompany.save();

      res.json({ msg: "Account has been activated!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  changePassword: async (req, res) => {
    try {
      const { current_password, new_password, cf_password } = req.body;
      const userId = req.user._id

      if (new_password !== cf_password)
        return res.json({ error: "Confirm password not match!" })

      const user = await Users.findOne({ _id: userId });

      if (!user) return res.json({ error: "Not exitst user!" })

      const isMatch = await bcrypt.compare(current_password, user.password);

      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });

      const passwordHash = await bcrypt.hash(new_password, 12);
      await Users.findOneAndUpdate({ _id: userId }, { password: passwordHash })

      return res.json({ success: "Change success" })
    } catch (error) {
      return res.json({ msg: "Change fail!" })
    }
  }
};

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = authCtrl;
