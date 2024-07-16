import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 2rem;
    gap: 3rem;
`
export const Body = styled.div`
    display: flex;

    width: 100%;
    height: 50.4rem;

    align-items: center;
    justify-content: space-around;
`

export const Cover = styled.div `
    width: 54.5rem;
    height: 24rem;

    margin: 18rem 0;

    > h1 {
        font-size: 7rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    >label {
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`

export const Links = styled.footer`
    width: 100px;

    display: flex;
    align-items: center;

    margin-left: 17rem;
    
    gap: 2rem;

    > .github {
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_100};
        border-radius: 50%;

        padding: 0.2rem;

        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > .linkedin {
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`