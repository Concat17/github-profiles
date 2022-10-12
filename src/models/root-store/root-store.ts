import { Instance, SnapshotOut, types } from "mobx-state-tree";

import { createInitGithubUser, GithubUserModel } from "../github-user";

export const RootStoreModel = types.model("RootStore").props({
  user: types.optional(GithubUserModel, createInitGithubUser()),
});

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
