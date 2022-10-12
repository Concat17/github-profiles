import { useEffect, useState } from "react";

import { useGetGithubUser } from "../hooks/useGetGithubUser";
import { useStores } from "../models/root-store/root-store-context";

export function SearchPage() {
  const { user } = useStores();
  const [login, setLogin] = useState("");
  const { data: userData, refetch } = useGetGithubUser(login);

  const handleClick = () => {
    refetch();
  };

  useEffect(() => {
    if (userData?.login && userData?.avatar_url && userData?.repos_url) {
      user.setUserInfo(
        userData.login,
        userData.avatar_url,
        userData?.repos_url
      );
    }
  }, [user, userData]);

  return (
    <div className="bg-gray-800 min-h-full flex">
      <div className="m-auto">
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          type="text"
        />
        <button
          onClick={handleClick}
          className="ml-5 p-2 text-white border-white border-2 border-solid rounded"
        >
          Find
        </button>
      </div>
    </div>
  );
}
