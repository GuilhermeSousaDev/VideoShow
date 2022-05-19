import styled from "styled-components";

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const Button = styled.div`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
    background: #50c878;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
        background: #28a745;
    }
`;