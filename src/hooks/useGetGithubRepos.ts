import axios from "axios";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "../constants";
import { ApiRepo } from "../types";

export const useGetGithubRepos = (reposUrl: string) =>
  useQuery<ApiRepo[]>(QUERY_KEYS.GET_GITHUB_REPOS, () =>
    axios.get(`${reposUrl}?per_page=100`).then((res) => res.data)
  );
