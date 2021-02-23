import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html {

        //Firefox  64+
        scrollbar-width: thin;
        scrollbar-color: darkgrey #fff;

        //Google Chrome, etc
        &::-webkit-scrollbar{
            width: .5rem;
        }

        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }

    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    .section-title {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }

    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`

export default GlobalStyles
