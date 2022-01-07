import React from "react";
import { default as UserPosts } from "./UserPosts.container";
import { User } from "../../../types/user";
import { Detail, Posts, Wrapper } from "./Profile.styled";
import UserCard from "../../../components/UserCard/UserCard";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => (
  <Wrapper>
    <Detail>
      <UserCard
        user={user}
        content={
          <>
            <p>{user.name}</p>
            <p>{user.website}</p>
          </>
        }
      />
    </Detail>
    <Posts>
      <UserPosts userId={user.id} />
    </Posts>
  </Wrapper>
);

export default Profile;
