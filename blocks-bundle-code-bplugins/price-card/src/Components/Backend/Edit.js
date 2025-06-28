import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import PriceCard from "../Common/PriceCard";


const Edit = (props) => {
  const { attributes, setAttributes, clientId, } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes  }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

          <PriceCard attributes={attributes} setAttributes={setAttributes}/>
  
      </div>
    </>
  );
};

export default Edit;
