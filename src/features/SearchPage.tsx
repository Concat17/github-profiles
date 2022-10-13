import { useEffect, useState } from "react";

import { Button } from "../components";
import { useGetGithubUser } from "../hooks";
import { useStores } from "../models/root-store";

export function SearchPage() {
  const { user } = useStores();
  const [login, setLogin] = useState("concat17");
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
    <div className="flex bg-gray-800 min-h-full ">
      <div className="flex m-auto">
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          type="text"
        />
        <Button onClick={() => refetch()}>Find</Button>
      </div>
    </div>
  );
}
