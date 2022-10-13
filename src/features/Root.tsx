import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";

import { RootStore } from "../models/root-store";
import { SearchPage } from "./SearchPage";
import { UserPage } from "./UserPage";

type RootProps = {
  rootStore: RootStore;
};

export const Root = observer(({ rootStore }: RootProps) => {
  console.log("root", getSnapshot(rootStore));
  if (rootStore.user.login && rootStore.repo.name) return <>Commits</>;

  return rootStore.user?.login ? <UserPage /> : <SearchPage />;
});
