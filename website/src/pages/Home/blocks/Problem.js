import React from 'react';
import Block from './block'
import problemImage from './../../../assets/img/book.png'

const Text = ({desktop, vertical})=><>
  <p style={{lineHeight:desktop?"5vw":"2.5rem", paddingTop:'3rem'}}>
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
      Проблема
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
      Будівельна галузь має одні з найнижчих показників цифровізації та продуктивності. Однією з головних причин цього є застарілість нормативної бази, яка донині має аналоговий вигляд.
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
      – ДБНи публікуються в цифровому форматі, але не мають зручних функцій пошуку і навігації, таким чином вони залишаються “папером онлайн”
        <br/>
        <br/>
      – Сертифіковані рішення для роботи з нормами (Зодчий, Будстандарт, Стройінформ) докорінно не вирішують цих проблем
        <br/>
        <br/>
      – Відсутні прозорі механізми громадських обговорень
        <br/>
        <br/>
      – Процес узгодження проектних рішень має корумпований характер
        
    </span>
  </p>
</>

export default (props)=>{
  return (
    <Block 
      alignRight={false}
      image={styles=><img style={{paddingTop:'3rem'}} src={problemImage} />}
      text={styles=><Text {...{...styles, ...props}}/>}
      {...props}
    />
  )
}
