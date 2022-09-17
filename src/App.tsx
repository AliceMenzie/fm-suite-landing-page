import styled, { createGlobalStyle } from "styled-components";
import { Footer } from "./components/molecule/footer/Footer";
import { Landing } from "./components/pages/Landing";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Epilogue', sans-serif;
    box-sizing: border-box;
  }

  .m-x-16 {
    margin-left: 16px;
    margin-right: 16px;
  }
  .m-t-24 {
    margin-top: 24px;
  }
  .m-16 {
    margin: 16px;
  }
  .m-b-56 {
    margin-bottom: 56px;
  }
  .txt-center {
    text-align: center;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
