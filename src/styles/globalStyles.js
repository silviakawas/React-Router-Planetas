import { createGlobalStyle } from "styled-components";
import ('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=League+Spartan:wght@400;700&display=swap');



const GlobalStyles = createGlobalStyle`
    body{
        font-family: sans-serif;
        background-color: #070724;
        background-image: url("/background-stars.svg");
        background-repeat: no-repeat;
    }
    a{
        text-decoration: none;
        color: inherit;
    }

`;

export {GlobalStyles};