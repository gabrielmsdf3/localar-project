import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const ContainerHeader = styled.div`
  color: green;
  max-width: 90%;
  display: flex;

  border: 1px solid red;
`;
