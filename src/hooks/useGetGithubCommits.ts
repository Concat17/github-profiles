import axios from "axios";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "../constants";
import { ApiCommit } from "../types/ApiCommitType";

export const useGetGithubCommits = (owner: string, repoName: string) =>
  useQuery<ApiCommit[]>(QUERY_KEYS.GET_GITHUB_COMMITS, () =>
    axios
      .get(`https://api.github.com/repos/${owner}/${repoName}/commits`)
      .then((res) => res.data)
  );
