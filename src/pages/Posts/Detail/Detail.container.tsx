import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";
import { Post } from "../../../types/post";
import Detail from "./Detail";

const DetailContainer: React.FC = () => {
  const { id } = useParams<"id">();
  const { isLoading, data, error } = useFetch<Post>({ url: `posts/${id}` });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error...</div>;

  return <Detail post={data} />;
};

export default DetailContainer;
