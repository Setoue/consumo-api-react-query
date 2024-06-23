import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../types/Repository";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  const handleChangeRepositoryDescription = async () => {
    // Chamada API para atualizar a descrição

    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    const nextRepos =
      previousRepos &&
      previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "testando" };
        } else {
          return repo;
        }
      });

    queryClient.setQueriesData("repos", nextRepos);
  };

  return (
    <>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Change</button>
    </>
  );
}
