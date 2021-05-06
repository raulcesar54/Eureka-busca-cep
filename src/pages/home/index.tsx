import React from 'react';
import { TextContainer, Container, Row } from './style';
import Header from '../../component/header';
import Input from '../../component/input';
import Panel from '../../component/panel';
import HistoryPanel from '../../component/historyPanel';
import HistoryItem from '../../component/historyItem';
import {localApi} from '../../services/api';
const Login: React.FC = () => {
    
    return (
        <>
            <Header />
            <Row>
                <Container style={{ width: '70%' }}>
                    <TextContainer>
                        <h1>buscar cep</h1>
                        <small>Bem vindo, no EUREKASCEP voçê recebe infromações rapidas e faceis
                        a partir de um cep, vamos iniciar colocando um cep abaixo!</small>
                    </TextContainer>
                    <Input />
                    <Panel />
                </Container>
                <Container>
                    <HistoryPanel>
                        <HistoryItem cep='78058320' city='cuiaba' uf='MT' />
                        <HistoryItem cep='18703757' city='cuiaba' uf='MT' />
                    </HistoryPanel>
                </Container>
            </Row>
        </>
    )
}

export default Login