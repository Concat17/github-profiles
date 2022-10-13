import { useGetGithubRepos } from "../hooks";
import { useStores } from "../models/root-store";

export function UserPage() {
  const { user } = useStores();

  const {
    data: reposData,
    isLoading,
    isError,
  } = useGetGithubRepos(user.reposUrl);

  return (
    <div className="bg-gray-800 min-h-full">
      <button onClick={() => user.reset()}>Back</button>
      <div>
        <div className="m-auto">{user.login}</div>
        <img src={user.avatarUrl} alt="Profile_Pic" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Programming Language</th>
            <th>Description</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {reposData &&
            reposData.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.language}</td>
                <td>{repo.description}</td>
                <td>{repo.stargazers_count}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
