import { cepApi } from '../services/api';
interface GetCepReturn {
    bairro: string
    cep: string
    complemento: string
    localidade: string
    logradouro: string
    siafi: string
    uf: string
}
export const useSearchCep = () => {

    const getCep = async (cep: string):Promise<GetCepReturn> => {
        try {
            const { data } = await cepApi.get(`${cep}/json`);
            return data;
        } catch (err) {
            return err
        }
    }

    return { getCep }

}