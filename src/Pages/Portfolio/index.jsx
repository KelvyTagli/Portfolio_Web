import { Container, Title } from "./styles";
import { Card } from "../../Components/Cards";
import Cover from "../../assets/Cover.png"

export function Portfolio() {
    return (
        <Container>
            <Title>
                <h1>MEU <br />PORTFÓLIO </h1>
                <p>Este são alguns dos trabalhos e projetos que já realizei</p>
            </Title>
            <Card
                href={"https://github.com/KelvyTagli/TypeWeather"}
                cover={Cover}
                title={"TypeWeather"}
                year={2023}
                description={"O TypeWeather é uma aplicação web para consultar dados meteorológicos e previsão do tempo."}
            />
        </Container>
    )
}