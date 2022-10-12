import { Instance, types } from "mobx-state-tree";

import { ApiUser } from "../../types";
import { GithubRepoModel } from "../github-repo";

export const GithubUserModel = types
  .model("GithubUserModel")
  .props({
    avatarUrl: types.string,
    login: types.string,
    reposUrl: types.string,
    repos: types.array(GithubRepoModel),
  })
  .actions((self) => ({
    setUserInfo: (apiUserData: ApiUser) => {
      self.login = apiUserData.login;
      self.avatarUrl = apiUserData.avatar_url;
      self.reposUrl = apiUserData.repos_url;
    },
  }));

type GithubUserType = Instance<typeof GithubUserModel>;
export interface GithubUser extends GithubUserType {}
export const createInitGithubUser = () => ({
  login: "",
  avatarUrl: "",
  reposUrl: "",
  repos: [],
});
