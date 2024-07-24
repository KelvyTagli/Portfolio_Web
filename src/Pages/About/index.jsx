import { Container, About_, HardSkills} from "./styles"
import javascript from '../../assets/JavaScript-logo.png'

import { Hexagon } from "phosphor-react"

export function About() {
    return (
        <Container>
            <About_>
                <img src={javascript} alt="" />
                <h1>Kelvy Tagliacolli</h1>
                <p>Meu nome é Kelvy Tagliacolli, sou de São Paulo e sou formado em Análise e Desenvolvimento de Sistemas pela UNIP (Universidade Paulista).</p>
            </About_>
                <h1>HARD SKILLS</h1>
            <HardSkills>
                <div className="skills">
                    <h1>C</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
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
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
                <div className="skills">
                    <h1>React</h1>
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#445964" weight="regular" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                    <Hexagon size={36} color="#44596488" weight="thin" />
                </div>
            </HardSkills>
        </Container>
    )
}