import { Container, Header, Thumb, Informations } from "./styles";

export default function Card(props) {
    const {name, thumb, principal, country, year} = props;

    return (
        <Container>
            <Header>{name}</Header>
            <Thumb src={thumb}></Thumb>
            <Informations>
                <label><b>Diretor:</b> {principal}</label>
                <label><b>País:</b> {country}</label>
                <label><b>Ano de Lançamento:</b> {year}</label>
            </Informations>
        </Container>
    )
}