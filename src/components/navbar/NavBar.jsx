import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../home/Home';
import NavBarTemplate from './NavBarTemplate';
import ShopLayout from '../shop/ShopLayout';
import ItemDetail from '../ItemDetail/ItemDetail';
import Cart from '../Cart/Cart';
import TemplateLoginRegister from '../LoginRegister/TemplateLoginRegister';
import LayoutListOrder from '../LayoutMyOrder/LayoutListOrder';

const NavBar = () => {
    return (
        <Router>
            <NavBarTemplate/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/bands">
                    <ShopLayout/>
                </Route>
                <Route path="/producto/:idProducto" exact>
                    <ItemDetail/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/login">
                    <TemplateLoginRegister/>
                </Route>
                <Route path="/orders">
                    <LayoutListOrder/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar;