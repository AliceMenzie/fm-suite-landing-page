import { Button } from "../../atom/button/Button";
import { Typography } from "../../atom/typography/Typography";
import { StyledNavbar } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Typography as="h3" bold variant="l">
        suite
      </Typography>
      <Button label="Request Beta Access" />
    </StyledNavbar>
  );
};
