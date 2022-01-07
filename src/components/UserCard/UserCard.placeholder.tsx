import "react-loading-skeleton/dist/skeleton.css";

import { MailIcon, MapIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import Skeleton from "react-loading-skeleton";

import {
  CardContent,
  CardFooter,
  CardIconWrapper,
  CardImageWrapper,
  CardWrapper,
} from "./UserCard.styled";

const UserCardPlaceholder: React.FC = () => (
  <CardWrapper>
    <CardImageWrapper>
      <Skeleton height={180} />
    </CardImageWrapper>
    <CardContent>
      <Skeleton />
    </CardContent>

    <CardFooter>
      <CardIconWrapper>
        <MailIcon color="rgba(107, 114, 128, .70)" width={20} height={20} />
      </CardIconWrapper>
      <CardIconWrapper>
        <PhoneIcon color="rgba(107, 114, 128, .70)" width={20} height={20} />
      </CardIconWrapper>
      <CardIconWrapper>
        <MapIcon color="rgba(107, 114, 128, .70)" width={20} height={20} />
      </CardIconWrapper>
    </CardFooter>
  </CardWrapper>
);

export default UserCardPlaceholder;
