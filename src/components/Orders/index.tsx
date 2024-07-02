import OrdersBoard from "../OrdersBoard"
import { Container } from "./styles"

const boards = [
    {
        id: 1,
        name: 'Fila de espera',
        icon: '🕚',
        quantity: 1,
        orders: [
            {
                id: '1',
                table: 'Mesa 2',
                quantity: 2
            }
        ]
    },
    {
        id: 2,
        name: 'Em preparação',
        icon: '👩‍🍳',
        quantity: 1,
        orders: [
            {
                id: '2',
                table: 'Mesa 4',
                quantity: 2
            }
        ]
    },
    {
        id: 3,
        name: 'Pronto!',
        icon: '✅',
        quantity: 1,
        orders: [
            {
                id: '3',
                table: 'Mesa 1',
                quantity: 2
            }
        ]
    }
]

const Orders = () => {
    return (
        <Container>
            {boards.map((board) => (
                <OrdersBoard
                    key={board.id}
                    icon={board.icon}
                    title={board.name}
                    quantity={board.quantity}
                    orders={board.orders}
                />
            ))}
        </Container>
    )
}

export default Orders
