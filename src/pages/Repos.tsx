import axios from "axios";
import { useQuery } from "react-query";
import { Repository } from "../types/Repository";
import { Link } from "react-router-dom";
import { AddRepo } from "../components/AddRepo";

export function Repos() {
  const getRepositories = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data, isFetching } = useQuery<Repository[]>(
    "repositories",
    async () => getRepositories("http://localhost:3030/repositories"),
    {
      // refetchOnWindowFocus: false,
      // staleTime: 1000,
    }
  );

  return (
    <div className="flex">
      <ul>
        {!isFetching ? (
          data?.map((repository) => (
            <li key={repository.name}>
              <Link to={`repo/${repository.name}`}>{repository.name}</Link>
              <p>{repository.description}</p>
            </li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
      <AddRepo />
    </div>
  );
}
