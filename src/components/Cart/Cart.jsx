import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './styles';
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

const Cart = ({cart,handleUpdateCartQuantity, handleEmptyCart, handleRemoveFromCart }) => {
    const classes = useStyles()

    const checkedOutGoogle = () => {
        ReactGA.event({
            category: 'checkout',
            action: 'Checkout clicked'
        })
    }
    const removedGoogle = () => {
        ReactGA.event({
            category: 'removed all from cart',
            action: 'removed all clicked'
        })
    }
    

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            <Link to="/" className={classes.link}>You have no items in your shopping cart.</Link>
        </Typography>
    );

    

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} onUpdadateCartQty={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart}/>
                    {/* <div>{item.name}</div> */}
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" onClick={checkedOutGoogle}>
                        Checkout
                    </Button>
                </div>
        </div>
        </>
    )

    if(!cart.line_items) return ('Loading...')

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.tite} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
