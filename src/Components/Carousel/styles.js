import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    .swiper {
        display: flex;
        text-align: center;

        height: auto;
        width: 140px;
    }

    .IMG {
        height: 140px;
        width: 140px;
        border-radius: 10%;
    }

    .language {
        color: ${({theme}) => theme.COLORS.GRAY_DARK};
    }
`
