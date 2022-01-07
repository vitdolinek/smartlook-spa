import { MailIcon, MapIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";

import { User } from "../../types/user";
import {
  CardContent,
  CardFooter,
  CardIconWrapper,
  CardImage,
  CardImageWrapper,
  CardWrapper,
} from "./UserCard.styled";

interface UserCardProps {
  user: User;
  content?: string | JSX.Element;
}

const UserCard: React.FC<UserCardProps> = ({ user, content }) => (
  <CardWrapper>
    <CardImageWrapper>
      <CardImage src={"https://placekitten.com/640/360"} />
    </CardImageWrapper>
    <CardContent>{content}</CardContent>

    <CardFooter>
      <CardIconWrapper href={`mailto:${user.email}`}>
        <MailIcon color="rgba(107, 114, 128, .70)" width={20} height={20} />
      </CardIconWrapper>
      <CardIconWrapper href={`tel:${user.phone}`}>
        <PhoneIcon color="rgba(107, 114, 128, .70)" width={20} height={20} />
      </CardIconWrapper>
      <CardIconWrapper
        href={`https://www.google.com/maps/place/${user.address.geo.lng},${user.address.geo.lat}`}
        target={"_blank"}
        rel="noreferrer noopener"
      >
        <MapIcon color="rgba(107, 114, 128, .70)" width={20} height={20} />
      </CardIconWrapper>
    </CardFooter>
  </CardWrapper>
);

export default UserCard;
