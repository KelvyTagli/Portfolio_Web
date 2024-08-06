import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 

    padding: 3rem 13rem;

    margin-top: 7rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Body = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5rem;
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

        padding: .2rem;
    }

    > h1 {
            font-size: 54px;
            letter-spacing: 1px;
            font-variant: small-caps;
        }

    > p {
        font-size: 14px;
        font-weight: 400;
    }
`

export const HardSkills = styled.div `
    width: 1032px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 4rem;
    > .skills {
        width: 212px;
        height: 98px;

        text-align: center;

        > h1 {
            font-size: 26px;
            margin-bottom: 1.5rem;

            letter-spacing: 1.5px;

            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`