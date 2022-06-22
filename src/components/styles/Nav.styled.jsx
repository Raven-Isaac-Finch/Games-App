import styled from "styled-components";

export const StyledNav = styled.nav`
    box-shadow: 0px 0px 15px 0px #000000;
    width: 100vw;

    .navbar {
        background-color: rgb(36, 61, 131);
    }

    img {
        width: 25px;
        margin: 2px;
    }

    span {
        margin-left: 20px;
        color: white;
    }

    ul {
        width: 20%;
    }

    a {
        color: #000;
        width: 100px;
        height: 50px;
        text-align: center;
        font-size: 1.3rem;
    }
    a:hover {
        background-color: #fff;
    }
`