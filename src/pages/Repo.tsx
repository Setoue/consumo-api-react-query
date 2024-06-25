import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../types/Repository";
// import axios from "axios";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  const handleChangeRepositoryDescription = async () => {
    // Chamada API para atualizar a descrição

    const previousRepos =
      queryClient.getQueryData<Repository[]>("repositories");

    const nextRepos =
      previousRepos &&
      previousRepos.map((repo) => {
        if (repo.name === currentRepository) {
          return { ...repo, description: "testando" };
        } else {
          return repo;
        }
      });

    queryClient.setQueriesData("repos", nextRepos);
  };

  const previousRepos = queryClient.getQueryData<Repository[]>("repositories");

  const repository =
    previousRepos &&
    previousRepos.find((repo) => repo.name === currentRepository);

  console.log(repository);

  return (
    <>
      {repository && (
        <div>
          <strong>{repository.name}</strong>
          <p>{repository.description}</p>
        </div>
      )}
      <button onClick={handleChangeRepositoryDescription}>Change</button>
    </>
  );
}
