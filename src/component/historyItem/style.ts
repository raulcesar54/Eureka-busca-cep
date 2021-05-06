import styled, { css } from 'styled-components';
import color from '../../style/colors.json'
interface HistoryItemContainer {
    isSelected?:boolean;
}
export const HistoryItemContainer = styled.div<HistoryItemContainer>`
    background-color: ${color.default};
    width: 100%;
    padding: 18px 20px;
    border-radius: 5px;
    display: flex;
    cursor:pointer;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    transition: 1s;
    small {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: bold;
        strong {
        font-weight: 100;

        }
    }

    ${({isSelected})=> isSelected && css `
        opacity: .2;
        cursor: not-allowed;    
    ` }
`