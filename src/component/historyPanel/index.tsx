import React, { useEffect, useState } from 'react';
import { HistoryPanelContainer } from './style';
import { FaHistory } from 'react-icons/fa'
import { localApi } from '../../services/api';
import HistoryItem from '../historyItem';
const HistoryPanel: React.FC = ({ children }) => {
    const [cepResult, setCepResult] = useState([]);
    const [infoUpdated,setInfoUpdated] = useState(0)
    const fetchData = async () => {
        const { data } = await localApi.get('cep');
        setCepResult(data)
    }
    useEffect(() => {
        fetchData()
    }, [infoUpdated])
    return (
        <>
            <HistoryPanelContainer>
                <h1><FaHistory style={{ marginRight: '19px' }} />  histórico</h1>
                <small style={{ marginTop: '9px', marginBottom: '40px' }}>histórico de cep encontrados</small>
                <br />
            </HistoryPanelContainer>
            {cepResult.map(({ cep, cidade, uf }) => {
                return <HistoryItem cep={cep} city={cidade} uf={uf} updated={()=> setInfoUpdated(e => Math.random())} />
            })}
        </>
    )
}

export default HistoryPanel;