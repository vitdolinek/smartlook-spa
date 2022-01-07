import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled(Link)`
  padding: 15px 20px;
  font-weight: 500;
  color: rgba(39, 40, 56, 0.75);

  &:hover {
    color: rgba(39, 40, 56, 1);
  }
`;
