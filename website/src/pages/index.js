import React, { useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const parallax = useRef()
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main style={{ backgroundColor:'#363e52' }}>
        <Parallax ref={parallax} pages={3} style={{ backgroundColor:'#363e52' }}>
          <ParallaxLayer 
            offset={0} 
            speed={1} 
            onClick={() => parallax.scrollTo(1)}
            style={{ backgroundColor:'#363e52', zIndex:10, backgroundSize: 'cover' }}
          >
            <img srcSet="https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-1b9524a1-9c21-4c44-b020-1bba0b4aa065.jpg?w=3617&amp;e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-1b9524a1-9c21-4c44-b020-1bba0b4aa065.jpg?e=webp 3x" src="https://d2kq0urxkarztv.cloudfront.net/5443d73367f3ed093ea65c73/1806316/upload-1b9524a1-9c21-4c44-b020-1bba0b4aa065.jpg?w=3617&amp;e=webp" className="viewable" style={{opacity: 1}}/>

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <div className="text-viewer" style={{zIndex:12}}>
              <p style={{lineHeight:"95px", zIndex:12}}>
                <span style={{
                  zIndex:12,
                  fontSize:"76px",
                  fontWeight:600,
                  fontFamily:'ysxc',
                  fontStyle: 'normal',
                  textDecoration: 'none', 
                  textTransform: 'none',
                  color:'rgba(255, 255, 255, 1)'
                }}>
                  Open Codes
                </span>
              </p>
            </div>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

          <ParallaxLayer 
            offset={0} 
            speed={0} 
            style={{ backgroundColor:'#363e52', zIndex:0, backgroundSize: 'cover' }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={url('bash')} style={{ width: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
          </ParallaxLayer>
        </Parallax>
      </main>
    </Layout>
  );
}

export default Home;
