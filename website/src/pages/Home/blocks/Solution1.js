import React from 'react';
import Block from './block'
import { animated } from 'react-spring'
import desktopImage from './../../../assets/img/ipad.png'
import mobileImage from './../../../assets/img/mobile.png'

const Text = ({desktop, vertical, classes})=><>
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
      Рішення 1.0
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
      Відкрита база даних
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
      
      – Збір актуальних положень норм у єдину відкриту платформу
      <br/>
      <br/>
      – Забезпечення можливості пошуку та коментування окремих положень у межах організації, групування обраних положень для користувача
      <br/>
      <br/>
      – Полегшення навігації: у пунктах, які посилаються на інші нормативні акти користувач матиме змогу інтерактивно переходити до відповідного документа чи його частини
      <br/>
      <br/>
      – Впровадження інтерактивного словника термінів
    </span>
  </p>
</>

export default (props)=>{
  return (
    <Block 
      image={styles=>(
        <div 
          style={{
            position:'relative', 
            minWidth:'50vw', 
            transform:styles.vertical?'translate(0vw,0px)':'translate(5vw,0px)',
            display: "flex", // make us of Flexbox
            alignItems: "center",
            margin: styles.vertical?"0 -10vw":'unset'
          }}
        >
          <animated.img 
            style={{width: '100%'}} 
            src={desktopImage} />
          <animated.img 
            style={{
              position:'absolute', 
              top:'auto',
              bottom:'2vw', 
              left:'4vw', 
              width: '25%', 
              transform: styles.translateY.interpolate(v=>`translate(0px,${v*1.75}px)`)}} 
            src={mobileImage} />
          <p 
            style={{
              position:'absolute', 
              bottom: styles.vertical?'-2rem':'2vw', 
              left:'auto', 
              right: 'auto',
              width: '100%',
              textAlign:'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
          >
            <span 
              style={{fontSize: styles.desktop?"0.8vw":"0.6rem", width: styles.vertical?'40%':'30%'}}
              className={styles.classes.hoverText}
            >
              Інтерфейс OpenCodes для роботи із текстом нормативних документів  
            </span>
          </p>
        </div>
      )} 
      text={styles=><Text {...{...styles, ...props}}/>}
      {...props}
    />
  )
}
