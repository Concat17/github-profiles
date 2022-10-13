import { useEffect, useState } from "react";

import { Button, Input } from "../components";
import { Page } from "../components/Page";
import { useGetGithubUser } from "../hooks";
import { useStores } from "../models/root-store";

export function SearchPage() {
  const { user } = useStores();
  const [login, setLogin] = useState("levabala");
  const {
    data: userData,
    isFetchedAfterMount,
    refetch,
  } = useGetGithubUser(login);

  useEffect(() => {
    // isFetchedAfterMount used here to not show previously cached data after returning to this page
    if (userData && isFetchedAfterMount) {
      user.setUserInfo(userData);
    }
  }, [isFetchedAfterMount, user, userData]);

  return (
    <Page>
      <div className="flex m-auto">
        <Input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          type="text"
        />
        <Button onClick={() => refetch()} className="ml-5">
          Find
        </Button>
      </div>
    </Page>
  );
}
