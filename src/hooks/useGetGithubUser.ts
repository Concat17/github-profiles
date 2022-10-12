import axios from "axios";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "../constants/queryKeys";

//TODO: add types
export const useGetGithubUser = (login: string) =>
  useQuery(
    QUERY_KEYS.GET_GITHUB_USER,
    () =>
      axios
        .get(`https://api.github.com/users/${login}`)
        .then((res) => res.data),
    { enabled: false, refetchOnWindowFocus: false }
  );
