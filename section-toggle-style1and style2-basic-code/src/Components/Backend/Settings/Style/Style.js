import { __ } from "@wordpress/i18n";
import { PanelBody, __experimentalSpacer as Spacer } from "@wordpress/components";
import {  ColorControl, } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";



const Style = ({ attributes, setAttributes }) => {
  const { colors } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Header styles", "section-collection")}
        initialOpen={false}
      >
      <Spacer/>
        <ColorControl
          label={__("Bg Color :", "section-collection")}
          defaultColor="#1255E6"
          value={colors?.bgcolor}
          onChange={(newcolor) => {
            const updatedStyle = updateData(colors, newcolor,"bgcolor");
            setAttributes({ colors: updatedStyle });
          }}
        />
        <Spacer/>
      </PanelBody>
    </>
  );
};

export default Style;
