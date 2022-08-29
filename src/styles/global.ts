import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: #F5F5F5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    .mt {
        margin-top: 1.875rem;
    }
`
