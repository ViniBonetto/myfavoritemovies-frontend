import styled from "styled-components";

export const Container = styled.div`
    min-width: 250px;
    height: 96%;
    background: #fff;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

export const Header = styled.header`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Thumb = styled.img`
    width: 100%;
    height: 65%;
    object-fit: fill;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const Informations = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }
`;