import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Detail = styled.div`
  max-width: calc(25% - 5px);
`;

export const Posts = styled.div`
  max-width: calc(75% - 5px);
`;
