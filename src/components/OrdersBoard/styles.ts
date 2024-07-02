import { styled } from "styled-components";

export const Container = styled.div`
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    flex: 1;

    header {
        padding: 8px;
        font-size: 14px;
        gap: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const OrdersContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    button{
        background-color: #fff;
        border: 1px solid rgba(204, 204, 204, 0.4);
        height: 128px;
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;

        strong {
            font-weight: 500;
        }

        span{
            font-size: 14px;
            color: #666
        }
    }
`;
