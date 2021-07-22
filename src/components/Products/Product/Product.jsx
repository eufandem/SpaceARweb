import React from "react";
import { Typography } from "@material-ui/core";
import "@google/model-viewer";
import "./styles.css";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div>
      <div className="wrapper" style={{maxWidth:'100%'}}>
        <div className="product-img">
          <model-viewer
            style={{ width: "330px", height: "420px" }}
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
          </model-viewer>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.name}</h1>
            <h2>by SpaceAR</h2>
           <div dangerouslySetInnerHTML={{__html: `<p>${product.description}</p>`}} style={{marginBottom: '30px'}}></div> 
          </div>
          <div className="product-price-btn">
            <p>{product.price.formatted_with_symbol}</p>
            <button onClick={handleAddToCart} type="button">
              buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
