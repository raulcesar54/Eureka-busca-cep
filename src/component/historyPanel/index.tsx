import React from 'react';
import { HistoryPanelContainer } from './style';
import { FaHistory } from 'react-icons/fa'
const HistoryPanel: React.FC = ({ children }) => {
    return (
        <>
            <HistoryPanelContainer>
                <h1><FaHistory style={{ marginRight: '19px' }} />  histórico</h1>
                <small style={{ marginTop: '9px', marginBottom: '40px' }}>histórico de cep encontrados</small>
                <br />
            </HistoryPanelContainer>
            {children}
        </>
    )
}

export default HistoryPanel;