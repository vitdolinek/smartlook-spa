import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Detail = styled.div`
  width: calc(25% - 5px);

  @media (max-width: 900px) {
    width: calc(50% - 5px);
  }

  @media (max-width: 600px) {
    width: calc(100% - 5px);
  }
`;

export const Posts = styled.div`
  width: calc(75% - 5px);

  @media (max-width: 900px) {
    width: calc(50% - 5px);
  }

  @media (max-width: 600px) {
    width: calc(100% - 5px);
  }
`;
