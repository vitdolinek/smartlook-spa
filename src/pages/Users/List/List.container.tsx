import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { User } from "../../../types/user";
import List from "./List";

const ListContainer: React.FC = () => {
  const { isLoading, data, error } = useFetch<User[]>({ url: "users" });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Something went wrong...</div>;

  return <List users={data} />;
};

export default ListContainer;
