import React, { useContext, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HistoryItemContainer } from './style';
import { CepInformationContext } from '../../context/cepInformation'
interface HistoryItem {
    cep: string;
    city: string;
    uf: string
    updated: () => void
}

const HistoryItem: React.FC<HistoryItem> = ({ cep, city, uf, updated }) => {
    const { searchCep, info } = useContext(CepInformationContext);

    const [firstPart, secondPart] = info?.cep?.split('-');
    const verifyEqual = !secondPart ? cep === firstPart : cep === `${firstPart}${secondPart}`

    useEffect(() => {
        updated()
    }, [info])
    return (
        <HistoryItemContainer isSelected={verifyEqual} onClick={() => !verifyEqual && searchCep(cep)}>
            <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }}>
                <FaMapMarkerAlt />
                <small style={{ marginLeft: '10px' }}>
                    {cep}
                </small>
            </div>
            <small>
                {city} <strong>{uf}</strong>
            </small>
        </HistoryItemContainer>
    )
}

export default HistoryItem;