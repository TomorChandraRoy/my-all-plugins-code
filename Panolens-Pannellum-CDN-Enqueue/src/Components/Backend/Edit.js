import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import PanoPannellumCDN from "../Common/PanoPannellumCDN";




const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

           <div className="EditCss">Just Edit a Css Load ata frontEnd a Hobe Na </div>
          <PanoPannellumCDN attributes={attributes} setAttributes={setAttributes}/>
  
      </div>
    </>
  );
};
export default Edit;
