import React from 'react';
import Block from './block'
import contextImage from "../../../assets/img/reform.png"

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
      Передумови
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
      В Україні відбувається процес діджиталізації всіх сфер державного сектору, серед яких будівельна галузь не є виключенням:
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
      
      – Державні будівельні норми підлягають оприлюдненню у вигляді відкритих даних *
      <br/>
      <br/>
      – Відбувається процес впровадження параметричних методів нормування у будівництві **
      <br/>
      <br/>
      – Обов’язковим є BIM-проектування при спорудженні об’єктів за бюджетні кошти до 2023 року ***
      <br/>
      <br/>
      – Створенно Державне агентство техрегулювання у містобудуванні ****
      <br/>
      <br/>
      – Відбувається посилення персональної майнової та кримінальної відповідальності суб’єктів будівельного процесу ****

    </span>
  </p>
  <p style={{paddingTop:'3vw'}}>
    <span 
      style={{fontSize: desktop?"0.8vw":"0.6rem"}}
      className={classes.hoverText}
    >
      
      * Відповідно до постанови КМУ № 835 
      <br/>
      ** Законопроект №1052 про внесення змін у Закон «Про будівельні норми»
      <br/>
      *** Передбачено проектом дорожньої карти запровадження BIM в Україні 
      <br/>
      **** Реформування галузі містобудування

    </span>
  </p>
</>

export default (props)=>{
  return (
    <Block 
      image={styles=><img src={contextImage} />} 
      text={styles=><Text {...{...styles, ...props}}/>}
      {...props}
    />
  )
}
