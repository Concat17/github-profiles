import { BackArrowIcon, Button } from "../components";
import { useGetGithubRepos } from "../hooks";
import { useStores } from "../models/root-store";

export function UserPage() {
  const { user, repo } = useStores();

  const {
    data: reposData,
    isLoading,
    isError,
  } = useGetGithubRepos(user.reposUrl);

  return (
    <div className="flex flex-col h-full p-3 bg-gray-800 min-h-full">
      <Button icon={<BackArrowIcon />} onClick={() => user.reset()}>
        Back
      </Button>

      <div className="flex w-fit m-auto items-center">
        <h3 className="mr-16 text-2xl font-bold text-green-400">
          {user.login}
        </h3>
        <img
          src={user.avatarUrl}
          alt="Profile_Pic"
          className="h-32 w-32 rounded-full"
        />
      </div>
      <div className="mx-32 mt-4 grow overflow-auto ">
        <table className=" w-full text-green-100 ">
          <thead className=" text-green-400">
            <tr>
              <th className="sticky top-0 bg-black z-50 px-2 py-2">Name</th>
              <th className="sticky top-0 bg-black px-2 py-2">
                Programming Language
              </th>
              <th className="sticky top-0 bg-black px-2 py-2">Description</th>
              <th className="sticky top-0 bg-black px-2 py-1">Stars</th>
            </tr>
          </thead>
          <tbody className="  ">
            {reposData &&
              reposData.map((r, i) => (
                <tr
                  key={r.id}
                  className={`${
                    i % 2 === 0 ? "bg-gray-700" : "bg-transparent"
                  } `}
                >
                  <td
                    className="border-r border-gray-900 px-2 py-1"
                    onClick={() => repo.setRepoInfo(r)}
                  >
                    {r.name}
                  </td>
                  <td className="border-r border-gray-900 px-2 py-1">
                    {r.language}
                  </td>
                  <td className="border-r w-5/12 border-gray-900 px-2 py-1 ">
                    {r.description}
                  </td>
                  <td className="px-2 py-1">{r.stargazers_count}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
