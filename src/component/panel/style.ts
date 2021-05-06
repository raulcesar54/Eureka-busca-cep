import styled from 'styled-components';
import colors from '../../style/colors.json';

export const PanelContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 0px;
    margin-top: -85px;
    pointer-events:none;
    img {
        max-width: 500px;
        margin-left: -50px;
        z-index: 1;
    }
`
export const PanelInformationContainer = styled.div`
    display:flex;
    flex:1;
    flex-direction: column;
    background-color: ${colors.default};
    align-items: center;
    align-content:center;
    padding: 44px 38px;
    max-width: 400px;
    max-height:285px;
    border-radius: 26px;
    justify-content:center;
    margin-left: -140px;
    z-index:0;
    svg {
        min-height:27px;
        margin-bottom: 32px;
    }
    h1 {
        font-size: 40px;
        text-transform: uppercase;
        text-align: center;
        max-width: 15ch;
        text-overflow: ellipsis;
        margin-left:30px;
    }
    small {
        text-transform: uppercase;
        font-weight: 200;
    }
    h2 {
        text-transform: uppercase;
        margin-top:54px;
        strong {
            font-weight: 500;
        }
    }
   
`