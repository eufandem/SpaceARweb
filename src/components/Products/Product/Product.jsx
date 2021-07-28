import React from "react";
import "@google/model-viewer";
import "./styles.css";
import { Card, Media, Heading, Content } from "react-bulma-components";
import { Grid } from "@material-ui/core";
import { Button } from "react-bootstrap";
import ReactGA from "react-ga";

const Product = ({ product, onAddToCart }) => {
  // const handleAddToCart = () => onAddToCart(product.id, 1);
  const productClick = () => {
    ReactGA.event({
      category: "Product",
      action: "Product to cart button clicked",
    },
    onAddToCart(product.id, 1)
    );
  };
  return (
    <>
      <Card className="card">
        <model-viewer
          id="model-viewer"
          poster={product.poster}
          src={product.glb}
          ar-placement="wall"
          camera-controls
          camera-orbit
          ar
          alt="A 3D model of a reflective sphere"
          ar-modes="scene-viewer webxr quick-look"
        >
          <button slot="exit-webxr-ar-button">x</button>
          <button
            slot="ar-button"
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "4px",
              border: "none",
              position: "absolute",
              top: "16px",
              right: "100px",
              width: "120px",
            }}
          >
            👉 Activate AR 👈
          </button>
        </model-viewer>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading className="header" size={1}>
                {product.name}
              </Heading>
              <p subtitle size={2}>
                by SpaceAR
              </p>
            </Media.Item>
          </Media>
          <Content
            dangerouslySetInnerHTML={{
              __html: `<p>${product.description}</p>`,
            }}
          />
          <Grid container>
            <p className="price">{product.price.formatted_with_symbol}</p>
            <button className="buyBtn button1" onClick={productClick}>
              Add to Cart
            </button>
          </Grid>
        </Card.Content>
      </Card>
    </>
  );
};

export default Product;
