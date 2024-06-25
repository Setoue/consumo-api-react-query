import axios from "axios";
import { useState } from "react";
import { Repository } from "../types/Repository";

export const AddRepo = () => {
  const [form, setForm] = useState<Repository>({
    id: "",
    name: "",
    description: "",
  });

  const handleCreateRepository = () => {
    axios.post("http://localhost:3030/repositories", {
      name: form.name,
      description: form.description,
    });
  };

  return (
    <form onSubmit={handleCreateRepository}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Write name"
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Write description"
      />
      <button type="submit">Add Repository</button>
    </form>
  );
};
