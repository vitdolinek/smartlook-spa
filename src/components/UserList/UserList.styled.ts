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

export const CardWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

export const CardImageWrapper = styled.div`
  object-fit: contain;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 5px 0;
  font-weight: 500;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 5px;
`;

export const CardIconWrapper = styled.a`
  flex: 1;
  height: 20px;

  &:hover > svg {
    color: rgba(107, 114, 128, 1);
  }
`;
