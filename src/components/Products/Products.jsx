  
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ merged, onAddToCart }) => {
  const classes = useStyles();

  if (!merged.length) return <p>Loading...</p>;


  return (
    <main className="pt-8">
      <Grid container className='md:grid-cols-2'>
        {merged.map((product) => (
          <Grid key={product.id} item xs={12} sm={12} md={12} lg={12} xl={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      
      
      
    </main>
  );
};

export default Products;