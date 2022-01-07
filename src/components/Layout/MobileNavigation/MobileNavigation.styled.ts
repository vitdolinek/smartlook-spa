import styled from "styled-components";

export const Hamburger = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  border: 1px solid rgba(229, 231, 235, 0.5);
  border-radius: 0.25rem;

  &:hover {
    background-color: rgba(229, 231, 235, 0.5);
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  overflow: hidden !important;
  z-index: 100;
  background-color: rgba(149, 157, 165, 0.3);
`;

export const MenuList = styled.nav`
  background-color: white;
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  list-style: none;
  padding: 5px 0;
  margin: 0 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;

  @media (max-width: 600px) {
    margin: 0 5px;
  }
`;

export const MenuItem = styled.div`
  padding: 0.75rem;
  margin: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: rgba(229, 231, 235, 0.5);
  }
`;
