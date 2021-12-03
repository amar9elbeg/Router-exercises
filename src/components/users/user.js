import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUser = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid black;
`;

export const User = ({ user }) => {
  const { nationality, userName, firstName, id } = user;
  return (
    <StyledUser>
      <div>{nationality}</div>
      <div>{userName}</div>
      <div>{firstName}</div>
      <Link to={`/user/${id}`} key={id}>
        <button>View User</button>
      </Link>
    </StyledUser>
  );
};
