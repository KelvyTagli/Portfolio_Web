import { Container,Skills } from "./styles";
import img_Javascript from '../../assets/JavaScript-logo.png'
import img_Html from '../../assets/html-5.svg'

export function Carousel() {
    return(
        <Container>
            <Skills>
                <img src={img_Html} alt="" />
            </Skills>
        </Container>
    )
}