import styled from "styled-components";

export const Container = styled.div `
    width: 100%;

    padding: 3rem 14rem;

    margin-top: 8rem;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    color: black;

    > h1 {
        font-size: 40px;
    }
`

export const Contato = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 3rem 14rem;

    margin-top: 1rem;

    > a {
        display: flex;
        align-items: center;
        gap: 1rem;

        color: ${({theme}) => theme.COLORS.GRAY_DARK};

        font-variant: small-caps;
        font-weight: 500;

        border-top: 1.5px solid ${({theme}) => theme.COLORS.GRAY_100};

        padding: 1rem;
    }
`