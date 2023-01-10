import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`




body::-webkit-scrollbar {
            display: none;
        }
    html {
      scroll-behavior: auto;
      -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    
    :root {
        --regular: "input-mono-compressed", monospace;
        --bold: "roc-grotesk-wide",sans-serif;
        --pink: #F408F4;
        --white: #F9F9F9;
        --black: #000000;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
    }
    body {
        background-color: var(--white);
        color: var(--black);
        font-family: var(--regular);
        font-size: 62.5%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        @media (max-width: 680px) {
          font-size: 12px;
      }
    }
    h1, h2, h3 {
      word-break: break-word;
    }

    p {
        font-size: 2rem;
    }
`