import React from "react";
import { User } from "./user";

export const Users = ({ users }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};
