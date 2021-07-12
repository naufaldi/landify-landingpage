import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="full" position="relative">
      <Meta />
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
