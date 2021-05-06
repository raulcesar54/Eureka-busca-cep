import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    
    }
    body{
        background:#fff;
        display:flex;
        -webkit-font-smooth:antialiased;
    }
    body, input, button, h1, h2, h3 {
        font-size:16px;
        font-weight: 599;
        font-family:'Roboto',sans-serif;
    }
    button{
        cursor:pointer;
    }
    #root {
        width:1080px;
        max-width:1080px;
        margin: 0 auto;
        padding: 10px 20px;
    }
`

