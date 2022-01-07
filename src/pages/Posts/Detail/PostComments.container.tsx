import React from "react";
import CommentList from "../../../components/CommentList/CommentList";
import { useFetch } from "../../../hooks/useFetch";
import { Comment } from "../../../types/comment";

interface PostCommentsContainerProps {
  postId: number;
}

const PostCommentsContainer: React.FC<PostCommentsContainerProps> = ({
  postId,
}) => {
  const { isLoading, data, error } = useFetch<Comment[]>({
    url: `posts/${postId}/comments`,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error...</div>;

  return <CommentList comments={data} />;
};

export default PostCommentsContainer;
