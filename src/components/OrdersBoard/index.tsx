import { Container, OrdersContainer } from "./styles"

interface ItemProps {
    id: string;
    table: string;
    quantity: number;
}

interface Props {
    icon: string
    title: string
    quantity: number
    orders: ItemProps[]
}
const OrdersBoard = ({ icon, orders, quantity, title }: Props) => {
    return (
        <Container>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({quantity})</span>
            </header>
            <OrdersContainer>
                {orders.map(order => (
                    <button key={order.table} type="button">
                        <strong>{order.table}</strong>
                        <span>{order.quantity} itens</span>
                    </button>
                ))}
            </OrdersContainer>
        </Container>
    )
}

export default OrdersBoard
