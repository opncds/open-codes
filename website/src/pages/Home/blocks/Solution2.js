import React from 'react';
import Block from './block'
import { animated } from 'react-spring'
import laptopImage from './../../../assets/img/laptop.png'

const Text = ({desktop, vertical, classes})=><>
  <p style={{lineHeight:desktop?"5vw":"2.5rem"}}>
    <span style={{
      fontSize:"3.5rem",
      fontSize: desktop?"5vw":"2.5rem",
      fontWeight: 600,
      fontStyle: 'normal',
      textDecoration: 'none', 
      textTransform: 'none',
      display:'block',
      whiteSpace: 'nowrap'
    }}>
      Рішення 2.0
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
      Інструменти та інтерфейси
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
      
      – Переведення таблиць, специфікацій у machine-readable формат (csv, json, xml, etc)
      <br/>
      <br/>
      – Інтерпретація тексту окремих положень у програмний код для автоматичної перевірки на відповідність проектних рішень нормам
      <br/>
      <br/>
      – Перевірка моделі у форматі IFC у відповідності до концепції openBIM
      <br/>
      <br/>      
      – Розробка плагінів для популярних програмних продуктів для проектування
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
            transform: styles.vertical?'translate(0px,0px)':'translate(5vw,0px)',
            display: "flex", 
            alignItems: "center",
            margin: styles.vertical?"0 -10vw":'unset'

          }}
        >
          <animated.img 
            style={{width: '100%'}} 
            src={laptopImage} />
          <p 
            style={{
              position:'absolute', 
              bottom:styles.vertical?'0rem':'2vw', 
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
              style={{fontSize: styles.desktop?"0.8vw":"0.6rem", width:styles.vertical?'100%':'50%', padding: styles.vertical?'0 10vw':'unset'}}
              className={styles.classes.hoverText}
            >
              Автоматична перевірка проекту на відповідність будівельним нормам у програмному пакеті Autodesk Revit
            </span>
          </p>
        </div>
      )} 
      text={styles=><Text {...{...styles, ...props}}/>}
      {...props}
    />
  )
}
