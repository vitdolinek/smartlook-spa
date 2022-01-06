import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { MenuItem, Wrapper } from "./DesktopNavigation.styled";

const DesktopNavigation: React.FC = () => (
  <Wrapper>
    {routes.map((route) => (
      <MenuItem key={route.name} to={route.path}>
        {route.name}
      </MenuItem>
    ))}
  </Wrapper>
);

export default DesktopNavigation;
