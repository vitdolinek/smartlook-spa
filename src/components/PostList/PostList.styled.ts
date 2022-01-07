import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Title = styled.h2`
  margin: 5px 0;
  color: rgba(17, 24, 39, 0.75);
`;

export const LearnMore = styled(Link)`
  font-weight: 700;
  color: rgba(43, 108, 176, 1);
  cursor: pointer;
`;
