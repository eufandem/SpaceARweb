import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import Logo from '../../assets/Logo.png'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

const Navbar = ({ totalItems }) => {

    const classes = useStyles()
    const location = useLocation()

    const googleClick = () => {
        ReactGA.event({
            category: 'Cart',
            action: 'Navbar Cart button clicked'
		})
    }
   

    return (
        <>
            <AppBar position='sticky' color='inherit' className={classes.appBar} spacing={12}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="Space AR" height="25px" className={classes.image} />
                        Space AR
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton onClick={googleClick} component={Link} to="/cart" aria-label="Show Cart Item" color="inherit">
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
