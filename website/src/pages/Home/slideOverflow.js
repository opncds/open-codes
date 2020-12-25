
import React, { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';

export default ({ children }) => {

  const [entered, setEntered] = useState(0)
  const [left, setLeft] = useState(1)
  const [currIndex, setIndex] = useState(0)

  const handleEnter = (index) => {
    console.log('enter')
    if(index<left || index<currIndex){
      setIndex(index)
    }
    setEntered(index)
  }

  const handleLeave = (index) => {
    console.log('exit')
    if(index<entered || (index===entered && index===currIndex) ){
      setIndex(index+1);
    }
    setLeft(index)
  }
  

  return (
      <>
          <div key={0} style={{zIndex:0}}>{
            children.map((content, index) => {
              const reverseIndex = children.length - index;
              const isCurrent = index === currIndex+1;
              const staticDivStyle = {
                position: 'fixed',
                width: '100%',
                zIndex: reverseIndex,
                transition: 'opacity ease-out 0.5s',
                display: isCurrent ? 'block' : 'none'
              }
        
              return (
                <div className='static' key={index+children.length}  style={staticDivStyle}>
                  {content({ active:false, isCurrent})}
                </div>
              )})
          }</div>
          <div key={1} style={{zIndex:1, paddingBottom:'4rem'}}>{
            children.map((content, index) => {
              const isCurrent = index === currIndex;
              const alldivStyle = {
                display: 'block',
                visibility: isCurrent ? 'visible' : 'hidden',
                zIndex: children.length,
                position: 'relative',
                width: '100%',
                overflow: 'auto',
                // backgroundColor: 'rgb(54, 62, 82)'
              };
              const [visible, setVisible] = useState(false)
              
              const ref = useRef()

              useEffect(()=>{
                if(ref.current){
                  const offset = ref.current.getBoundingClientRect()
                  if( index >0 && window.pageYOffset>-offset.top && window.pageYOffset<(-offset.top + offset.height)){
                    setIndex(index)
                  }
                }
              },[ref.current])
        
              return (<>
                <Waypoint 
                  topOffset={60} 
                  bottomOffset={60} 
                  key={index} 
                  onEnter={()=>{
                    !visible && setVisible(true);
                    handleEnter(index)}} 
                  onLeave={()=>{
                    visible && setVisible(false);
                    handleLeave(index)}}
                >
                  <div ref={ref} className='dynamic' key={index} style={alldivStyle}>
                    {content({ active:true, isCurrent, visible})}
                  </div>
                </Waypoint>
              </>)})
          }</div>
      </>
  )
}