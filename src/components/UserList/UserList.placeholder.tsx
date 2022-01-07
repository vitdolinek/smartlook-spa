import React from "react";

import UserCardPlaceholder from "../UserCard/UserCard.placeholder";
import { Item, Wrapper } from "./UserList.styled";

const UserListPlaceholder: React.FC = () => (
  <Wrapper>
    {new Array(10).fill(null).map((_, index) => (
      <Item key={index}>
        <UserCardPlaceholder />
      </Item>
    ))}
  </Wrapper>
);

export default UserListPlaceholder;
