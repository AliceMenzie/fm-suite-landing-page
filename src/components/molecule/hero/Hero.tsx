import { Button } from "../../atom/button/Button";
import { Typography } from "../../atom/typography/Typography";
import { Container, StyledHero, StyledSection } from "./Hero.styles";
import heroImg from "../../../assets/image-hero-landscape.png";
import curvedLine from "../../../assets/pattern-curved-line-1.svg";

export const Hero = () => {
  return (
    <StyledHero>
      <StyledSection col>
        <img
          style={{
            width: "45%",
            alignSelf: "end",
            marginRight: "25px",
            marginBottom: "-30px",
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
      <div>
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
      </div>
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
