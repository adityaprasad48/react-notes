
// import { createGlobalState } from "react-use";
import styled from "styled-components";

import { createGlobalStyle } from 'styled-components';

export const  GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    html {
        min-height: 100%;
        /* background: #202020; */
    }

    *, button ,input {
        border: 0;
        background: none;
        font-family: 'Roboto' sans-serif;

    } 
    ul {
        list-style: none;
        padding-left: 0;
    }
`

export default GlobalStyles;

export const Container = styled.div`
    color: white;

`