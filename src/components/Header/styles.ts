import { styled } from "styled-components";

export const Container = styled.header`
    background-color: #D73035;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1116px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        color: #FFFFFF;
        h1 {
            font-size: 2rem;
            margin-bottom: 6px;
        }
        h2 {
            font-size: 1rem;
            font-weight: 400;
            opacity: 0.9;
        }
    }
`;
