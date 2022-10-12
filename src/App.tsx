import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import { RootStore, RootStoreModel } from "./models/root-store/root-store";
import { RootStoreProvider } from "./models/root-store/root-store-context";
import { Root } from "./Root";

const queryClient = new QueryClient();

function App() {
  const [rootStore] = useState<RootStore>(RootStoreModel.create());

  return (
    <RootStoreProvider value={rootStore}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Root />
        </Router>
      </QueryClientProvider>
    </RootStoreProvider>
  );
}

export default App;
