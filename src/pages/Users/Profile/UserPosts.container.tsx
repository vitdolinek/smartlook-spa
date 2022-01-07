import React from "react";

import PostList from "../../../components/PostList/PostList";
import PostListPlaceholder from "../../../components/PostList/PostList.placeholder";
import { useFetch } from "../../../hooks/useFetch";
import { Post } from "../../../types/post";

interface UserPostsContainerProps {
  userId: number;
}

const UserPostsContainer: React.FC<UserPostsContainerProps> = ({ userId }) => {
  const { isLoading, data, error } = useFetch<Post[]>({
    url: `user/${userId}/posts`,
  });

  if (isLoading) return <PostListPlaceholder />;

  if (error || !data) return <div>Something went wrong...</div>;

  return <PostList posts={data} />;
};

export default UserPostsContainer;
