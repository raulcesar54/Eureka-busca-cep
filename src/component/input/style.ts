import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import colors from '../../style/colors.json';

export const InputContainer = styled.form`
    display: flex;
    flex-direction: row;
    background-color: #263238;
    color: #fff;
    border-radius: 7px;
    padding: 4px 5px;
    align-items: center;

    input {
        flex-basis: 95%;
        background-color: #263238;
        border: none;
        padding: 14px 40px; 
        color:#fff;
        font-size: 14px;
        font-weight:500;

        &::placeholder {
            color:#fff;
            font-size: 14px;
            font-weight:500;
        }
    }
`
interface ButtonSearch {
    hover?: boolean;
}
export const ButtonSearch = styled(FaSearch) <ButtonSearch>`
    cursor: pointer;
    transition:.2s;
    ${({ hover }) => hover && css`
        color: ${colors.default};
    `}

`