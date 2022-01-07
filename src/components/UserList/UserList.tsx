import React from "react";

import { User } from "../../types/user";
import UserCard from "../UserCard/UserCard";
import { Item, Wrapper } from "./UserList.styled";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <Wrapper>
    {users.map((user) => (
      <Item key={user.id}>
        <UserCard user={user} content={user.name} />
      </Item>
    ))}
  </Wrapper>
);

export default UserList;
