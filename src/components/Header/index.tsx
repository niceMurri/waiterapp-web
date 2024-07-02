import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

const Header = () => {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>

                <img src={Logo} alt="logo" />
            </Content>
        </Container>
    )
}

export default Header
