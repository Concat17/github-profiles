import { Instance, types } from "mobx-state-tree";

import { GithubRepoModel } from "../github-repo/github-repo";

export const GithubUserModel = types
  .model("GithubUserModel")
  .props({
    avatarUrl: types.string,
    login: types.string,
    reposUrl: types.string,
    repos: types.array(GithubRepoModel),
  })
  .actions((self) => ({
    setUserInfo: (login: string, avatarUrl: string, reposUrl: string) => {
      self.login = login;
      self.avatarUrl = avatarUrl;
      self.reposUrl = reposUrl;
    },
  }));

type GithubUserType = Instance<typeof GithubUserModel>;
export interface GithubUser extends GithubUserType {}
