import { Footer } from "../molecule/footer/Footer";
import { Hero } from "../molecule/hero/Hero";
import { Main } from "../molecule/main/Main";
import { Navbar } from "../molecule/navbar/Navbar";
import { StyledPage } from "./Landing.styles";

export const Landing = () => {
  return (
    <StyledPage>
      <Navbar className="m-b-56 m-x-16 m-t-24" />
      <Hero className="m-16" />
      <Main />
      <Footer />
    </StyledPage>
  );
};
