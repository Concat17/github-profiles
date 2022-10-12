import axios from "axios";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "../constants";
import { ApiUser } from "../types";

export const useGetGithubUser = (login: string) =>
  useQuery<ApiUser>(
    QUERY_KEYS.GET_GITHUB_USER,
    () =>
      axios
        .get(`https://api.github.com/users/${login}`)
        .then((res) => res.data),
    { enabled: false, refetchOnWindowFocus: false }
  );
