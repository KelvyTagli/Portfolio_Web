import { Container,Logo, Navigation } from "./styles"
import image from '../../assets/Group.svg'

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={image} alt="image" />
            </Logo>
            <Navigation>
                <a href="/Portfolio_Web/">home</a>
                <a href='#Sobre'>sobre</a>
                <a href='#Portfolio'>portfólio</a>
                <a href='#Contact'>contato</a>
            </Navigation>
        </Container>
    )
}