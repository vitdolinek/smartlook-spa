import React from "react";

import PostListPlaceholder from "../../../components/PostList/PostList.placeholder";
import { useFetch } from "../../../hooks/useFetch";
import { Post } from "../../../types/post";
import List from "./List";

const ListContainer: React.FC = () => {
  const { isLoading, data, error } = useFetch<Post[]>({ url: `posts` });

  if (isLoading) return <PostListPlaceholder />;

  if (error || !data) return <div>Error...</div>;

  return <List posts={data} />;
};

export default ListContainer;
