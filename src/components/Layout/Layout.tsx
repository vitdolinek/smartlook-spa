import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import { ContentWrapper } from "./Layout.styled";

const Layout: React.FC = () => (
  <>
    <Header />
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  </>
);

export default Layout;
