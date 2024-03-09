import { createGlobalStyle } from 'styled-components'

import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body { 
    height: 100%; 
    width: 100%;
  } 
  
  body {
    background-color: ${(props) => props.theme.baseBackground};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothing: antialaised;
    min-width: 58rem;
  }

  body, input, textarea, button, label {
    ${fonts.textM};
  }
  
  a {
    color: ${(props) => props.theme.brand};
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.brand};
    }
  }
  
`
