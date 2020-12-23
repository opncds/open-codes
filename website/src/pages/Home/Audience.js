import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default ()=>{
  const desktop = useMediaQuery('(min-width:900px)');
  const vertical = useMediaQuery('(max-width:600px)');

  return <div 
      style={{
        display: vertical?'block':'flex',
        justifyContent:'space-between',
        alignItems: 'center'
      }}
    >
      <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          maxWidth:desktop?'50%':'100%',
          paddingLeft:'10vw',
          paddingRight: vertical?'10vw':0,
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
            Проблема
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
            Будівельна галузь має одні з найнижчих 
            показників цифровізації та продуктивності.
            Не в останню чергу, це обумовлено 
            застарілістю нормативної бази, 
            яка досі має аналоговий вигляд.
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
            – ДБНи публікуються в цифровому форматі, але не мають зручних функцій пошуку і навігації, таким чином вони залишаються “папером онлайн” 
              <br/>
              <br/>
            – Сертифіковані рішення для роботи з нормами (Зодчий, Будстандарт, Стройінформ) докорінно не вирішують цих проблем 
              <br/>
              <br/>
            – Відсутні прозорі механізми громадських обговорень 
              <br/>
              <br/>
            – Процес узгодження проектних рішень корумпований 
              
          </span>
        </p>
      </div>
      <div style={{padding: vertical?'0 10vw 20vw 10vw':'5vw'}}>
        <img src="static/img/upload-ade859bb-86f4-440c-8e42-992dccfec757.png" />
      </div>
  </div>
}
