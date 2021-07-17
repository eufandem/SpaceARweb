import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Popup from "../../Popup/Popup";
import "@google/model-viewer";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia title={product.name}>
        <model-viewer
          className={classes.media}
          poster={product.poster}
          src={product.glb}
          ar-placement="wall"
          camera-controls
          camera-orbit
          ar
          alt="A 3D model of a reflective sphere"
          ar-modes="scene-viewer webxr quick-look"
        >
          {/* exit back to website */}

          <button slot="ar-button" className={classes.button}>
            👋 Activate AR
          </button>
          <button slot="exit-webxr-ar-button">x</button>
        </model-viewer>
      </CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
            <br />
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <div style={{ marginRight: "80px" }}>
          {product.price.formatted_with_symbol}
        </div>
        <div style={{ marginRight: "80px" }}>
          <input
            type="button"
            value="About"
            onClick={togglePopup}
          />

          {isOpen && (
            <Popup
              content={
                <div>
                  
                  <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  />
                  
                </div>
              }
              handleClose={togglePopup}
            />
          )}
        </div>

        <IconButton
          aria-label="Add to Cart"
          onClick={handleAddToCart}
          style={{ fontSize: "15px" }}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
