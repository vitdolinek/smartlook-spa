import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/users/${user.id}`} style={{ display: "flex" }}>
          <UserCard user={user} content={<b>{user.name}</b>} />
        </Link>
      </Item>
    ))}
  </Wrapper>
);

export default UserList;
