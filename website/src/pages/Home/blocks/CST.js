import React, { useEffect, useRef, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
import cstImage from "./../../../assets/img/cst.jpg"

const useStyles = makeStyles(theme => ({
  spinningLogo: {
    animation: '$spin 15s linear infinite',
  },
  scaleLogo: {
    width:'fit-content',
    height:'fit-content',
    display: 'block',
    transform: "scale(1)",
    transition: 'transform 0.3s linear;',
    '&:hover': {
      transform: "scale(1.1)"
    }
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
  return <div 
    style={{
      backgroundColor:"white", 
      width:'100%', 
      height:desktop?'fit-content':'80vh', 
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '5vw',
      paddingTop: '5vw',

    }}>
      <div
        style={{
          maxWidth:'30%',
          width:'30vw',
          height:'20vw',
          paddingLeft:'10%',
        }}
      >
        <a href="http://spatialtech.info/" className={classes.scaleLogo}>
          <img className={classes.spinningLogo} src={cstImage} />
        </a>
      </div>
      <div 
        style={{
          paddingLeft:'10%',
          display:'inline',
          width: '50vw',
          height: 'fit-content'
        }}
      >
        <p style={{maxWidth: desktop?'25vw':'400px'}}>
          <span 
            style={{
              fontSize:'1.4rem',
              fontSize: desktop?"1.2vw":"2vw",
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
