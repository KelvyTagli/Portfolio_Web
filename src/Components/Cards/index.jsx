import { Container } from "./styles";

export function Card({cover, title, year, description}) {
    return (
        <Container>
            <img src={cover} alt="" />
            <div>
                <h4 className="title">{title}</h4>
                <p className="year">{year}</p>
                <p className="description">{description}</p>
            </div>
        </Container>
    )
}