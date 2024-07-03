import { styled } from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2.5px);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DialogContent = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
`
