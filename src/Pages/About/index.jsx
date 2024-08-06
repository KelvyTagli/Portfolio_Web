import { Container, About_, HardSkills, Body} from "./styles"

import { Hexagon, ArrowCircleUp } from "phosphor-react"
import { Link } from "react-router-dom"

export function About() {
    return (
        <Container id="Sobre">
            <a href="/Portfolio_Web/">
                <ArrowCircleUp size={36} color="#445964" weight="light" />
            </a>
            <Body>
            <About_>
                <img src={"https://github.com/KelvyTagli.png"} alt="" />
                <h1>Kelvy Tagliacolli</h1>
                <p>Meu nome é Kelvy Tagliacolli, sou de São Paulo e sou formado em Análise e Desenvolvimento de Sistemas pela UNIP (Universidade Paulista).</p>
            </About_>
                <h1>HARD SKILLS</h1>
            <HardSkills>
                <div className="skills">
                    <h1>C</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
                <div className="skills">
                    <h1>C#</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
                <div className="skills">
                    <h1>HTML</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
                <div className="skills">
                    <h1>CSS</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
                <div className="skills">
                    <h1>Javascript</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
                <div className="skills">
                    <h1>React</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
            </HardSkills>
            </Body>
        </Container>
    )
}