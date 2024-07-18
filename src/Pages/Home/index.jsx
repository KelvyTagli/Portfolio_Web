import {Container, Cover, Links, Body} from './styles'

import { Carousel } from '../../Components/Carousel'
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Home() {
    return (
        <Container>
            <Body>
                <Cover>
                    <label>Olá Pessoas,</label>
                    <h1>EU SOU UM <br/>PROGRAMANDO</h1>
                    <label>Seja bem-vindo ao meu portfólio website</label>
                </Cover>
                <Carousel/>
            </Body>
            <Links>
                <a href="https://github.com/KelvyTagli" target='_blank' className='github'>
                    <GithubLogo size={36} weight="fill"/>
                </a>
                <a href="https://www.linkedin.com/in/kelvy-tagliacolli/" className='linkedin' target='_blank'>
                    <LinkedinLogo size={36}  weight="fill" />
                </a>
            </Links>
        </Container>
    )
}