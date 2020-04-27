import React from 'react';
import { hydrate } from 'react-dom';
import firebase from './firebase'; 
import Story from './Story';
import { FBtoBRICKS } from './utilities';

// replace this!!!
const storyId = 's9BYSSt7EmIfHCBjrPnn';

document.addEventListener("DOMContentLoaded", (event) => {

  firebase.firestore().collection('stories').doc(storyId)
    .get()
    .then(doc => {
      let storyObj = doc.data();
      let story = FBtoBRICKS(storyObj.storyContent);

      hydrate(
        <React.StrictMode>
          <Story story={story} />
        </React.StrictMode>,
        document.getElementById("story"),
        () => {
          console.log('hydrated', document.getElementById("story").innerHTML);
        }
      );
    })
    .catch(function(error) {
      console.log("Error getting story: ", error);
    });
});

