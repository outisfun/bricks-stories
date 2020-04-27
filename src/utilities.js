import values from 'lodash/values';
import keys from 'lodash/keys';
import cloneDeep from 'lodash/cloneDeep';

export const collectIdsAndDocs = doc => {
  let _u = doc ? (doc.data() ? doc.data() : {}) : {};
  _u.id = doc ? doc.id : '';
  return { ..._u };
}

export const FBtoBRICKS = (story) => {
  let storyValues = values(story);
  let storyKeys = keys(story);

  storyValues.map((val, index) => {
    val.id = storyKeys[index];
    if (val.children && typeof val.children === 'object') {
      let children = FBtoBRICKS(cloneDeep(val.children));
      val.children = children;
    };
  });

  return storyValues;
}