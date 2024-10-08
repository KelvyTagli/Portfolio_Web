import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'inter', sans-serif;
    }

    :root {
        font-size: clamp(40%, 1% + 2vw , 62.5%);
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    body, input, button, textarea {
        font-family: 'inter', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button,a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover ,a:hover {
        filter: brightness(0.9);
    }
`