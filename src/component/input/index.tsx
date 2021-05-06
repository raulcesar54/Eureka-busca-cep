import React, { useState, useContext, useRef } from 'react'
import { ButtonSearch, InputContainer } from './style';
import { CepInformationContext } from '../../context/cepInformation'

const Input: React.FC = () => {
    const { searchCep } = useContext(CepInformationContext);
    const [buttonHover, setButtonHover] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const submitForm = () => (inputRef?.current?.value && searchCep(inputRef?.current?.value))
    return (
        <InputContainer onSubmit={(event) => (event.preventDefault(), submitForm())}>
            <input maxLength={8} ref={inputRef} placeholder='Digite seu cep....' />
            <ButtonSearch onClick={() => submitForm()} onMouseOver={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} hover={buttonHover} />
        </InputContainer>
    );
}

export default Input;