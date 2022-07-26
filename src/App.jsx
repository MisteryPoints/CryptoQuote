import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import CryptoImage from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Spinner from './components/Spinner'
import Resultado from './components/Resultado'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  align-items: center ;
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

const Footer = styled.footer`
  background-color: rgb(2 100 233);
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
  border-top: 2px solid gray;  
`
const FooterText = styled.h2`
  text-align: center;
  color: white;
  margin: 0;
  font-family: sans-serif;
  font-size: bold;
  size: 1.75rem;
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 150px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {  

  const [ monedas, setMonedas ] = useState({})
  const [ result, setResult ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const quoteCrypto= async () => {
        setCargando(true)
        setResult({})

        const { moneda, cripto } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResult(resultado.DISPLAY[cripto][moneda])

        setCargando(false)
      }
      quoteCrypto()
    }
  }, [monedas])
  

  return (
    <div >
      <Container>
        <Image src={CryptoImage} alt='Crypto Image' draggable='false'/>
        <div>
          <Heading>Insta~Quote Crypto Markets</Heading> 
          <Formulario
            setMonedas={setMonedas}
            setResult={setResult}
          />
          {cargando && <Spinner/>}
          {result.PRICE && <Resultado result={result}/>}
        </div>
      </Container>
      <Footer>
        <FooterText>Desarrollado por DevPoint Víctor Tejada</FooterText>
      </Footer>
    </div>
  )
}

export default App
