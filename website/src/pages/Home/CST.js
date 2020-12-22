import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  spinningLogo: {
    animation: 'spin 2s linear infinite'  
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  }
}));

export default ()=>{
  const desktop = useMediaQuery('(min-width:900px)');
  const classes = useStyles()
  return <div style={{backgroundColor:"white", width:'100%', height:'fit-content'}}>
      <div
        style={{
          maxWidth:'30%',
          width:'fit-content',
          paddingLeft:'10%',
          paddingTop: '30vh',
        }}
      >
        <img className={classes.spinningLogo} src="static/img/upload-b6002df0-62cc-49c5-98ec-eb064d633ed5.jpg" />
      </div>
      <div 
        style={{
          maxWidth:'40%',
          width:'fit-content',
          paddingLeft:'10%',
          paddingRight: '10%',
          paddingTop: '30vh',
          display:'inline'
        }}
      >
        <p style={{paddingTop:'5vw', maxWidth:'40%'}}>
          <span 
            style={{
              fontSize:'1.4rem',
              fontSize: desktop?"1.5vw":"1rem",
              fontWeight:600,
              letterSpacing:'0.4px',
              textDecoration:'none',
              display:'inline',
              maxWidth:'50%',
              color:'black'
            }}
          >
            Мультидисциплінарна практика 
            з багаторічним досвідом реалізації 
            проектів на стику архітектури і технологій.
          </span>
        </p>
      </div>
  </div>
}
