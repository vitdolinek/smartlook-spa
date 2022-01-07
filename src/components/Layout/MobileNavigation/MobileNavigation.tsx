import { MenuIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { routes } from "../../../routes/routes";
import {
  Backdrop,
  Hamburger,
  MenuItem,
  MenuList,
} from "./MobileNavigation.styled";

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
    } else {
      document.body.setAttribute("style", "");
    }
  }, [isOpen]);

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
