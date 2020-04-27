import React from 'react';
import ISFComponents from './framework/Components';

const buildStory = story => {
  return (
    <>
      { story.map((layout, index) => {
        const Layout = ISFComponents[layout.type];
        const data = layout.data;
    
        return (
          <Layout {...data}>
            {layout.children.map((element, _index) => {
              const Element = ISFComponents[element.type];
                const _data = element.data;
                return <Element {..._data} />
              })}
          </Layout>
        )
      })}
    </>
  )
}

const Story = ({ story }) => {
  return (
    <div>
      {buildStory(story)}
    </div>
  )
};

export default Story;