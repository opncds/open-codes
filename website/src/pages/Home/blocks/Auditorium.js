import React from 'react';
import Block from './block'
import { animated } from 'react-spring'

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
      whiteSpace:'nowrap'
    }}>
      Авдиторія та <br/>
      суспільна користь
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
      Наша мета
    </span>
  </p>
  <p style={{paddingTop:'3vw'}}>
    <span 
      style={{
        fontSize:'1.4rem',
        fontSize: desktop?"1vw":"0.8rem",
        fontWeight:'normal',
        display:'block',
        paddingRight: '5vw'
      }}
    >
      
      Зробити будівельні норми зручними у користуванні та інтегрувати інструменти автоматичної валідації та погодження у проектний процес.
      <br/>
      OpenCodes допоможе будівельним компаніям заощадити час, запобігти помилок і зменшити загальну вартість будівництва.      
      <br/>
      Платформа сприятиме позитивним змінам якості міського середовища та прозорості у прийнятті рішень.
    </span>
  </p>
</>

const Text2 = ({desktop, vertical, classes})=><>
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
      <br/>
      <br/>
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
      Користувачі
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
      Потенційні користувачі платформи: проектні інститути, архітектурні практики, проектна експертиза, державні контролюючі органи, законодавчі органи, дослідники.
    </span>
  </p>
</>

export default (props)=>{
  return (
    <Block 
      text2={styles=><Text2 {...{...styles, ...props}}/>}
      text={styles=><Text {...{...styles, ...props}}/>}
      {...props}
    />
  )
}
