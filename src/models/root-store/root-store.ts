import { Instance, SnapshotOut, types } from "mobx-state-tree";

import { createInitGithubRepo, GithubRepoModel } from "../github-repo";
import { createInitGithubUser, GithubUserModel } from "../github-user";

export const RootStoreModel = types.model("RootStore").props({
  user: types.optional(GithubUserModel, createInitGithubUser()),
  repo: types.optional(GithubRepoModel, createInitGithubRepo()),
});

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
