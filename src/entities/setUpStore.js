import User from "./user/user";

const store = {
  user: User.create({
    _id: "",
    name: "",
    email: "",
    address: "",
    position: "",
    token: "",
    role: "",
  }),
};

window.app = store;

export default store;
