import { Button } from "../../atom/button/Button";
import { Typography } from "../../atom/typography/Typography";
import { StyledHero, StyledSection } from "./Hero.styles";

export const Hero = () => {
  return (
    <StyledHero>
      <StyledSection flexCol>
        <Typography as="h1" variant="xl">
          A super solution for your business.
        </Typography>
        <Typography as="p" variant="body">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </Typography>
        <Button label="Request Beta Access" primary />
      </StyledSection>
      <StyledSection></StyledSection>
      <StyledSection></StyledSection>
    </StyledHero>
  );
};
