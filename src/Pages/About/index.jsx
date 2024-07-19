import { Container, About_, HardSkills} from "./styles"
import javascript from '../../assets/JavaScript-logo.png'
export function About() {
    return (
        <Container>
            <About_>
                <img src={javascript} alt="" />
                <h1>Kelvy Tagliacolli</h1>
                <p>Meu nome é Kelvy Tagliacolli, sou de São Paulo e sou formado em Análise e Desenvolvimento de Sistemas pela UNIP (Universidade Paulista).</p>
            </About_>
                <h1>Hard Skills</h1>
            <HardSkills>
                <div className="skills">
                    
                </div>
                <div className="skills">
                    
                </div>
                <div className="skills">
                    
                </div>
                <div className="skills">
                    
                </div>
            </HardSkills>
        </Container>
    )
}