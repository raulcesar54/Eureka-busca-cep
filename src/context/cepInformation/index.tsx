import { createContext, useContext, useState } from 'react';
import { useSearchCep } from '../../hooks/useSearchCep'
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
        const { cep, complemento, bairro, localidade, uf } = await getCep(cepInputed);
        setInfo({ cep, district:bairro, street:complemento, uf, city:localidade })
    }
    return (
        <CepInformationContext.Provider value={{ info, searchCep }}>
            {children}
        </CepInformationContext.Provider>
    )
}