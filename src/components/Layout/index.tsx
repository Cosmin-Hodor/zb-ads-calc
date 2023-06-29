import { PropsWithChildren } from "react";
import { LayoutContainer } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;