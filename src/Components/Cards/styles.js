import styled from "styled-components";

export const Container = styled.a `
    width: 970px;
    height: 186px;

    display: flex;
    gap: 5rem;

    padding: 1.4rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_100};

    color: ${({theme}) => theme.COLORS.GRAY_100};

    > img {
        width: 278px;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .title {
        font-size: 25px;
        letter-spacing: 1px;
    }

    .year {
        width: 71px;
        text-align: center;
        background-color: ${({theme}) => theme.COLORS.GRAY_100};
        color: white;
        font-weight: bold;
        border-radius: 16px;
    }

    .description {
        width: 572px;
        
        font-size: 14px;
        font-weight: 300;
    }
`