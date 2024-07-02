import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: #fafafa;
        color: #333
    }

    button {
        background-color: #fafafa;
        font-size: 1rem;
        color: #333
    }
`;
