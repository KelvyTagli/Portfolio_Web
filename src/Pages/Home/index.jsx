import {Container, Cover} from './styles'

import { Carousel } from '../../Components/Carousel'

export function Home() {
    return (
        <Container>
            <Cover>
                <label>Olá Pessoas,</label>
                <h1>EU SOU UM <br/>PROGRAMANDO</h1>
                <label>Seja bem-vindo ao meu portfólio website</label>
            </Cover>
            <Carousel/>
        </Container>
    )
}