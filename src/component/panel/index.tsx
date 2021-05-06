import React, { useContext } from 'react';
import people from '../../assets/people.svg';
import { FaMarker, FaMapMarkerAlt } from 'react-icons/fa'
import { PanelContainer, PanelInformationContainer } from './style';
import { CepInformationContext } from '../../context/cepInformation';
const Panel: React.FC = () => {
    const { info } = useContext(CepInformationContext);
    const { cep, street, district, city, uf } = info
    return (
        <PanelContainer>
            <img src={people} alt="buscar cep" />
            <PanelInformationContainer>
                <FaMapMarkerAlt size={27} />
                <h1>{district}</h1>
                <small>{street}</small>
                <h2>{city} <strong>{uf}</strong></h2>
            </PanelInformationContainer>
        </PanelContainer>
    );
}

export default Panel;