import NavBar from "./components/navbar/NavBar";
import Footer from "./components/common/Footer/Footer";
import ItemsContext from "./context/ItemsProvider";
import CartContext from "./context/CartProvider";
import SuscriptorsProvider from "./context/SuscriptorsProvider";
import RegisterLogin from "./context/RegisterLogin";
import OrderProvider from "./context/OrderProvider";

function App() {
  return (
    <CartContext>
      <ItemsContext>
        <OrderProvider>
          <RegisterLogin>
            <SuscriptorsProvider>
              <NavBar/>
              <Footer/>
            </SuscriptorsProvider>
          </RegisterLogin>
        </OrderProvider>
      </ItemsContext>
    </CartContext>
  );
}

export default App;