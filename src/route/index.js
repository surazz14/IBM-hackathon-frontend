import Chatbot from "modulus/chatbot";
import Login from "modulus/login";

export default [
  {
    component: Chatbot,
    path: "/chatbot",
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
