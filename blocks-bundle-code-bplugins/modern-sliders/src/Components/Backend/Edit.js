import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ModernSliders from "../Common/ModernSliders";
import { withSelect } from '@wordpress/data';

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device} = props;


  return (
    <>
      <Settings {...{ attributes, setAttributes,device }}  />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device}/>

        <div className="bBlocksModernSlides"> 
       
          <ModernSliders attributes={attributes} setAttributes={setAttributes}/>
        </div>
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
