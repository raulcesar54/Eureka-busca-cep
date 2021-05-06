import React from 'react'
import logo from '../../assets/logo.svg';
import { HeaderContainer } from './style';

const Header:React.FC = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo eureka"/>
        </HeaderContainer>
    );
}

export default Header
