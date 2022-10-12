import { Instance, types } from "mobx-state-tree";

export const GithubUserModel = types.model("GithubUserModel").props({
  avatar_url: types.string,
  login: types.string,
});

type GithubUserType = Instance<typeof GithubUserModel>;
export interface GithubUser extends GithubUserType {}
