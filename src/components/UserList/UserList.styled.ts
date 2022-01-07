import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 7px;
`;

export const Item = styled.div`
  width: calc(25% - 10px);
  display: flex;

  @media (max-width: 900px) {
    width: calc(33.33% - 10px);
  }

  @media (max-width: 600px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 400px) {
    width: calc(100% - 10px);
  }
`;
