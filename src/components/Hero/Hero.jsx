import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

import {BrowserView,MobileView} from "react-device-detect";
import QRCode from "react-qr-code";
import LogoHero from '../../assets/LogoSpaceAR_150.png'
import LogoHeroMobile from '../../assets/LogoHero.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
	<>
	<MobileView>
	<Grid container spacing={3}>
        <Grid item xs={12} className="hero">
          <Paper className={classes.paper}>
		  <div className="diagonal-hero-bg-mobile">
		   <div className="stars">
			  <div className="small"></div>
			  <div className="medium"></div>
			  <div className="big"></div>
			  <div className="medium"></div>

 			</div>
 		 </div>
		  </Paper>
        </Grid>
		
		<Grid item xs={3} style={{position:'absolute', marginTop:'180px', marginLeft:'120px'}}>
			<img src={LogoHeroMobile} alt='SpaceAR Logo' />
			
			
		</Grid>
		<Grid style={{position:'absolute', marginTop:'350px', marginLeft:'150px'}} >
		</Grid>
		
      </Grid>
	</MobileView>
    <BrowserView className={classes.root}>
      <Grid container>
        <Grid item xs={12} className="hero">
          <Paper className={classes.paper}>
		  <div className="diagonal-hero-bg">
		   <div className="stars">
			  <div className="small"></div>
			  <div className="medium"></div>
			  <div className="big"></div>
 			</div>
 		 </div>
		  </Paper>
        </Grid>
		<Grid item xs={3} style={{position:'absolute', marginTop:'250px', marginLeft:'100px'}}>
			<img src={LogoHero} alt='SpaceAR Logo' />
		</Grid>
        <Grid item xs={3} style={{position:'absolute', margin:'550px', marginLeft:'1500px', marginTop:'520px'}}>
		<QRCode className={classes.paper} value="http://192.168.0.11:3000" />
		<p style={{color:'grey'}}>Scan QR to view products in Augmented Reality</p>
        </Grid>
      </Grid>
    </BrowserView>
	</>
	
  );
}