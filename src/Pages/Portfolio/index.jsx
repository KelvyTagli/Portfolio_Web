import { Container, Title } from "./styles";
import { Card } from "../../Components/Cards";
import Cover from "../../assets/Cover.png"
import Food from "../../assets/Capa.png"
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
            <Card
                href={"https://github.com/KelvyTagli/Rocket_Food"}
                cover={Food}
                title={"Rocket Food"}
                year={2023}
                description={"O food explorer é um projeto desenvolvido como parte do desafio final do programa Explorer. Trata-se de uma aplicação web voltada para a experiência gastronômica, onde os usuários podem explorar uma variedade de pratos e realizar pedidos de maneira prática e intuitiva."}
            />
        </Container>
    )
}