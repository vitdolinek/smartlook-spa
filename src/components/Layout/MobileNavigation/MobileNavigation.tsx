import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import {
  Backdrop,
  Hamburger,
  MenuItem,
  MenuList,
} from "./MobileNavigation.styled";
import { routes } from "../../../routes/routes";

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = (
    _event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => setIsOpen(!isOpen);

  return (
    <>
      <Hamburger onClick={handleMenuClick}>
        <MenuIcon width={20} height={20} />
      </Hamburger>
      {isOpen && (
        <Backdrop onClick={handleMenuClick}>
          <MenuList>
            {routes.map((route) => (
              <Link key={route.name} to={route.path}>
                <MenuItem>{route.name}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Backdrop>
      )}
    </>
  );
};

export default MobileNavigation;
