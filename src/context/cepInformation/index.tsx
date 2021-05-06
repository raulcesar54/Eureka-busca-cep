import { createContext, useContext, useState } from 'react';
import { useSearchCep } from '../../hooks/useSearchCep'
import { localApi } from '../../services/api';
interface Information {
    cep: string;
    city: string;
    street: string;
    district: string;
    uf: string;
}
interface CepInformation {
    info: Information
    searchCep: (cep: string) => void
}

export const CepInformationContext = createContext({} as CepInformation);

export const CepInformationProvider: React.FC = ({ children }) => {
    const { getCep } = useSearchCep()
    const [info, setInfo] = useState<Information>({
        cep: '', city: '', street: '', district: '', uf: ''
    })

    const searchCep = async (cepInputed: string) => {
        const { created, info } = await verifyCep(cepInputed);
        if (created) {
            const { cep, bairro, complemento, uf, cidade } = info;
            setInfo({ cep, district: bairro, street: complemento, uf, city: cidade })
        }
        else {
            const { cep, complemento, bairro, localidade, uf } = await getCep(cepInputed);
            if (cep) {
                setInfo({ cep, district: bairro, street: complemento, uf, city: localidade })
                insertNewCepInfo({ cep, district: bairro, street: complemento, uf, city: localidade })
            } else {
                alert('cep invalido')
            }
        }
    }
    const verifyCep = async (cep: string) => {
        const { data } = await localApi.get(`cep/verify/${cep}`)
        return data
    }
    const insertNewCepInfo = async (information: Information) => {
        const { cep, uf, street: rua, district: bairro, city: cidade } = information
        const [first, second] = cep.split('-')
        const { data } = await localApi.post(`cep`, {
            cep: `${first}${second}`, uf, rua, bairro, cidade, complemento: rua
        })

    }
    return (
        <CepInformationContext.Provider value={{ info, searchCep }}>
            {children}
        </CepInformationContext.Provider>
    )
}