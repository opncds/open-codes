import React, { useRef, useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Spring } from 'react-spring/renderprops'
import heroImage from './../../../assets/img/ipad2.png'
import heroImageWhite from './../../../assets/img/ipad_white.png'

import emojiImage from './../../../assets/img/emoji.png'

export default ({ active, isCurrent, isDarkTheme })=>{
  const desktop = useMediaQuery('(min-width:900px)');
  const ref = useRef()
  const [vertical, setVertical] = useState(false);

  useEffect(()=>{
    setVertical(window.innerWidth<window.innerHeight)
  })

  const content = (props) => (
     <div
      {...{ref}}
      style={{
        // backgroundImage: `url(${heroImage})` ,
        background: (isDarkTheme?`linear-gradient(300deg, rgba(5,5,10,0.8), rgba(15,22,30,0) 100%),
            linear-gradient(127deg, rgba(15,22,30,0.8), rgba(5,5,10,0) 100%),
            linear-gradient(336deg, rgba(25,30,35,0.8), rgba(25,30,35,0) 100%), rgb(120,120,120)`:
            `linear-gradient(to right top, #7182cf, #788dd8, #7f98e1, #86a3ea, #8eaef3, #8bb8f6, #8ac1f8, #8dcaf9, #90d2f1, #9cd8e9, #addce2, #bfe0de), rgb(250,250,250)`) +
            props.backgroundPosition + '/' + (vertical?'auto 100%':'cover'),
        // backgroundSize: vertical?'auto 100%':'cover',
        // backgroundPosition: props.backgroundPosition,
        minHeight: 'calc( 100vh - 60px )',
        // minWidth: '100vw',
        // height: '100vh',
        // width: '100vw'
        overflow: 'hidden',
        position:'relative'
      }}
    > 
      <img
        src={isDarkTheme? heroImage: heroImage}
        style={{
          height: 'auto',
          width: vertical?'auto':'60%',
          bottom: 0,
          right: 0,
          transform: `${props.translate} scale(${vertical?1.5:1})`,
          zIndex:0,
          position: 'absolute'
        }}
      />
      <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          paddingLeft: '10vw',
          paddingTop: '30vh',
          zIndex:2,
          position:'relative'
        }}
      >
        <p style={{lineHeight:desktop?"6vw":"1rem"}}>
          <span style={{
            fontSize:"3.5rem",
            fontSize: desktop?"6vw":"3.5rem",
            fontWeight: 600,
            fontStyle: 'normal',
            textDecoration: 'none', 
            textTransform: 'none',
            display:'block',
            whiteSpace: 'nowrap',
            color: "#fff"
          }}>
            Open Codes
          </span>
        </p>
        <p >
          <span 
            style={{
              fontSize:'0.8rem',
              fontSize: desktop?"1.35vw":"0.8rem",
              fontWeight:600,
              letterSpacing:'0.4px',
              textDecoration:'none',
              color: isDarkTheme?'rgba(147, 165, 200, 1)':'rgba(240, 240, 240, 1)',
              display:'block',
              float:'right'
            }}
          >
            Відкриті Будівельні Норми
          </span>
        </p>
        <p style={{paddingTop:'5vw', paddingBottom:'3vw'}}>
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
            Онлайн платформа для зручної 
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
            <img 
              src={emojiImage} 
              className="viewable" 
              style={{opacity: 1}}
            />
          </span>
        </p>
      </div>
    </div>
  )


  return <Spring
      config={{mass:2, friction:100}}
      from={{ backgroundPosition: "180% -25%", translate: "translate(20%,25%)" }}
      to={{ backgroundPosition: isCurrent?"180% -10%":"180% -25%", translate: isCurrent?"translate(20%,20%)":"translate(20%,25%)" }}
      delay={500}
    >
      {content}
    </Spring>
}
