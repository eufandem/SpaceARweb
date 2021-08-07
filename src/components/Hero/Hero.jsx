import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import "@google/model-viewer";
import QRCode from "react-qr-code";
import LogoHero from "../../assets/LogoSpaceAR_150.png";
export default function Hero() {

  return (
    
        <Grid container className='pb-40 items-center p-1 flex-grow py-16' style={{backgroundSize:'cover', backgroundPosition: 'center', backgroundImage: `url("https://bit.ly/3xy69am")` }}>
          <div className='hidden lg:flex container pt-10 relative pl-20'>
            <QRCode value="https://spacear.netlify.app"/>
            </div>
            <div className='hidden md:block text-white font-black mr-96 pl-32 pt-5'>
            <p>
              Scan to view in AR
            </p>
            
          </div>
        </Grid>
  );
}

