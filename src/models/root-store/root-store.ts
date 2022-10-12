import { Instance, SnapshotOut, types } from "mobx-state-tree";

import { GithubUserModel } from "../github-user/github-user";

export const RootStoreModel = types.model("RootStore").props({
  user: types.optional(GithubUserModel, {
    login: "",
    avatarUrl: "",
    reposUrl: "",
    repos: [],
  }),
});

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
