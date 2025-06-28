import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import PackageEnqueue from "../Common/PackageEnqueue";
import SwiperDemo from "../Common/SwiperDemo";


const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;


  const id = `sscSlider-${clientId}`;

  const Slider = () => <SwiperDemo attributes={attributes} id={id} />;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">

          <PackageEnqueue attributes={attributes} setAttributes={setAttributes} />
          <div className="sscSlider">
              <Slider/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
