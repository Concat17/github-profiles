import { createContext, useContext } from "react";

import { RootStore } from "./root-store";

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens
 */
const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => useContext(RootStoreContext);
