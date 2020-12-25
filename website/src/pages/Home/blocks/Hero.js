import React, { useRef, useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Spring } from 'react-spring/renderprops'
import heroImage from './../../../assets/img/hero_dark.jpg'
import emojiImage from './../../../assets/img/emoji.png'

export default ({ active, isCurrent })=>{
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
        backgroundImage: `url(${heroImage})` ,
        backgroundSize: vertical?'auto 120%':'cover',
        backgroundPosition: props.backgroundPosition,
        minHeight: 'calc( 100vh - 60px )',
        overflow: 'hidden'
      }}
    >
      <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          paddingLeft: '10vw',
          paddingTop: '30vh'
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
            whiteSpace: 'nowrap'
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
              color:'rgba(147, 165, 200, 1)',
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
      from={{ backgroundPosition: "50% 50%" }}
      to={{ backgroundPosition: isCurrent?"50% 65%":"50% 50%" }}
      delay={500}
    >
      {content}
    </Spring>
}
