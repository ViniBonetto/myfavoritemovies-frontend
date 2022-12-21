import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const FilterContainer = styled.div`
    width: 30%;
    height: 90%;
    background: ${(props) => props.theme.grey[100]};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    -webkit-box-shadow: 3px 11px 15px -7px #878787; 
    box-shadow: 3px 11px 15px -7px #878787;

    h1 { 
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h2 {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

export const MoviesContainer = styled.div`
    width: 65%;
    height: 90%;
    background: ${(props) => props.theme.grey[100]};
    border-radius: 15px;
    -webkit-box-shadow: 3px 11px 15px -7px #878787; 
    box-shadow: 3px 11px 15px -7px #878787;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #F4F4F4;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
        border-radius: 10px;
    }
`;

export const Input = styled.div`
    width: 85%;
    height: 60px;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }

    input {
        height: 30px;
        border: none;
        border-radius: 10px;
        outline: none;
        padding: 10px;
    }
`;

export const ButtonYear = styled.button`
    width: 85%;
    height: 30px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${(props) => props.orderBy === "Ano de Lançamento" ? props.theme.primary.main : "#fff"};
    color: ${(props) => props.orderBy === "Ano de Lançamento" ? "#fff" : "#000"};
    margin-bottom: 10px;

    :hover {
        background: ${(props) => props.theme.primary.main};
        color: #fff;
    }
`;

export const ButtonName = styled.button`
    width: 85%;
    height: 30px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${(props) => props.orderBy === "Nome" ? props.theme.primary.main : "#fff"};
    color: ${(props) => props.orderBy === "Nome" ? "#fff" : "#000"};
    margin-bottom: 10px;

    :hover {
        background: ${(props) => props.theme.primary.main};
        color: #fff;
    }
`;

export const ButtonCountry = styled.button`
    width: 85%;
    height: 30px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${(props) => props.orderBy === "País" ? props.theme.primary.main : "#fff"};
    color: ${(props) => props.orderBy === "País" ? "#fff" : "#000"};
    margin-bottom: 10px;

    :hover {
        background: ${(props) => props.theme.primary.main};
        color: #fff;
    }
`;