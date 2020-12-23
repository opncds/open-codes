import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Waypoint } from 'react-waypoint';
import Hero from './Home/Hero'
import Story from './Home/Story'
import CST from './Home/CST'

const ScrollPage = ({pages}) => {
  const [showStatic, setShowStatic] = useState(true);
  const [entered, setEntered] = useState(0)
  const [left, setLeft] = useState(1)
  const [currIndex, setIndex] = useState(0)

  const handleEnter = (index) => {
    console.log('entered', index, 'prevEntered', entered, 'left', left, 'current', currIndex)
    if(index<left || index<currIndex){
      console.log('setIndex on enter', index)
      setIndex(index);
    }
    // if(index<left){
    //   setIndex(index+1);
    // }
    setEntered(index)
    // setShowStatic(true);
  }

  const handleLeave = (index) => {
    console.log('left', index, 'prevLeft', left, 'entered', entered, 'current', currIndex)
    if(index<entered || (index===entered && index===currIndex) ){
      console.log('setIndex on leave', entered)
      setIndex(index+1); //0,2,0,0 - stay at 0 when 1
    }
    setLeft(index) ///1,1,1,0 - jumps to 2 when 0
  }
  
  const handlePositionChange = (e,active)=>{
    // if(active){
      console.log('change',e,active)

    // }
  }

  useEffect(()=>{console.log(currIndex)},[currIndex])
  // const reverseIndex = pages.length - currIndex;


  return (
      <>
          <div key={0} style={{zIndex:0}}>{
            pages.map((content, index) => {
              const reverseIndex = pages.length - index;
              const isCurrent = index === currIndex+1;
              const staticDivStyle = {
                position: 'fixed',
                // height: '100vh',
                width: '100%',
                zIndex: reverseIndex,
                // opacity: showStatic ? 0.6 : 0,
                transition: 'opacity ease-out 0.5s',
                display: isCurrent ? 'block' : 'none'
              }
        
              return (
                <div key={index+pages.length}  style={staticDivStyle}>{content}</div>
              )})
          }</div>
          <div key={1} style={{zIndex:1}}>{
            pages.map((content, index) => {
              const reverseIndex = pages.length - index;
              const isCurrent = index === currIndex;
              const alldivStyle = {
                display: 'block',
                visibility: isCurrent ? 'visible' : 'hidden',
                zIndex: reverseIndex,
                position: 'relative',
                // height: '100vh',
                width: '100%',
                overflow: 'auto',
                backgroundColor: 'rgb(54, 62, 82)'
              };
        
              return (<>
                <Waypoint topOffset={60} bottomOffset={60} key={index} onPositionChange={(e)=>handlePositionChange(e,isCurrent)} onEnter={()=>handleEnter(index)} onLeave={()=>handleLeave(index)}>
                  <div key={index} style={alldivStyle}>{content}</div>
                </Waypoint>
                {/* {isCurrent && <div className={'black'+index} key={index+(pages.length*2)} style={{width: '100%', height: '100vh', backgroundColor: 'black', zIndex: 10}}/>} */}
              </>)})
          }</div>
      </>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const desktop = useMediaQuery('(min-width:900px)');
  const [page, setPage] = useState(0)
  const [position, setPosition] = useState(0)
  const parallax = useRef()

  // useEffect(()=>{
  //   window.addEventListener('scroll', e=>console.log(window.pageYOffset))
  // })


  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main 
        style={{ backgroundColor:'#363e52', zIndex:-5, backgroundSize: 'cover' }}
      >
        <ScrollPage pages={[
          <Hero />,
          <Story />,
          <CST />
        ]} />
                
      </main>
    </Layout>
  );
}

export default Home;
