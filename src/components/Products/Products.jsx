  
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ merged, onAddToCart }) => {
  const classes = useStyles();

  if (!merged.length) return <p>Loading...</p>;


  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={6}>
        {merged.map((product) => (
          <Grid key={product.id} item justify="center">
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;