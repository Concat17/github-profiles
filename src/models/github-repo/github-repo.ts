import { applySnapshot, Instance, types } from "mobx-state-tree";

import { ApiRepo } from "../../types";

const initGithubUserState = {
  name: "",
  owner: "",
};

export const GithubRepoModel = types
  .model("GithubRepoModel")
  .props({
    name: types.string,
    owner: types.string,
  })
  .actions((self) => ({
    setRepoInfo: (apiRepoData: ApiRepo) => {
      self.name = apiRepoData.name;
      self.owner = apiRepoData.owner.login;
    },
    reset() {
      applySnapshot(self, initGithubUserState);
    },
  }));

type GithubRepoType = Instance<typeof GithubRepoModel>;
export interface GithubRepo extends GithubRepoType {}
export const createInitGithubRepo = () => initGithubUserState;
