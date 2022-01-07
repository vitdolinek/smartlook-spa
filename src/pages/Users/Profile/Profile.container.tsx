import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { User } from "../../../types/user";
import Profile from "./Profile";

const ProfileContainer: React.FC = () => {
  const { id } = useParams<"id">();
  const { isLoading, data, error } = useFetch<User>({ url: `users/${id}` });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error...</div>;

  return <Profile user={data} />;
};

export default ProfileContainer;
