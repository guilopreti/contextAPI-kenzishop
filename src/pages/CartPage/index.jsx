import { Container, ListContent, InfoContent } from "./styles";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const CartPage = () => {
  const { cart, removeFromCart, removeAllCart } = useContext(CartContext);

  const history = useHistory();

  const endShop = () => {
    removeAllCart();
    return toast.success("Compra Finalizada");
  };

  return (
    <Container>
      <ListContent>
        <ul>
          {cart.map((product, index) => {
            if (index === cart.length - 1) {
              return (
                <li key={product.name} className="last">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h2>{product.name}</h2>
                    <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
                    <Button onClick={() => removeFromCart(product)}>
                      Remover do Carrinho
                    </Button>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={product.name}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h2>{product.name}</h2>
                    <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
                    <Button onClick={() => removeFromCart(product)}>
                      Remover do Carrinho
                    </Button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </ListContent>
      <InfoContent>
        <h2>Resumo do Pedido</h2>
        <div>
          <span>{cart.length} Produtos</span>
          <span>
            R${" "}
            {cart
              .reduce((acc, { price }) => {
                return (acc += price);
              }, 0)
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>
        <Button onClick={endShop}>Finalizar Pedido</Button>
        <Button className="button-return" onClick={() => history.push("/")}>
          Voltar
        </Button>
      </InfoContent>
    </Container>
  );
};

export default CartPage;
