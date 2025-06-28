import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from '@wordpress/data';
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/Theme";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }}  />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <div className="bBlocksPricingTableSection">
         <Theme  {...{ attributes, setAttributes, device}} />
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
