import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import ManageUser from "views/examples/ManageUser";
import ManageCompany from "views/examples/ManageCompany";
import ManagePost from "views/examples/ManagePost";
import ManageJobFeed from "views/examples/ManageJobFeed";
// import Detailprofile from "views/examples/Detailprofile"

export const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/manage-user",
    name: "Manage User ",
    icon: "fa fa-address-card",
    component: ManageUser,
    layout: "/admin",
  },
  {
    path: "/manage-company",
    name: "Manage Company ",
    icon: "fa fa-address-card",
    component: ManageCompany,
    layout: "/admin",
  },
  {
    path: "/manage-post",
    name: "Manage Post ",
    icon: "fa fa-address-card",
    component: ManagePost,
    layout: "/admin",
  },
  {
    path: "/manage-jobfeed",
    name: "Manage JobFeed ",
    icon: "fa fa-address-card",
    component: ManageJobFeed,
    layout: "/admin",
  },
];

export const routesAdmin = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
];
// export default routes
