import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export default GlobalStyles;
