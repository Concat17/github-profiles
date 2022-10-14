import { BackArrowIcon, Button, Table, TBody, TD, TH, THead, TR } from "../components";
import { Page } from "../components/Page";
import { useGetGithubCommits } from "../hooks/useGetGithubCommits";
import { useStores } from "../models/root-store";
import { formatDate } from "../utils";

export function CommitsPage() {
  const { repo } = useStores();

  const { data: commits } = useGetGithubCommits(repo.owner, repo.name);

  return (
    <Page>
      <Button icon={<BackArrowIcon />} onClick={() => repo.reset()}>
        Back
      </Button>
      <div className="mt-4 grow overflow-auto ">
        <Table>
          <THead>
            <TR>
              <TH>Author</TH>
              <TH>Hash</TH>
              <TH>Date</TH>
            </TR>
          </THead>
          <TBody>
            {commits &&
              commits.map((c, i) => (
                <TR className="text-center" key={c.sha} i={i}>
                  <TD>{c.commit.author.name}</TD>
                  <TD>{c.sha}</TD>
                  <TD>{formatDate(c.commit.author.date)}</TD>
                </TR>
              ))}
          </TBody>
        </Table>
      </div>
    </Page>
  );
}
