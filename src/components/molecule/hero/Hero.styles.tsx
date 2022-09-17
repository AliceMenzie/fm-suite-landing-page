import styled from "styled-components";

interface StyledProps {
  col?: boolean;
}

export const StyledHero = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding-bottom: 290px;
  @media (min-width: 700px) {
    row-gap: 80px;
  }
`;
export const StyledSection = styled.section<StyledProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 50px;

  @media (min-width: 700px) {
    flex-direction: row;
    column-gap: 0px;
  }
`;
export const StyledRow = styled.section<StyledProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;

  @media (min-width: 700px) {
    align-self: center;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media (min-width: 700px) {
    min-width: 500px;
    justify-content: space-around;
    align-items: flex-start;

    p {
      max-width: 350px;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    transform: translateX(-110px);
    z-index: -1;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 45%;
  align-self: end;
  margin-right: 10px;
  margin-bottom: -30px;
  @media (min-width: 700px) {
    width: 42%;
    margin-right: 80px;
    margin-bottom: -80px;
  }
`;
