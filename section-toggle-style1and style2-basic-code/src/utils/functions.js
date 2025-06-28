import { produce } from "immer";

export const themeSwitch = (layout, attributes = {}) => produce(attributes, (draft) => {


  switch (layout) {

    // #style 1
    case 'style-1':
      draft["themeStyle"]["theme"] = "style-1";
      break;


     // #style 2
    case 'style-2':
      draft["themeStyle"]["theme"] = "style-2"
    break;

   
  }

});




export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};