import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Logo from "../../assets/Logo.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Login/Logout";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  const googleClick = () => {
    ReactGA.event({
      category: "Cart",
      action: "Navbar Cart button clicked",
    });
  };

  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        className={classes.appBar}
        spacing={12}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={Logo}
              alt="Space AR"
              height="45px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                onClick={googleClick}
                component={Link}
                to="/cart"
                aria-label="Show Cart Item"
                color="inherit"
              >
                <Badge
                  badgeContent={totalItems}
                  color="secondary"
                >
                <div>
                  <ShoppingCart />
                  <div style={{fontSize:'12px'}}>Cart</div>
                </div>
                </Badge>
              </IconButton>
              <IconButton>
              {!isAuthenticated ? <Login/> : <Logout/>}
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
