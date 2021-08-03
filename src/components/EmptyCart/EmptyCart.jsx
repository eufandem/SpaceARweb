import React from "react";
import emptyCart from '../../assets/empty-cart.png'
import './styles.css'
import { Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const EmptyCartPage = () => {

  return (
    <div>
      <img className="img" alt="empty cart image" src={emptyCart}/>
      <h1 className="header1">Your Cart is Currently Empty</h1>
      <p className="text">Looks like you haven't added any product to your cart</p>
      <div className='buttonPlace'>
      <Button component={Link} to="/" className="button1" >Add to Cart</Button>
      </div>
    </div>
  );
};

export default EmptyCartPage;
