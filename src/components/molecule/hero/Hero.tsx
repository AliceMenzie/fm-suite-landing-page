import { Button } from "../../atom/button/Button";
import { Typography } from "../../atom/typography/Typography";
import { Container, StyledHero, StyledSection } from "./Hero.styles";
import heroImg from "../../../assets/image-hero-landscape.png";
import curvedLine from "../../../assets/pattern-curved-line-1.svg";

interface heroProps {
  className?: string;
}

export const Hero = ({ className }: heroProps) => {
  return (
    <StyledHero className={className}>
      <StyledSection col>
        <img
          style={{
            width: "45%",
            alignSelf: "end",
            marginRight: "10px",
            marginBottom: "-20px",
          }}
          src={curvedLine}
          alt="stylish line"
        />
        <Typography as="h1" variant="l">
          A{" "}
          <Typography as="span" variant="l" bold>
            super solution
          </Typography>
          for your{" "}
          <Typography as="span" variant="l" bold>
            business.
          </Typography>
        </Typography>
        <Typography as="p" variant="body">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </Typography>
        <Button label="Request Beta Access" primary />
      </StyledSection>
      <Container>
        <img
          style={{
            width: "343px",
            borderRadius: "10px",
            objectPosition: "center",
            objectFit: "cover",
          }}
          src={heroImg}
          alt="mobile phone"
        />
      </Container>
      <StyledSection>
        <Container>
          <Typography as="h3" variant="xl" bold>
            2K+
          </Typography>
          <Typography as="span" variant="s">
            Companies
          </Typography>
        </Container>
        <Container>
          <Typography as="h3" variant="xl" bold>
            8
          </Typography>
          <Typography as="span" variant="s">
            Languages
          </Typography>
        </Container>
        <Container>
          <Typography as="h3" variant="xl" bold>
            1.2M
          </Typography>
          <Typography as="span" variant="s">
            Leads
          </Typography>
        </Container>
      </StyledSection>
    </StyledHero>
  );
};
