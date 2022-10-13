export type ApiCommit = {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
  };
};
