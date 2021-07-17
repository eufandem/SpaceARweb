import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'


import useStyles from './styles'

const CartItem = ({item, onUpdadateCartQty, onRemoveFromCart}) => {

    const classes = useStyles();
    //Destructure and add merged in cartITem to show 3d content in shopping cart.

    return (
        <Card>
        
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>

            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.cardActions}>
                    <Button type="button" size="small"onClick={() => onUpdadateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small"onClick={() => onUpdadateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>REMOVE</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
