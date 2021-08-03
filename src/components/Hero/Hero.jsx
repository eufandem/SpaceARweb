import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import "@google/model-viewer";
import QRCode from "react-qr-code";
import LogoHero from "../../assets/LogoSpaceAR_150.png";
// import LogoHeroMobile from "../../assets/LogoHero.png";
// import HeroModel from "../../assets/Paintings/Hero.gltf";
// import HeroPoster from "../../assets/Posters/HeroPoster.png";

export default function Hero() {

  return (
    <>
      
        <Grid container className="heroLogoBg">
        <Grid item xs={3}>
            <img className="heroLogo" src={LogoHero} alt="SpaceAR Logo" />
          </Grid>
          <Grid item className="qrCode">
            <QRCode value="https://spacear.netlify.app"/>
            <p className='par'>
              Scan QR to view products in Augmented Reality
            </p>
          </Grid>
        </Grid>
     
    </>
  );
}

// <Grid>
//               <model-viewer
//                 style={{
//                   position: "absolute",
//                   marginTop: "100px",
//                   marginLeft: "450px",
//                   width: "1400px",
//                   height: "900px",
//                 }}
//                 poster={HeroPoster}
//                 src={HeroModel}
//                 ar-placement="wall"
//                 camera-controls
//                 disable-zoom
//                 alt="A 3D model of a reflective sphere"
//                 ar-modes="scene-viewer webxr quick-look"
//               >
//                 {/* exit back to website */}

//                 <button slot="ar-button" className={classes.button}></button>
//               </model-viewer>
//             </Grid>
