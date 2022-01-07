import React from "react";
import { User } from "../../types/user";
import { Link } from "react-router-dom";
import { MailIcon, PhoneIcon, MapIcon } from "@heroicons/react/solid";
import {
  CardContent,
  CardFooter,
  CardIconWrapper,
  CardImage,
  CardImageWrapper,
  CardWrapper,
  Item,
  Wrapper,
} from "./UserList.styled";
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
