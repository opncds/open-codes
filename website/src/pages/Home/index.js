import React, { useEffect } from 'react';
import Hero from './blocks/Hero'
import Problem from './blocks/Problem'
import Context from './blocks/Context'
import Solution1 from './blocks/Solution1'
import Solution2 from './blocks/Solution2'
import Auditorium from './blocks/Auditorium'
import SlideOverflow from './slideOverflow'

export default ({ isDarkTheme })=>{
  // useEffect(()=>{
  //   // fetch('https://spatialtech.herokuapp.com/http://museum.kpi.ua/map/tiles//1943-09-26.DE.LW/?z=11&x=1197&y=690')
  //   fetch('https://spatialtech.herokuapp.com/https://tileserver.lunstatic.net/rpc/index.json')
  //   .then(t=>t.json())
  //   .then(t=>console.log(t))
  // })//https://tileserver.lunstatic.net/rpc/public.lun_source.json

  return (
    <main 
      style={{ 
        background:isDarkTheme?'linear-gradient(#3f4857, #12173e)':'linear-gradient(#fefefe, #bacff7)', 
        zIndex:0
      }}
    >
      <SlideOverflow>
        {props=><Hero {...{...props, isDarkTheme}} />}
        {props=><>
          <Problem {...props} />
          <Context alignRight={true} {...props} />
          <Solution1 {...props} />
          <Solution2 {...props} />
          <Auditorium {...props} />
        </>}
      </SlideOverflow>
    </main>
  );
}
