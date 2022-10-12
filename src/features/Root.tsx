import { observer } from "mobx-react-lite";

import { RootStore } from "../models/root-store";
import { SearchPage } from "./SearchPage";
import { UserPage } from "./UserPage";

type RootProps = {
  rootStore: RootStore;
};

export const Root = observer(({ rootStore }: RootProps) => {
  return !!rootStore.user?.login ? <UserPage /> : <SearchPage />;
});
