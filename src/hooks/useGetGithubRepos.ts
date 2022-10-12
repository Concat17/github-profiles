import axios from "axios";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "../constants/queryKeys";

export const useGetGithubRepos = (reposUrl: string) =>
  useQuery(QUERY_KEYS.GET_GITHUB_REPOS, () =>
    axios.get(reposUrl).then((res) => res.data)
  );
