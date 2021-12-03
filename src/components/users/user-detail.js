import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const UserDetail = ({ users }) => {
  const { userId } = useParams();
  const selectedUser = users.find((user) => user.id === userId);
  console.log(selectedUser);

  return (
    <div style={{ width: "500px", backgroundColor: "red" }}>
      {selectedUser.firstName}
      <Link to="/users">
        <button>goBack</button>
      </Link>
    </div>
  );
};
