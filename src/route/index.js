import Chatbot from "modulus/chatbot";
import Login from "modulus/login";
import Profile from "modulus/profile";

export default [
  {
    component: Chatbot,
    path: "/chatbot",
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
    component: Login,
    path: "/",
    exact: true,
    is_private: false

  },
];
