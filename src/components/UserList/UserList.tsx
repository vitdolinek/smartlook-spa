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

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <Wrapper>
    {users.map((user) => (
      <Item key={user.id}>
        <CardWrapper>
          <Link to={`/user/${user.id}`}>
            <CardImageWrapper>
              <CardImage src={"https://placekitten.com/640/360"} />
            </CardImageWrapper>
            <CardContent>{user.name}</CardContent>
          </Link>

          <CardFooter>
            <CardIconWrapper href={`mailto:${user.email}`}>
              <MailIcon
                color="rgba(107, 114, 128, .70)"
                width={20}
                height={20}
              />
            </CardIconWrapper>
            <CardIconWrapper href={`tel:${user.phone}`}>
              <PhoneIcon
                color="rgba(107, 114, 128, .70)"
                width={20}
                height={20}
              />
            </CardIconWrapper>
            <CardIconWrapper
              href={`https://www.google.com/maps/place/${user.address.geo.lng},${user.address.geo.lat}`}
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <MapIcon
                color="rgba(107, 114, 128, .70)"
                width={20}
                height={20}
              />
            </CardIconWrapper>
          </CardFooter>
        </CardWrapper>
      </Item>
    ))}
  </Wrapper>
);

export default UserList;
