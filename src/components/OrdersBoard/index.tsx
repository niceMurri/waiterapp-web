import { useState } from "react";
import { Container, OrdersContainer } from "./styles";
import OrdersModal from "./OrdersModal";

interface OrderProps {
    id: string;
    table: string;
    quantity: number;
}

interface Props {
    icon: string
    title: string
    quantity: number
    orders: OrderProps[]
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retornarOrder(orderId: string): Promise<FetchedOrderProps> {

    await sleep(500);

    return Promise.resolve({
        id: '1',
        table: 'Mesa 2',
        status: 'DONE',
        label: 'Pronto!',
        itens: [
            {
                id: '2',
                quantity: 3,
                name: 'Coca cola',
                price: 19,
                imagePath: '1717161365716-quatro-queijos.png',
            },
            {
                id: '3',
                quantity: 2,
                name: 'Pizza de calabresa',
                price: 34,
                imagePath: '1717161365716-quatro-queijos.png',
            }
        ],
        total: 344.5
    })
}
// Com a existência de services não será mais necessário utilizar FetchedOrderProps neste arquivo
interface FetchedOrderProps {
    id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    label: string;
    itens: {
        id: string;
        quantity: number;
        name: string;
        price: number;
        imagePath: string;
    }[];
    total: number;
}

const OrdersBoard = ({ icon, orders, quantity, title }: Props) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<FetchedOrderProps | null>(null);

    async function handleOpenModal(order: OrderProps) {
        const data = await retornarOrder(order.id);
        setSelectedOrder(data);
        setOpenModal(true);
    }

    async function handleCloseModal() {
        setSelectedOrder(null);
        setOpenModal(false);
    }

    return (
        <Container>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({quantity})</span>
            </header>
            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map(order => (
                        <button onClick={() => handleOpenModal(order)} key={order.id} type="button">
                            <strong>{order.table}</strong>
                            <span>{order.quantity} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}

            <OrdersModal
                open={openModal}
                order={selectedOrder}
                onClose={handleCloseModal}
            />

        </Container>
    )
}

export default OrdersBoard
