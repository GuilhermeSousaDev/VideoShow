import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 540px;
`;

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 13px;
    width: 220px;
    height: 300px;
    border: 1px solid black;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 10px;
    background: ${(prop) => prop.color};
    span {
        margin-bottom: 10px;
    }
`;