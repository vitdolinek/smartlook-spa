import React from "react";
import { User } from "../../../types/user";

interface ListProps {
  users: User[];
}

const List: React.FC<ListProps> = ({ users }) => (
  <>
    {users.map((user) => (
      <div key={user.id}>{user.name}</div>
    ))}
  </>
);

export default List;
