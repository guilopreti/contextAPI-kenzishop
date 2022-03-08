import Button from "../../components/Button";
import { Container } from "./styles";
// import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";

const Home = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  //   const sendProduct = (product) => {
  //     const existProduct = cart.some(({ name }) => name === product.name);
  //     if (!existProduct) {
  //       dispatch(addProductThunk(product));
  //     } else {
  //       toast.error("Produto já está no carrinho");
  //     }
  //   };

  return (
    <Container>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
              <Button
                onClick={() => {
                  addToCart(product);
                }}
              >
                Adicionar ao Carrinho
              </Button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;
