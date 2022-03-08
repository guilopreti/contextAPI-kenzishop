import Violao from "../../imgs/violao.png";
import Violino from "../../imgs/violino.png";
import Piano from "../../imgs/piano.png";
import Saxofone from "../../imgs/saxofone.png";
import Flauta from "../../imgs/flauta.png";
import Pandeiro from "../../imgs/pandeiro.png";
import { createContext, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      name: "Violao",
      price: 300.0,
      image: Violao,
      description:
        "Instrumento de cordas, com uma caixa geralmente feita de madeira, que gera uma acústica facilitando a propagação do som.",
    },
    {
      name: "Violino",
      price: 400.5,
      image: Violino,
      description:
        "O mais agudo dos instrumentos de cordas friccionadas, produz som normalmente através de um arco, geralmente de madeira e com cerdas feitas de vários fios.",
    },
    {
      name: "Piano",
      price: 2500.0,
      image: Piano,
      description:
        "Instrumento musical de teclado, dotado de cordas metálicas que, quando percutidas por martelos que são acionados pelas teclas, produzem som.",
    },
    {
      name: "Saxofone",
      price: 1220.5,
      image: Saxofone,
      description:
        "Instrumento de sopro onde o som é produzido pela vibração de uma pequena lâmina de cana ou material sintético, que fica dentro da boquilha do instrumento.",
    },
    {
      name: "Flauta",
      price: 30.0,
      image: Flauta,
      description:
        "Instrumento formado por um tubo oco com orifícios, num dos quais o executante sopra, ao mesmo tempo que tapa ou destapa os demais, para produzir sons.",
    },
    {
      name: "Pandeiro",
      price: 49.99,
      image: Pandeiro,
      description:
        "Instrumento de percussão constituído de um aro de madeira, recoberto ou não por uma membrana, com aberturas no aro onde se colocam soalhas ou guizos.",
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
