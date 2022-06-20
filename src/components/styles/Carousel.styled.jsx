import styled from "styled-components";

export const StyledCarousel = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90vw;
    margin: 25px auto;

    #carouselExampleCaptions {
        width: 50%;
    }

    #news-box {
        width: 45%;
        margin: auto;
        background-color: #e7e7e7;
        padding: 15px;
        border-radius: 10px;
    }

    #news-box > p {
        margin-left: 30px;
    }

    #news-box > h3 {
        text-align: center;
        width: 100%;
    }

    #news-box > p > span {
        font-size: 0.8rem;
    }
`