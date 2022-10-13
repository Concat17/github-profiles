import { observer } from "mobx-react-lite";

import { RootStore } from "../models/root-store";
import { CommitsPage } from "./CommitsPage";
import { SearchPage } from "./SearchPage";
import { UserPage } from "./UserPage";

type RootProps = {
  rootStore: RootStore;
};

export const Root = observer(({ rootStore }: RootProps) => {
  if (rootStore.repo.name) return <CommitsPage />;

  return rootStore.user?.login ? <UserPage /> : <SearchPage />;
});
