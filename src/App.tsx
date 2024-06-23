import axios from "axios";
import { useQuery } from "react-query";
import { Repository } from "./types/Repository";

function App() {
  const { data, isFetching } = useQuery<Repository[]>("repos", async () => {
    const response = await axios.get(
      "https://api.github.com/users/setoue/repos"
    );
    return response.data;
  });

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repository) => (
        <li key={repository.full_name}>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default App;
