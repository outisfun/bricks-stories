import React from 'react';
import ISFComponents from './framework/Components'; 
import Story from './Story';
import { collectIdsAndDocs, FBtoBRICKS } from './utilities';



const story = {
  layout0:
  {
    type: 'Simple',
    data: ISFComponents.Simple.defaultProps,
    children: {
      layout0_element1:
      {
        type: 'Text',
        data: { text: 'those important small changes' }
      },
      layout0_element2:
      {
        type: 'Quote',
        data: ISFComponents.Quote.defaultProps
      }
    }
  }
}

function App() {
  const _story = FBtoBRICKS(story);
  return (
    <Story story={_story} />
  );
}

export default App;
