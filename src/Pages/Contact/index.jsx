import { Container, Contato } from "./styles";
import { MicrosoftOutlookLogo,ArrowCircleUp } from "@phosphor-icons/react";
export function Contact () {
    return(
        <Container id="Contact">
            <a href="/Portfolio_Web/">
                <ArrowCircleUp size={36} color="#445964" weight="light" />
            </a>
            <h1>CONTATO </h1>
            <Contato>
                <p>Obrigado pelo seu interesse em entrar em contato!</p>
                <h3>A melhor maneira de entrar em contato comigo é por e-mail em</h3>
                <a href="mailto:kelvytagliacolli@gmail.com">
                    <MicrosoftOutlookLogo size={36} color="#0f6397" weight="fill"/>
                    kelvytagliacolli@gmail.com
                </a>
                <a href="mailto:kelvytagliacolli@hotmail.com.br">
                    <MicrosoftOutlookLogo size={36} color="#0f6397" weight="fill"/>
                    kelvytagliacolli@hotmail.com.br
                </a>
            </Contato>
        </Container>
    )
}