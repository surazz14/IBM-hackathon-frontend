import { types, flow } from "mobx-state-tree";
import generalAction from "../generalActions";
import apphistory from "apphistory";

export enum roleType {
  admin = "admin",
  member = "member",
}

const User = types
  .model("user", {
    _id: types.string,
    name: types.string,
    email: types.string,
    token: types.string,
    role: types.string,
  })
  .actions(generalAction)
  .actions((self) => ({
    login: flow(function* (loginData: { email: string; password: string }) {
      try {
        const user: any = yield self.postRequest("/user/login")(loginData);
        self._id = user._id;
        self.email = user.email;
        self.token = user.token;
        self.role = user.role;
        return user;
      } catch (e) {
        throw e;
      }
    }),

    signUp: flow(function* (loginData: { email: string; name: string; password: string }) {
      try {
        const user: any = yield self.postRequest("/user/")(loginData);
        self.name = user.name
        self.email = user.email;
        return user;
      } catch (e) {
        throw e;
      }
    }),

    logout: () => {
      self.token = "";
      apphistory.push("/");
    },
  }));

export default User;
