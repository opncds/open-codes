import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
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

export default ({ text, text2, image, alignRight, active, isCurrent, visible })=>{
  const desktop = useMediaQuery('(min-width:900px)');
  const vertical = window.innerWidth<window.innerHeight;
  const classes = useStyles()
  const [mouseOver, setMouseOver] = useState(false)
  const [inCenter, setInCenter] = useState(false)
  const ref = useRef()

  const onScroll=()=>{
    if( active && ref.current){
      const rect = ref.current.getBoundingClientRect()
      const centerPosition = -rect.top - rect.height
      console.log(centerPosition-window.pageYOffset)
      if(Math.abs(centerPosition-window.pageYOffset)<100 && !inCenter){
        console.log('in center')
        setInCenter(true)
      }else if(inCenter){
        setInCenter(false)
      }
    }
  }

  useEffect(()=>{

  },[isCurrent])

  const props = useSpring({
    config: {mass:2, friction:100},
    from:{ translateY: -15 },
    to: [(visible||mouseOver)?{ translateY:15 }:{ translateY:0 },{ translateY:0 }],
  })

  return <div 
      {...active?{ref, onScroll}:{}}
      style={{
        display: vertical?'block':'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: vertical?'row':(alignRight?'row-reverse':'row')
      }}
    >
      <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          maxWidth:desktop?'50%':'100%',
          paddingRight: alignRight?(desktop?'10vw':'10vw'):(desktop?0:'10vw'),
          paddingLeft: alignRight? (desktop?0:'10vw'):(desktop?'10vw':'10vw'),
          paddingTop: desktop?'10vw':'10vw',
          paddingBottom: desktop?'5vw':'10vw'
        }}
      >
        {text({vertical, desktop, classes})}
      </div>
      {text2 && <div 
        className="text-viewer" 
        style={{
          maxWidth:'90%',
          width:'fit-content',
          maxWidth:vertical?'100%':'50%',
          paddingRight: (desktop?'10vw':'10vw'),
          paddingLeft: (desktop?0:'10vw'),
          paddingTop: desktop?'10vw':'10vw',
          paddingBottom: desktop?'5vw':'10vw'
        }}
      >
        {text2({vertical, desktop, classes})}
      </div>}
      {image && <div style={{padding: vertical?'0 10vw 10vw 10vw':'10vw 5vw 5vw 5vw'}}>
        <animated.div 
          style={{
            transform: props.translateY.interpolate(v=>`translate(0px,${v}px)`)}} 
          onMouseOver={()=>setMouseOver(true)} 
          onMouseLeave={()=>setMouseOver(false)}
        >
          {image({vertical, desktop, classes, ...props})}
        </animated.div>
      </div>}
  </div>
}
