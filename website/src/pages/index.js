import React, { useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const parallax = useRef()
  const desktop = useMediaQuery('(min-width:900px)');

  return (
    <Layout
    className='noscrollbar'
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main style={{ backgroundColor:'#363e52' }} className='noscrollbar'>
        <Parallax ref={parallax} className='noscrollbar' pages={7} style={{ backgroundColor:'#363e52' }}>
          <ParallaxLayer 
          className='noscrollbar'
            offset={0} 
            speed={0} 
            style={{ backgroundColor:'#363e52', zIndex:0, backgroundSize: 'cover' }}
          ></ParallaxLayer>

          <ParallaxLayer 
          className='noscrollbar'
            offset={0} 
            speed={1} 
            onClick={() => parallax.scrollTo(1)}
            style={{
              backgroundImage: "url(https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-1b9524a1-9c21-4c44-b020-1bba0b4aa065.jpg?w=3617&e=webp)" ,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} className='noscrollbar'>
            <div 
              className="text-viewer" 
              style={{
                maxWidth:'90%',
                width:'fit-content',
                paddingLeft:'10%',
                paddingTop: '30vh'
              }}
            >
              <p style={{lineHeight:"45px"}}>
                <span style={{
                  fontSize:"3.5rem",
                  fontSize: desktop?"6vw":"3.5rem",
                  fontWeight: 600,
                  fontStyle: 'normal',
                  textDecoration: 'none', 
                  textTransform: 'none',
                  display:'block'
                }}>
                  Open Codes
                </span>
              </p>
              <p style={{lineHeight:desktop?"25px":"0px"}}>
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
              <p style={{paddingTop:'5vw'}}>
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
                    srcset="https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-adae9722-1bfa-4b52-a4e9-6b2eaf5989af.png?w=285&amp;e=webp&amp;nll=true 2x, https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-adae9722-1bfa-4b52-a4e9-6b2eaf5989af.png?e=webp&amp;nll=true 3x" 
                    src="https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-adae9722-1bfa-4b52-a4e9-6b2eaf5989af.png?w=285&amp;e=webp&amp;nll=true" 
                    className="viewable" 
                    style={{opacity: 1}}
                  />
                </span>
              </p>
            </div>
          </ParallaxLayer>

        </Parallax>
      </main>
    </Layout>
  );
}

export default Home;
