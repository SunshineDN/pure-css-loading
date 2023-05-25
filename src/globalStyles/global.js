import { createGlobalStyle } from "styled-components";
import NeueBit from "../assets/fonts/BitmapFontPack-FreeForPersonalUse/PPNeueBit-Bold.otf"

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'NeueBit';
    src: url(${NeueBit}) format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:after, *:before {
    box-sizing: border-box;
  }
`;