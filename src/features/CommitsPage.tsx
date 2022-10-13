import { useGetGithubCommits } from "../hooks/useGetGithubCommits";
import { useStores } from "../models/root-store";

export function CommitsPage() {
  const { repo } = useStores();

  const { data: commits } = useGetGithubCommits(repo.owner, repo.name);

  return (
    <div className="bg-gray-800 min-h-full">
      <button onClick={() => repo.reset()}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Hash</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {commits &&
            commits.map((c) => (
              <tr key={c.sha}>
                <td>{c.commit.author.name}</td>
                <td>{c.sha}</td>
                <td>{c.commit.author.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
