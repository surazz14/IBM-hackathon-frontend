import Dashboard from "modulus/dashboard";
import Profile from "modulus/profile";
import Homepage from "modulus/homepage";

export default [
  {
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    is_private: false
  },
  {
    component: Profile,
    path: "/profile",
    exact: true,
    is_private: false
  },
  {
    component: Homepage,
    path: "/",
    exact: true,
    is_private: false

  },
];
