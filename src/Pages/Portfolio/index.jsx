import { Container, Title } from "./styles";
import { Card } from "../../Components/Cards";
import Cover from "../../assets/Cover.png"
import { ArrowCircleUp } from "phosphor-react";

export function Portfolio() {
    return (
        <Container id="Portfolio">
            <a href="/Portfolio_Web/">
                <ArrowCircleUp size={36} color="#445964" weight="light" />
            </a>
            <Title>
                <h1>MEU <br />PORTFÓLIO </h1>
                <p>Este são alguns dos trabalhos e projetos que já realizei</p>
            </Title>
            <Card
                href={"https://kelvytagli.github.io/TypeWeather/"}
                cover={Cover}
                title={"TypeWeather"}
                year={2023}
                description={"O TypeWeather é uma aplicação web para consultar dados meteorológicos e previsão do tempo."}
            />
        </Container>
    )
}