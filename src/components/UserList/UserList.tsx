import React from "react";
import { User } from "../../types/user";
import { Item, Wrapper } from "./UserList.styled";
import UserCard from "../UserCard/UserCard";

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
