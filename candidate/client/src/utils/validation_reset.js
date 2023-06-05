const validation_reset = ( password, cf_password ) => {
    const err = {}
    console.log(password, cf_password)
    if (!password) {
        err.password = "Please add your password."
    } else if (password.length < 6) {
        err.password = "Password must be at least 6 characters."
    }

    if (password !== cf_password) {
        err.cf_password = "Confirm password did not match."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}

export default validation_reset