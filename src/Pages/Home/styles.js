import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
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