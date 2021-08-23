import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import "@google/model-viewer";
import QRCode from "react-qr-code";
import { useAuth0 } from "@auth0/auth0-react";
import "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fantasyPoster from "../../assets/Posters/fantasy.jpg";
import jasminePoster from "../../assets/Posters/jasmine.jpg";
import acrylicBluePoster from "../../assets/Posters/Acrylic.jpg";
import melodyPoster from "../../assets/Posters/melody.jpg";
import flowPoster from "../../assets/Posters/Stripes.jpg";
import evapPoster from "../../assets/Posters/evaporate.jpg";
import acrosstwoPoster from "../../assets/Posters/across.jpg";


export default function Hero() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="flex-container">
      <div className="flex-child">
        <Carousel interval={4000} showStatus={false} showIndicators={false} emulateTouch={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
          <div style={{ height: "500px", color: "#fff" }}>
            <img src={fantasyPoster} alt="" />
          </div>
          <div  style={{ height: "500px", color: "#fff" }}>
            <img src={jasminePoster} alt="" />
            
          </div>
          <div style={{ height: "500px", color: "#fff" }}>
            <img src={acrylicBluePoster} alt="" />
          </div>
          <div style={{ height: "500px", color: "#fff" }}>
            <img src={melodyPoster} alt="" />
          </div><div style={{ height: "500px", color: "#fff" }}>
            <img src={flowPoster} alt="" />
          </div><div style={{ height: "500px", color: "#fff" }}>
            <img src={evapPoster} alt="" />
          </div><div style={{ height: "500px", color: "#fff" }}>
            <img src={acrosstwoPoster} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="flex-child">
        <Grid container className="heroLogoBg">
          <Grid item className="qrCode">
            <QRCode value="https://spacear.netlify.app" />
            <p className="par">Scan QR to view products in your space.</p>
          </Grid>
        </Grid>
      </div>
    </div>
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
