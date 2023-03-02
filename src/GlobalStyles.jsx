import { createGlobalStyle } from 'styled-components';

import { styles } from 'styles/constants';

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
        background-color: ${styles.colors.lightgrey};
        color: ${styles.colors.black};
    }
`;

export default GlobalStyles;
