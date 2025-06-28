import { __ } from "@wordpress/i18n";
import {
  PanelBody, SelectControl, __experimentalSpacer as Spacer,
  TextControl, __experimentalBorderControl as BorderControl, __experimentalUnitControl as UnitControl,
  RangeControl
} from "@wordpress/components";
import { BoxControl, ColorControl, ColorsControl, Typography } from "../../../../../../bpl-tools/Components";
import { resetValues } from "../../../../utils/options";



const Style = ({ attributes, setAttributes }) => {

  const { color, marginValues, radiusValues, typography, headeingColor, headeingMarginValues, selectedAnimation, animationDelay, animationDuration, decColor, decMarginValues, decTypography, decAnimation, decAnimationDelay, decAnimationDuration, colors, buttonHoverColor, buttonTypography, buttonAnimation, buttonAnimationDelay, buttonAnimationDuration, buttonPaddingValues, buttonBorder, buttonRadiusValues, arrayStyle, arrayHeight, arrayWidth, arrayBg, paginationType, paginationActiveColor, paginationColor, paginationWidth, paginationHeight, paginationActiveBorder, squareWidth, squareHeight,paginationRadiusValues } = attributes;


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
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
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

      <PanelBody

        className="bPlPanelBody"
        title={__("Array", "b-blocks")}
        initialOpen={false}
      >

        <RangeControl
          label={__("Icon Size", "text-domain")}
          value={arrayStyle?.arraySize}
          onChange={(newSize) => setAttributes({
            arrayStyle: { ...arrayStyle, arraySize: newSize }
          })}
          min={10}
          max={100}
        />
        <Spacer />
        <ColorControl
          label="Color"
          defaultColor="#0668f1"
          value={arrayStyle?.arrayColor}
          onChange={(newColor) => setAttributes({
            arrayStyle: { ...arrayStyle, arrayColor: newColor }
          })}
        />
        <Spacer />
        <UnitControl
          label="Width"
          value={arrayWidth}
          onChange={(newWidth) => setAttributes({ arrayWidth: newWidth })}
        />
        <Spacer />
        <UnitControl
          label="Height"
          value={arrayHeight}
          onChange={(newHeight) => setAttributes({ arrayHeight: newHeight })}
        />
        <Spacer />

        <Spacer />

        <ColorsControl label="Background" value={arrayBg} onChange={val => setAttributes({ arrayBg: val })} defaults={{ color: '#0568f200', bg: '#9D131300' }} />

        <Spacer />

        <BoxControl
          label="Radius"
          values={arrayStyle?.arrayRadius}
          resetValues={resetValues}
          // sides={["horizontal", "vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({
            arrayStyle: { ...arrayStyle, arrayRadius: newValues }
          })}
        />

      </PanelBody>

      <PanelBody

        className="bPlPanelBody"
        title={__("Indicators", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          label="Select Pagination"
          value={paginationType}
          options={[
            { label: "Default", value: "bullets" },
            { label: "Square", value: "square" }
          ]}
          onChange={(newType) => setAttributes({ paginationType: newType })}
        />


        <Spacer />

        <ColorControl
          label=" Color"
          defaultColor="#ed0510"
          value={paginationColor}
          onChange={(Cl) => {
            setAttributes({ paginationColor: Cl });
          }}
        />

        <ColorControl
          label="Active Color"
          defaultColor="#0668f1"
          value={paginationActiveColor}
          onChange={(Cl) => {
            setAttributes({ paginationActiveColor: Cl });
          }}
        />

        <Spacer />

        <Spacer />
        <BorderControl
          label="Active Border"
          value={paginationActiveBorder}
          resetValues={resetValues}
          onChange={(newValues) => setAttributes({ paginationActiveBorder: newValues })}
        />
        <Spacer />
        {paginationType === "square" ?
          <>


            <UnitControl
              label="Width"
              value={squareWidth}
              onChange={(newWidth) => setAttributes({ squareWidth: newWidth })}
            />

            <Spacer />

            <UnitControl
              label="Height"
              value={squareHeight}
              onChange={(newHeight) => setAttributes({ squareHeight: newHeight })}
            />
          </>
          :
          <>
            <UnitControl
              label="Width"
              value={paginationWidth}
              onChange={(newWidth) => setAttributes({ paginationWidth: newWidth })}
            />

            <Spacer />

            <UnitControl
              label="Height"
              value={paginationHeight}
              onChange={(newHeight) => setAttributes({ paginationHeight: newHeight })}
            />
          </>
        }

        <Spacer />

        <BoxControl
          label="Radius"
          values={paginationRadiusValues}
          resetValues={resetValues}
          onChange={(newValues) => setAttributes({ paginationRadiusValues: newValues })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
