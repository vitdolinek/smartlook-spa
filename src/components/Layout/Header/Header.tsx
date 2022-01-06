import React, { useEffect, useState } from "react";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import { Wrapper } from "./Header.styled";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const Header: React.FC = () => {
  const [isMobileResolution, setIsMobileResolution] = useState<boolean>(
    window.innerWidth < 900,
  );

  const handleResize = () => setIsMobileResolution(window.innerWidth < 900);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <div>Simple SPA Application</div>
      {isMobileResolution ? <MobileNavigation /> : <DesktopNavigation />}
    </Wrapper>
  );
};

export default Header;
