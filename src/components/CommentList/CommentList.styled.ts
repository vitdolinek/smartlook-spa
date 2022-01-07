import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  list-style: none;
  border-radius: 5px;
  gap: 10px;
`;

export const Item = styled.li`
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: rgba(17, 24, 39, 0.75);
`;

export const Title = styled.h4`
  margin: 0;
  color: rgba(17, 24, 39, 0.75);
`;

export const AuthorEmail = styled.span`
  font-size: 10px;
`;

export const Body = styled.p`
  margin: 5px 0;
`;
