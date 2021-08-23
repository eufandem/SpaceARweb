import React from "react";
import emptyCart from '../../assets/empty-cart.png'
import './styles.css'
import { Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const EmptyCartPage = () => {

  

  return (
    <div className='container'>
      <img className="img" alt="empty cart image" src={emptyCart}/>
      <div className="header1">
      <h1>Your Cart is Currently Empty</h1>
      </div>
      <div className="text">
      <p>Looks like you haven't added any product to your cart</p>
      </div>
      
      <div className='buttonPlace'>
      <Button component={Link} to="/" className="button1" >Add to Cart</Button>
      </div>
    </div>
  );
};

export default EmptyCartPage;
