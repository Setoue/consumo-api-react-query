import { useFetch } from "./hooks/useFetch";
import { Repository } from "./types/Repository";

function App() {
  const { data: repositories, isFetching } =
    useFetch<Repository[]>("users/setoue/repos");

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map((repository) => (
        <li key={repository.full_name}>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default App;
