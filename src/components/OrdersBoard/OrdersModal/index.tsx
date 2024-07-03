import Dialog from '../../Dialog'
import CloseIcon from '../../../assets/close-icon.svg';
import { Actions, Container, OrderDetails } from './styles';
import { formatCurrency } from '../../../utils/tools';

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

interface OrdersModalProps {
    open: boolean,
    onClose: () => void,
    order: FetchedOrderProps | null
}

const OrdersModal = ({ open, onClose, order }: OrdersModalProps) => {
    if (!open || !order) {
        return null;
    }

    return (
        <Dialog onClose={onClose}>
            <Container>
                <header>
                    <strong>{order.table}</strong>
                    <button type='button' onClick={onClose}>
                        <img src={CloseIcon} alt="Fechar" />
                    </button>
                </header>
                <div className="status-container">
                    <small>Status do pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '🕒'}
                            {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </span>
                        <strong>{order.label}</strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Itens</strong>
                    <div className="order-itens">
                        {order.itens.map(item => (
                            <div className="item" key={item.id}>
                                <img src={`http://localhost:3001/uploads/${item.imagePath}`} alt={item.name} width={56} height={28.51} />
                                <span className="quantity">{item.quantity}x</span>
                                <div className="item-description">
                                    <strong>{item.name}</strong>
                                    <span>{formatCurrency(item.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(order.total)}</strong>
                    </div>

                </OrderDetails>

                <Actions>
                    <button type='button' className="primary">
                        <span>👩‍🍳</span>
                        <span>Iniciar produção</span>
                    </button>

                    <button type='button' className="secondary">
                        <span>Iniciar produção</span>
                    </button>

                </Actions>
            </Container>
        </Dialog>
    )
}

export default OrdersModal
