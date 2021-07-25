import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Hero, Navbar, Products, Cart, Checkout,  Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import augmented from './augmentedData'
import { CssBaseline } from '@material-ui/core';


const App = () => {
	const [ products, setProducts ] = useState([]);
	const [ cart, setCart ] = useState({});
	const [order, setOrder] = useState({})
	const [errorMessage, setErrorMessage] = useState('')
	
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
		setCart(cart)
	};

	const refreshCart = async() => {
		const newCart = await commerce.cart.refresh()
		setCart(newCart)
	}

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
			setOrder(incomingOrder)
			refreshCart()
		} catch (error) {
			//console.log(error)
			setErrorMessage(error.data.error.message)
		}
	}

	let merged = augmented.map((item, i) => Object.assign({}, item, products[i]));
	console.log(merged, null, 2 + ' this is the merged object');

	useEffect(() => {
		
		fetchProducts();
		fetchCart();
	}, []);

	
	// const filterTagged = (art) => {
	// 	const checkedBoxTag = merged.filter(m => m.categories.slug === art)
	// 	setProducts(checkedBoxTag)
	// };
	
	//console.log(filter)
	return (
		<Router>
    <CssBaseline/>

			<div>
				<Navbar totalItems={cart.total_items} />

				<Switch>
					<Route exact path="/">
						<Hero />
						{/* <Cats filterTagged={filterTagged}/> */}
						<Products merged={merged} products={products} onAddToCart={handleAddToCart} />
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
					<Route exact path='/checkout'>
						<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
					</Route>
				</Switch>
				
			</div>
			
		</Router>
		
	);
};

export default App;
