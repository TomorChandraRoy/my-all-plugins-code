
import { __ } from "@wordpress/i18n";
import {
  PanelBody, SelectControl, __experimentalSpacer as Spacer,
  TextControl,__experimentalBorderControl as BorderControl,
} from "@wordpress/components";
import { BoxControl, ColorControl, Typography ,ColorsControl,} from "../../../../../../bpl-tools/Components";
import { resetValues } from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {


  const { color, radiusValues, marginValues, typography, headeingColor, headeingMarginValues, animationDuration, animationDelay, selectedAnimation, decColor, decMarginValues, decTypography, decAnimation, decAnimationDelay, decAnimationDuration, colors, buttonHoverColor, buttonTypography, buttonAnimation, buttonAnimationDelay, buttonAnimationDuration, buttonPaddingValues, buttonBorder, buttonRadiusValues,} = attributes;


  //title
  const handleSelectChange = (newAnimation) => {
    setAttributes({ selectedAnimation: newAnimation });
  };
  const handleDelayChange = (newDelay) => {
    setAttributes({ animationDelay: parseFloat(newDelay) });
  };

  const handleDurationChange = (newDuration) => {
    setAttributes({ animationDuration: parseFloat(newDuration) });
  };

  // dec
  const handledecChange = (newAnimation) => {
    setAttributes({ decAnimation: newAnimation });
  };
  const handleDecDelayChange = (newDelay) => {
    setAttributes({ decAnimationDelay: parseFloat(newDelay) });
  };

  const handleDecDurationChange = (newDuration) => {
    setAttributes({ decAnimationDuration: parseFloat(newDuration) });
  };

  // buttn
  const handleButtonChange = (newAnimation) => {
    setAttributes({ buttonAnimation: newAnimation });
  };
  const handleButtonDelayChange = (newDelay) => {
    setAttributes({ buttonAnimationDelay: parseFloat(newDelay) });
  };

  const handleButtonDurationChange = (newDuration) => {
    setAttributes({ buttonAnimationDuration: parseFloat(newDuration) });
  };

  return (
    <>
      <PanelBody

        className="bPlPanelBody"
        title={__("Slider", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label="Overly Color"
          defaultColor="#4429274f"
          value={color}
          onChange={(Cl) => {
            setAttributes({ color: Cl });
          }}
        />
        <Spacer />
        {/* BoxControl Padding/Margin korte parbo*/}
        <BoxControl
          label="Margin"
          values={marginValues}
          resetValues={resetValues}
          onChange={(newValues) => setAttributes({ marginValues: newValues })}
        />

        <Spacer />
        {/* BoxControl Padding/Margin korte parbo*/}
        <BoxControl
          label="Radius"
          values={radiusValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ radiusValues: newValues })}
        />
      </PanelBody>

      <PanelBody

        className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}
      >
        <Typography label={__('Typography:', 'b-blocks')} value={typography} onChange={val => setAttributes({ typography: val })} />

        <ColorControl
          label="Color"
          defaultColor="#ffffff"
          value={headeingColor}
          onChange={(Clo) => {
            setAttributes({ headeingColor: Clo });
          }}
        />
        <Spacer />

        <BoxControl
          label="Margin"
          values={headeingMarginValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ headeingMarginValues: newValues })}
        />
        <Spacer />
        <SelectControl
          label="Select Animation"
          value={selectedAnimation}
          options={[
            { label: 'Side In Left', value: 'side-in-left' },
            { label: 'Side In Right', value: 'side-in-right' },
            { label: 'Side In Up', value: 'side-in-up' },
            { label: 'Side In Down', value: 'side-in-down' },
            { label: 'Fade In Left', value: 'fade-in-left' },
            { label: 'Fade In Right', value: 'fade-in-right' },
            { label: 'Fade In Up', value: 'fade-in-up' },
            { label: 'Fade In Down', value: 'fade-in-down' },
            { label: 'Zoom In', value: 'zoom-in' },
            { label: 'Fade In', value: 'fade-in' }
          ]}
          onChange={handleSelectChange}
        />
        <Spacer />
        <TextControl
          label="Animation Delay (seconds)"
          type="number"
          value={animationDelay}
          onChange={handleDelayChange}
          min="0"
        />
        <Spacer />
        <TextControl
          label="Animation Duration (seconds)"
          type="number"
          value={animationDuration}
          onChange={handleDurationChange}
          min="0"
        />
      </PanelBody>

      <PanelBody

        className="bPlPanelBody"
        title={__("Description", "b-blocks")}
        initialOpen={false}
      >
        <Typography label={__('Typography:', 'b-blocks')} value={decTypography} onChange={val => setAttributes({ decTypography: val })} />
        <Spacer />
        <ColorControl
          label="Color"
          defaultColor="#ffffff"
          value={decColor}
          onChange={(Clo) => {
            setAttributes({ decColor: Clo });
          }}
        />
        <Spacer />

        <BoxControl
          label="Margin"
          values={decMarginValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ decMarginValues: newValues })}
        />

        <Spacer />
        <SelectControl
          label="Select Animation"
          value={decAnimation}
          options={[
            { label: 'Side In Left', value: 'side-in-left' },
            { label: 'Side In Right', value: 'side-in-right' },
            { label: 'Side In Up', value: 'side-in-up' },
            { label: 'Side In Down', value: 'side-in-down' },
            { label: 'Fade In Left', value: 'fade-in-left' },
            { label: 'Fade In Right', value: 'fade-in-right' },
            { label: 'Fade In Up', value: 'fade-in-up' },
            { label: 'Fade In Down', value: 'fade-in-down' },
            { label: 'Zoom In', value: 'zoom-in' },
            { label: 'Fade In', value: 'fade-in' }
          ]}
          onChange={handledecChange}
        />
        <Spacer />
        <TextControl
          label="Animation Delay (seconds)"
          type="number"
          value={decAnimationDelay}
          onChange={handleDecDelayChange}
          min="0"
        />
        <Spacer />
        <TextControl
          label="Animation Duration (seconds)"
          type="number"
          value={decAnimationDuration}
          onChange={handleDecDurationChange}
          min="0"
        />
      </PanelBody>

      <PanelBody

        className="bPlPanelBody"
        title={__("Button", "b-blocks")}
        initialOpen={false}
      >
        <Typography label={__('Typography:', 'b-blocks')} value={buttonTypography} onChange={val => setAttributes({ buttonTypography: val })} />
        <Spacer />

        <ColorsControl value={colors} onChange={val => setAttributes({ colors: val })} defaults={{ color: '#FAFAFA', bg: '#610A0A00' }} />

        <Spacer />

        <ColorsControl label="Hover Colors"
          value={buttonHoverColor} onChange={val => setAttributes({ buttonHoverColor: val })} defaults={{ color: '##000000', bg: '#ffffff' }}
        />

        <Spacer />
        <BorderControl
          label="Border"
          value={buttonBorder}
          resetValues={resetValues}
          onChange={(newValues) => setAttributes({ buttonBorder: newValues })}
        />

        <Spacer />
        <BoxControl
          label="Radius"
          values={buttonRadiusValues}
          resetValues={resetValues}
          onChange={(newValues) => setAttributes({ buttonRadiusValues: newValues })}
        />
        <Spacer />

        <BoxControl
          label="Padding"
          values={buttonPaddingValues}
          resetValues={resetValues}
          onChange={(newValues) => setAttributes({ buttonPaddingValues: newValues })}
        />
        <Spacer />

        <SelectControl
          label="Select Animation"
          value={buttonAnimation}
          options={[
            { label: 'Side In Left', value: 'side-in-left' },
            { label: 'Side In Right', value: 'side-in-right' },
            { label: 'Side In Up', value: 'side-in-up' },
            { label: 'Side In Down', value: 'side-in-down' },
            { label: 'Fade In Left', value: 'fade-in-left' },
            { label: 'Fade In Right', value: 'fade-in-right' },
            { label: 'Fade In Up', value: 'fade-in-up' },
            { label: 'Fade In Down', value: 'fade-in-down' },
            { label: 'Zoom In', value: 'zoom-in' },
            { label: 'Fade In', value: 'fade-in' }
          ]}
          onChange={handleButtonChange}
        />

        <Spacer />

        <TextControl
          label="Animation Delay (seconds)"
          type="number"
          value={buttonAnimationDelay}
          onChange={handleButtonDelayChange}
          min="0"
        />

        <Spacer />

        <TextControl
          label="Animation Duration (seconds)"
          type="number"
          value={buttonAnimationDuration}
          onChange={handleButtonDurationChange}
          min="0"
        />
      </PanelBody>
    </>
  );
};

export default Style;
