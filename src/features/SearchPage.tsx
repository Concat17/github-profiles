import { useEffect, useState } from "react";

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
    <div className="bg-gray-800 min-h-full flex">
      <div className="m-auto">
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          type="text"
        />
        <button
          onClick={() => refetch()}
          className="ml-5 p-2 text-white border-white border-2 border-solid rounded"
        >
          Find
        </button>
      </div>
    </div>
  );
}
