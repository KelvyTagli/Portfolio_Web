import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    height: 7.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 8rem;
`

export const Section = styled.nav`
    width: 90%;
    height: 5.5rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Logo = styled.div`
    width: auto;

    display: flex;
    align-items: center;

    gap: 2.9rem;

    > img {
        width: 5.5rem;
        height: 5rem;
    }
`

export const Navigation = styled.div`
    width: 80rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    > a {
        color: ${({theme}) => theme.COLORS.GRAY_100};

        letter-spacing: 1px;
        font-weight: 600;

        font-size: 1.7rem;
    }
`