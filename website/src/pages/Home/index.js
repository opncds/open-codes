import React from 'react';
import Hero from './blocks/Hero'
import Problem from './blocks/Problem'
import Context from './blocks/Context'
import Solution1 from './blocks/Solution1'
import Solution2 from './blocks/Solution2'
import Auditorium from './blocks/Auditorium'

import SlideOverflow from './slideOverflow'

export default ()=>{

  return (
    <main 
      style={{ 
        background:'linear-gradient(#3f4857, #12173e)', 
        zIndex:0, 
        backgroundSize: 'cover' 
      }}
    >
      <SlideOverflow>
        {props=><Hero {...props} />}
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
