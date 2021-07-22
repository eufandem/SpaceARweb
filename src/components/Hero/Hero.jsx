import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./styles.scss";
import "@google/model-viewer";
import { BrowserView, MobileView } from "react-device-detect";
import QRCode from "react-qr-code";
import LogoHero from "../../assets/LogoSpaceAR_150.png";
import LogoHeroMobile from "../../assets/LogoHero.png";
import HeroModel from "../../assets/Paintings/Hero.gltf";
import HeroPoster from "../../assets/Posters/HeroPoster.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <>
      <MobileView>
        <Grid container spacing={3}>
          <Grid item xs={12} className="heroMobile">
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

          <Grid
            item
            xs={3}
            style={{
              position: "absolute",
              marginTop: "180px",
              marginLeft: "120px",
            }}
          >
            <img src={LogoHeroMobile} alt="SpaceAR Logo" />
          </Grid>
          
        </Grid>
      </MobileView>
      <BrowserView className={classes.root}>
        <Grid container>
          <Grid item xs={12} className="hero">
            <Grid>
              <model-viewer
                style={{
                  position: "absolute",
                  marginTop: "100px",
                  marginLeft: "450px",
                  width: "1400px",
                  height: "900px",
                }}
                poster={HeroPoster}
                src={HeroModel}
                ar-placement="wall"
                camera-controls
                
                disable-zoom
                
                alt="A 3D model of a reflective sphere"
                ar-modes="scene-viewer webxr quick-look"
              >
                {/* exit back to website */}

                <button slot="ar-button" className={classes.button}></button>
              </model-viewer>
            </Grid>
            <Paper className={classes.paper}>
              <div className="diagonal-hero-bg" />
            </Paper>
          </Grid>

          <Grid
            item
            xs={3}
            style={{
              position: "absolute",
              marginTop: "250px",
              marginLeft: "100px",
            }}
          >
            <img src={LogoHero} alt="SpaceAR Logo" />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              position: "absolute",
              margin: "550px",
              marginLeft: "1500px",
              marginTop: "520px",
            }}
          >
            <QRCode
              className={classes.paper}
              value="https://fervent-kirch-564ba7.netlify.app/"
            />
            <p style={{ color: "grey" }}>
              Scan QR to view products in Augmented Reality
            </p>
          </Grid>
        </Grid>
      </BrowserView>
    </>
  );
}
