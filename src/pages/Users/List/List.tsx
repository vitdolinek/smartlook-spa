import React from "react";

import UserList from "../../../components/UserList/UserList";
import { User } from "../../../types/user";

interface ListProps {
  users: User[];
}

const List: React.FC<ListProps> = ({ users }) => (
  <>
    <UserList users={users} />
  </>
);

export default List;
