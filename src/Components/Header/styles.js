import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    height: 7.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    padding: 1rem 3rem;
`

export const Logo = styled.div`
    width: auto;

    display: flex;
    align-items: center;

    > img {
        width: 3rem;
        height: 5.5rem;
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

        font-size: 1.5rem;
        font-weight: 600;
        font-variant: small-caps;
    }
`