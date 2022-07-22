import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import useSelectCrypto from '../hooks/useSelectCrypto'
import Error from './Error'
import {monedas} from '../data/moneda'

const InputSubmit = styled.input`
    background-color: #7f3cfd;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px 5px 75% 75%;
    transition: background-color .75s ease;
    margin-top: 30px;
    &:hover{
        background-color: #6614ff;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas, setResult}) => {
    const [ crypto, setCrypto ] = useState([])
    const [ error, setError ] = useState(false)
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas) 
    const [ cripto, SelectCrypto ] = useSelectCrypto('Elige tu Criptomoneda', crypto) 

    useEffect(() => {
      const consultarAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=75&tsym=USD"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        const arrayCrypto= resultado.Data.map(cripto => {
            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return objeto
        })
        setCrypto(arrayCrypto)
      }
      consultarAPI()
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()
        if([moneda, cripto].includes('')){
            setError(true)
            setResult({})
            setMonedas({})
            return
        }
        setError(false)
        setMonedas({
            moneda,
            cripto
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error>Todos los campos son obligatorios</Error>}
            
            <SelectMonedas/>
            <SelectCrypto/>
            <InputSubmit 
                type="submit" 
                value="Cotizar" 
            />
        
        </form>
    )
}

export default Formulario