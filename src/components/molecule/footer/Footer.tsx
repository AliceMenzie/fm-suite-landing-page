import { Typography } from "../../atom/typography/Typography";
import { StyledContainer, StyledDiv, StyledFooter } from "./Footer.styles";
import fBLogo from "../../../assets/icon-facebook.svg";
import tWLogo from "../../../assets/icon-twitter.svg";
import iGLogo from "../../../assets/icon-instagram.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <Typography as="h5" variant="l" bold>
          suite
        </Typography>
        <Typography as="p" variant="footer">
          Copyright - Suite
        </Typography>
        <StyledContainer>
          <img src={fBLogo} alt="facebook" />
          <img src={tWLogo} alt="twitter" />
          <img src={iGLogo} alt="instgram" />
        </StyledContainer>
      </StyledDiv>
    </StyledFooter>
  );
};
