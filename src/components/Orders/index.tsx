import OrdersBoard from "../OrdersBoard"
import { Container } from "./styles"

const boards = [
    {
        id: 1,
        name: 'WAITING',
        label: 'Fila de espera',
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
        name: 'IN_PRODUCTION',
        label: 'Em preparação',
        icon: '👩‍🍳',
        quantity: 1,
        orders: [
        ]
    },
    {
        id: 3,
        name: 'DONE',
        label: 'Pronto!',
        icon: '✅',
        quantity: 1,
        orders: [
            {
                id: '3',
                table: 'Mesa 1',
                quantity: 2
            },
            {
                id: '4',
                table: 'Mesa 6',
                quantity: 9
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
                    title={board.label}
                    quantity={board.quantity}
                    orders={board.orders}
                />
            ))}
        </Container>
    )
}

export default Orders
