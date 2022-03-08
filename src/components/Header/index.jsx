import { Container, SpanNumber, SpanText } from "./styles";
import { BsCart } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Header = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  return (
    <Container>
      <h1>Kenzie Shop Music</h1>
      <div onClick={() => history.push("/cart")}>
        <span>
          <BsCart />
          <SpanNumber>
            {cart.length > 0 && <span>{cart.length}</span>}
          </SpanNumber>
        </span>
        <SpanText>Carrinho</SpanText>
      </div>
    </Container>
  );
};

export default Header;
