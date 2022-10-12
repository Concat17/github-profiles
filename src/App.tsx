import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Root } from "./features/Root";
import { RootStore, RootStoreModel } from "./models/root-store/root-store";
import { RootStoreProvider } from "./models/root-store/root-store-context";

const queryClient = new QueryClient();

function App() {
  const [rootStore] = useState<RootStore>(RootStoreModel.create());

  return (
    <RootStoreProvider value={rootStore}>
      <QueryClientProvider client={queryClient}>
        <Root rootStore={rootStore} />
      </QueryClientProvider>
    </RootStoreProvider>
  );
}

export default App;
