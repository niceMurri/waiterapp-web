import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between !important;
        padding: 0px !important;

        button {
            display: flex;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        strong {
            font-size: 24px;
        }
    }

    .status-container {
        small{
            font-size: 14px;
            opacity: 0.8;
        }

        div {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
        }
    }

    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 14px;
            font-weight: 500;
            opacity: 0.8;
        }
    }
`;

export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    > strong {
        font-weight: 500;
        font-size: 14px;
        opacity: 0.8;
    }

    .order-itens{
        display: flex;
        gap: 16px;
        flex-direction: column;
        .item{
            gap: 12px;
            display: flex;

            img {
                border-radius: 6px;
            }

            .quantity {
                display: block;
                min-width: 20px;
                font-size: 14px;
                color: #666;
            }

            .item-description {
                strong {
                    display: block;
                    margin-bottom: 4px ;
                }
                span {
                    font-weight: 400;
                    color: #666;
                    font-size: 14px;
                }
            }
        }
    }
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column ;
    gap: 12px;

    button {
        cursor: pointer;
    }
    button.primary{
        background-color: #333;
        border-radius: 48px;
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-weight: 500;
        padding: 12px 24px;
        width: 100%;
    }

    button.secondary{
        padding: 12px 24px;
        color: #D73035;
        border: none;
        font-weight: bold;
        background-color: transparent;

    }
`;
