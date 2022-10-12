import { Instance, types } from "mobx-state-tree";

export const GithubUserModel = types
  .model("GithubUserModel")
  .props({
    avatarUrl: types.string,
    login: types.string,
  })
  .actions((self) => ({
    setUserInfo: (login: string, avatarUrl: string) => {
      self.login = login;
      self.avatarUrl = avatarUrl;
    },
  }));

type GithubUserType = Instance<typeof GithubUserModel>;
export interface GithubUser extends GithubUserType {}
