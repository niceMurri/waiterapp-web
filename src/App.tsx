import { Fragment } from "react/jsx-runtime";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Orders from "./components/Orders";

function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <Header />
            <Orders />
        </Fragment>
    );
}

export default App;
