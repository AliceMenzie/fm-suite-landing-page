import { StyledContainer, StyledMain, StyledArticle } from "./Main.styles";
import manImg from "../../../assets/image-jeremy-small.png";
import styledLine from "../../../assets/pattern-curved-line-2.svg";
import { Typography } from "../../atom/typography/Typography";

export const Main = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <img
          src={manImg}
          alt="man in red shirt on phone"
          style={{
            alignSelf: "center",
            marginTop: "-240px",
            marginBottom: "40px",
          }}
        />
      </StyledContainer>
      <StyledContainer>
        <img src={styledLine} alt="curved line" />
      </StyledContainer>
      <StyledArticle>
        <Typography as="h2" variant="l" appearance="white">
          It just{" "}
          <Typography as="span" variant="l" bold appearance="white">
            works.
          </Typography>
        </Typography>
        <Typography
          as="p"
          variant="quote"
          appearance="white"
          className="txt-center"
          light
        >
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography as="p" variant="m" appearance="white" bold>
            Jeremy Robinson
          </Typography>
          <Typography as="p" variant="s" appearance="white" light>
            cmo, fylo
          </Typography>
        </div>
      </StyledArticle>
    </StyledMain>
  );
};
