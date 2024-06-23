import axios from "axios";
import { useQuery } from "react-query";
import { Repository } from "../types/Repository";
import { Link } from "react-router-dom";

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/setoue/repos"
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60,
    }
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repository) => (
        <li key={repository.full_name}>
          <Link to={`repo/${repository.full_name}`}>
            {repository.full_name}
          </Link>
          <p>{repository.description}</p>
        </li>
      ))}
    </ul>
  );
}
