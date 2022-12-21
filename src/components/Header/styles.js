import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 10%;
    background: ${(props) => props.theme.primary.main};

    h1 {
        display: flex;
        align-items: center;
        width: 30%;
        height: 100%;
        margin-left: 20px;
        color: #fff;
    }
`;