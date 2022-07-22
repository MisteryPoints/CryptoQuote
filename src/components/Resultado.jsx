import styled from "@emotion/styled"

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Info = styled.p`
    font-weight: 700;
    font-size: 18px;
`
const Data = styled.span`
    font-weight: 900;
    font-size: 20px;
`

const Imagen = styled.img`
    display: block;
    width: 150px;
`




const Resultado = ({result}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
    return (
        <Container>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="Imagen Cripto"
            />
            <div>
                <Info>El precio es de: <Data> {PRICE}</Data></Info>
                <p>Precio más alto del día: <Data> {HIGHDAY}</Data></p>
                <p>Precio más bajo del día: <Data> {LOWDAY}</Data></p>
                <p>Cambio en 24 Horas: <Data> {CHANGEPCT24HOUR}%</Data></p>
                <p>Ultima actualización: <Data> {LASTUPDATE}</Data></p>
            </div>
        </Container>
    )
}

export default Resultado