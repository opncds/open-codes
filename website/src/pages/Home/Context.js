import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  hoverText: {
    fontSize:'0.6rem',
    fontWeight:'normal',
    display:'block',
    color:'#ccc',
    transition: 'color 0.3s linear;',
    '&:hover': {
      color: "#fff"
    }
  }
}));

export default ()=>{
  const desktop = useMediaQuery('(min-width:900px)');
  const vertical = useMediaQuery('(max-width:600px)');
  const classes = useStyles()

  return <div 
      style={{
        display: vertical?'block':'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: vertical?'row':'row-reverse'
      }}
    >

      <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          maxWidth:desktop?'50%':'100%',
          paddingRight:'10vw',
          paddingLeft: vertical?'10vw':0,
          paddingTop: desktop?'25vh':'15vh',
          paddingBottom: desktop?'25vh':'15vh'
        }}
      >
        <p style={{lineHeight:"45px"}}>
          <span style={{
            fontSize:"3.5rem",
            fontSize: desktop?"5vw":"2.5rem",
            fontWeight: 600,
            fontStyle: 'normal',
            textDecoration: 'none', 
            textTransform: 'none',
            display:'block'
          }}>
            Передумови
          </span>
        </p>
        <p style={{paddingTop:'5vw', lineHeight: desktop?"1.8vw":"1rem"}}>
          <span 
            style={{
              fontSize:'1.4rem',
              fontSize: desktop?"1.5vw":"1rem",
              fontWeight:500,
              letterSpacing:'0.4px',
              textDecoration:'none',
              display:'block'
            }}
          >
            В Україні відбувається побудова 
            цифрової держави, зміни торкнуться 
            і будівельної галузі.
          </span>
        </p>
        <p style={{paddingTop:'3vw'}}>
          <span 
            style={{
              fontSize:'1.4rem',
              fontSize: desktop?"1vw":"0.8rem",
              fontWeight:'normal',
              display:'block',
            }}
          >
            
            – Державні будівельні норми підлягають оприлюдненню у вигляді відкритих даних *
            <br/>
            <br/>
            – Впровадження параметричних методів нормування у будівництві **
            <br/>
            <br/>
            – Обов’язкове BIM-проектування  при спорудженні об’єктів за бюджетні кошти до 2023 ***
            <br/>
            <br/>
            – Створення Державного агентства техрегулювання у містобудуванні ****
            <br/>
            <br/>
            – Посилення персональної майнової та кримінальної відповідальності суб’єктів будівельного процесу ****

          </span>
        </p>
        <p style={{paddingTop:'3vw'}}>
        <span 
            style={{fontSize: desktop?"0.8vw":"0.6rem"}}
            className={classes.hoverText}
          >
            
            * Відповідно до постанови КМУ № 835 
            <br/>
            ** Законопроект №1052 про внесення змін у Закон «Про будівельні норми»
            <br/>
            *** Передбачено проектом дорожньої карти запровадження BIM в Україні 
            <br/>
            **** Реформування галузі містобудування

          </span>
        </p>
      
      </div>
      <div style={{padding: vertical?'0 10vw 20vw 10vw':'5vw'}}>
        <img src="static/img/upload-35973784-d1bf-4d3d-903b-083ceb9bc2fc.png" />
      </div>
  </div>
}
