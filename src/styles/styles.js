import { createGlobalStyle } from "styled-components";

export const StyleGlobal =  createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Opens Sans;
    }

    html{
        width: 100%;
        height: 100%;
        background-image: linear-gradient( to bottom, #009fffdf, #ff115599);
        background-color: #000;
        background-repeat: no-repeat;
        color: #fff;
    }
`