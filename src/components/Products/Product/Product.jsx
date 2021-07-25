import React from "react";
import { CssBaseline } from "@material-ui/core";
import "@google/model-viewer";
import "./styles.css";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <>
    
      <div className="wrapper" style={{maxWidth:'100%'}}>
        <div className="product-img">
        <CssBaseline>
          <model-viewer
            style={{ width: "350px", height: "420px" }}
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
          </CssBaseline>
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
    </>
  );
};

export default Product;
