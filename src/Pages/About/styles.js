import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;
    padding: 3rem 0;
`

export const About_ = styled.div `
    width: 1032px;
    height: 33.7rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    > img {
        height: 167px;

        border: 4px solid ${({theme}) => theme.COLORS.GRAY_100};
        border-radius: 20%;

        padding: 1rem;
    }

    > h1 {
        font-size: 54px;
        font-weight: 500;
    }

    > p {
        font-size: 14px;
        font-weight: 300;
    }
`

export const HardSkills = styled.div `
    width: 1032px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > .skills {
        width: 212px;
        height: 98px;

        border: 1px solid white;
    }
`