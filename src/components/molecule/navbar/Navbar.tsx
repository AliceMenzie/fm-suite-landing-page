import { Button } from "../../atom/button/Button";
import { Typography } from "../../atom/typography/Typography";
import { StyledNavbar } from "./Navbar.styles";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <StyledNavbar className={className}>
      <Typography as="h3" bold variant="l">
        suite
      </Typography>
      <Button label="Request Beta Access" />
    </StyledNavbar>
  );
};
