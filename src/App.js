import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
  Hero,
  Navbar,
  Products,
  Cart,
  Checkout,
  Login,
  Footer,
  ProdOverview
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import augmented from "./augmentedData";
import { CssBaseline } from "@material-ui/core";
import ReactGA from "react-ga";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  //console.log(products)

  const fetchCart = async () => {
    setCart(await commerce.products.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      //console.log(error)
      setErrorMessage(error.data.error.message);
    }
  };

  let merged = augmented.map((item, i) => Object.assign({}, item, products[i]));
//   console.log(merged, null, 2 + " this is the merged object");

  useEffect(() => {
    ReactGA.initialize("UA-203455092-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

    fetchProducts();
    fetchCart();
  }, []);


  console.log(merged)
  return (
    <Router>
      <CssBaseline />

      <div>
        <Navbar totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <Hero />
            {/* <Cats filterTagged={filterTagged}/> */}
            <Products
              merged={merged}
              products={products}
              onAddToCart={handleAddToCart}
            />
            <Footer />
          </Route>
          <Route exact path="/cart">
            <Cart
              augmented={augmented}
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/overview">
            <ProdOverview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
