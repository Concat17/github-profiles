import { useCallback, useEffect, useState } from "react";

import { Button, Input } from "../components";
import { Page } from "../components/Page";
import { useGetGithubUser } from "../hooks";
import { useStores } from "../models/root-store";

export function SearchPage() {
  const { user } = useStores();
  const [login, setLogin] = useState("");
  const [isUserNotFound, setIsUserNotFound] = useState(false);
  const {
    data: userData,
    isError,
    isLoading,
    isFetching,
    isFetchedAfterMount,
    refetch,
  } = useGetGithubUser(login);

  useEffect(() => {
    // isFetchedAfterMount used here to not show previously cached data after returning to this page
    if (!isError && userData && isFetchedAfterMount) {
      user.setUserInfo(userData);
    }
  }, [isError, isFetchedAfterMount, user, userData]);

  const handleFindClick = useCallback(() => {
    setIsUserNotFound(false);
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isError) setIsUserNotFound(true);
  }, [isError]);
  console.log("isLoad", isLoading, isFetching);
  return (
    <Page>
      <div className="m-auto">
        <div className="flex ">
          <Input
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            type="text"
          />
          <Button
            isLoading={isLoading || isFetching}
            onClick={handleFindClick}
            className="ml-5 "
          >
            Find
          </Button>
        </div>
        <span
          className={`text-red-500 mt-2 block ${
            !isUserNotFound && "invisible"
          }`}
        >
          User is not found :(
        </span>
      </div>
    </Page>
  );
}
