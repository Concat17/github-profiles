import { BackArrowIcon, Button, Table, TBody, TD, TH, THead, TR } from "../components";
import { Page } from "../components/Page";
import { useGetGithubRepos } from "../hooks";
import { useStores } from "../models/root-store";

export function UserPage() {
  const { user, repo } = useStores();

  const { data: reposData, isError } = useGetGithubRepos(user.reposUrl);

  return (
    <Page>
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
      <div className="mt-4 grow overflow-auto ">
        <Table>
          <THead>
            <TR>
              <TH>Name</TH>
              <TH>Programming Language</TH>
              <TH>Description</TH>
              <TH>Stars</TH>
            </TR>
          </THead>
          <TBody>
            {reposData &&
              reposData.map((r, i) => (
                <TR key={r.id} i={i}>
                  <TD className="border-r" onClick={() => repo.setRepoInfo(r)}>
                    {r.name}
                  </TD>
                  <TD className="border-r">{r.language}</TD>
                  <TD className="border-r w-5/12">{r.description}</TD>
                  <TD>{r.stargazers_count}</TD>
                </TR>
              ))}
          </TBody>
        </Table>
      </div>
    </Page>
  );
}
