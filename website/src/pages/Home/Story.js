import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default ()=>{
  const desktop = useMediaQuery('(min-width:900px)');

  return <>
      <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          paddingLeft:'10%',
          paddingTop: desktop?'30vh':'15vh',
          paddingBottom: desktop?'30vh':'15vh'
        }}
      >
        <p style={{lineHeight:"45px"}}>
          <span style={{
            fontSize:"3.5rem",
            fontSize: desktop?"6vw":"3rem",
            fontWeight: 600,
            fontStyle: 'normal',
            textDecoration: 'none', 
            textTransform: 'none',
            display:'block'
          }}>
            Проблема
          </span>
        </p>
        <p style={{paddingTop:'5vw'}}>
          <span 
            style={{
              fontSize:'1.4rem',
              fontSize: desktop?"1.5vw":"1rem",
              fontWeight:600,
              letterSpacing:'0.4px',
              textDecoration:'none',
              display:'block',
              maxWidth:desktop?'50%':'100%'
            }}
          >
            Будівельна галузь має одні з найнижчих 
            показників цифровізації та продуктивності.
            Не в останню чергу, це обумовлено 
            застарілістю нормативної бази, 
            яка досі має аналоговий вигляд.
          </span>
          <span 
            style={{
              fontSize:'1.4rem',
              fontSize: desktop?"1.5vw":"1rem",
              fontWeight:600,
              letterSpacing:'0.4px',
              textDecoration:'none',
              display:'block',
            }}
          >
            роботи з будівельними нормами
          </span>
          <span 
            style={{
              width:'10vw',
              paddingTop:'1rem',
              display:'block',
            }}
          >
          </span>
        </p>
      </div>
  </>
}
