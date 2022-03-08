import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/cart"}>
        <CartPage />
      </Route>
    </Switch>
  );
};

export default Routes;
