import { Instance, types } from "mobx-state-tree";

export const GithubRepoModel = types.model("GithubRepoModel").props({
  name: types.string,
  language: types.string,
  description: types.string,
  starsCount: types.number,
});

type GithubRepoType = Instance<typeof GithubRepoModel>;
export interface GithubRepo extends GithubRepoType {}
