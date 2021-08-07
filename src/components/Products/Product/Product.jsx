import React from "react";
import "@google/model-viewer";
import "./styles.css";
import { Card, Media, Heading, Content } from "react-bulma-components";
import { Grid } from "@material-ui/core";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import ProdOverview from "../ProductOverview/ProdOverview";

const Product = ({ product, onAddToCart }) => {
  // const handleAddToCart = () => onAddToCart(product.id, 1);
  const productClick = () => {
    ReactGA.event(
      {
        category: "Product",
        action: "Product to cart button clicked",
      },
      onAddToCart(product.id, 1)
    );
  };
  return (
    <div className="shadow relative flex-col m-5 bg-white z-30 p-10">
      <div className=''>
        <model-viewer
        id='model-viewer'
          className='grid justify-items-center'
          poster={product.poster}
          src={product.glb}
          ar-placement="wall"
          camera-controls
          camera-orbit
          ar-scale="fixed"
          ar
          alt="A 3D model of a reflective sphere"
          ar-modes="scene-viewer webxr quick-look"
        >
          <button slot="exit-webxr-ar-button" component={Link} to="/">
            x
          </button>
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>
          <button id="ar-failure">AR is not tracking!</button>
        </model-viewer>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading className="my-3 text-4xl">{product.name}</Heading>
              <p className="text-base my-2 text-blue-600 font-extrabold">
                {product.framed}
              </p>
            </Media.Item>
          </Media>
          <Content
            className="text-base my-2"
            dangerouslySetInnerHTML={{
              __html: `<p>${product.description}</p>`,
            }}
          />
          <Grid container>
            <p className="mt-2 mb-4 text-lg font-extrabold">{product.price.formatted_with_symbol}</p>
            
              <button
                className=" focus: outline-none absolute sm:ml-32 lg:ml-96 p-2 text-xs 
                md:text-sm  bg-gradient-to-b  from-yellow-200 
                to-yellow-400  border-yellow-300  rounded-sm
                focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
                onClick={productClick}
              >
                Add to Cart
              </button>
          </Grid>
        </Card.Content>
      </div>
    </div>
  );
};

export default Product;
