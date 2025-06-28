import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalSpacer as Spacer,

  RangeControl,

} from "@wordpress/components";

import { ColorControl, ShadowControl, SolidBackground } from "../../../../../../bpl-tools/Components";
import { AlignmentToolbar } from "@wordpress/block-editor";



const Style = ({ attributes, setAttributes, }) => {

  const { headerStyle, headerDecStyle, planStyle, shadow } = attributes;


  return (
    <>

      <PanelBody

        className="bPlPanelBody"
        title={__("Header Style", "b-blocks")}
        initialOpen={false}
      >

        <ColorControl
          label="Title Color"
          defaultColor="#000000"
          value={headerStyle?.titleColor}
          onChange={(Color) => {
            setAttributes({
              headerStyle: { ...headerStyle, titleColor: Color },
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={headerStyle?.fontSize}
          label="Font Size"
          max={100}
          min={1}
          onChange={(v) => {
            setAttributes({ headerStyle: { ...headerStyle, fontSize: v } });
          }}
        />

        <Spacer marginBottom="20px" />

        <h3>Header Title  align Content</h3>
        <AlignmentToolbar value={headerStyle.titleAlign} onChange={val => { setAttributes({ headerStyle: { ...headerStyle, titleAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

        <Spacer marginBottom="20px" />

        <BoxControl label="Margin" values={headerStyle?.titleMargin} onChange={(margin) => {
          setAttributes({
            headerStyle: { ...headerStyle, titleMargin: margin }
          })
        }} />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Header Dec Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label="Title Color"
          defaultColor="#000000"
          value={headerDecStyle?.decColor}
          onChange={(Color) => {
            setAttributes({
              headerDecStyle: { ...headerDecStyle, decColor: Color },
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={headerDecStyle?.decSize}
          label="Font Size"
          max={100}
          min={1}
          onChange={(v) => {
            setAttributes({ headerDecStyle: { ...headerDecStyle, decSize: v } });
          }}
        />
        <Spacer marginBottom="20px" />
        <h3>Header Dec align Content</h3>
        <AlignmentToolbar value={headerDecStyle.decAlign} onChange={val => { setAttributes({ headerDecStyle: { ...headerDecStyle, decAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
          { title: __(' Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
          { title: __(' Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
        ]} />

        <Spacer marginBottom="20px" />

        <BoxControl label="Margin" values={headerDecStyle?.decMargin} onChange={(margin) => {
          setAttributes({
            headerDecStyle: { ...headerDecStyle, decMargin: margin }
          })
        }} />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Style", "b-blocks")}
        initialOpen={false}
      >
        <SolidBackground
          label="Plan Background Color"
          value={planStyle?.planBackgroundColor}
          onChange={(value) => {
            setAttributes({ planStyle: { ...planStyle, planBackgroundColor: value } })
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={planStyle?.planBackgroundColorOpacity || 1}
          label="Background Opacity"
          step={0.1}
          max={1}
          min={0.1}
          onChange={(v) => {
            setAttributes({ planStyle: { ...planStyle, planBackgroundColorOpacity: v } });
          }}
        />
        <Spacer marginBottom="20px" />

        <BoxControl label="Plan Padding" values={planStyle?.planPadding} onChange={(padding) => {
          setAttributes({
            planStyle: { ...planStyle, planPadding: padding }
          })
        }} />

        <Spacer marginBottom="20px" />

        <BoxControl label="Plan Margin" values={planStyle?.planMargin} onChange={(margin) => {
          setAttributes({
            planStyle: { ...planStyle, planMargin: margin }
          })
        }} />

        <Spacer marginBottom="20px" />

        {/*BorderControl  */}
        <BoxControl label="Plan Radius" values={planStyle?.planRadius}
          onChange={(newValues) => {
            setAttributes({ planStyle: { ...planStyle, planRadius: newValues } });
          }}
        />

        <Spacer marginBottom="20px" />

        <h3>Plan Align Content</h3>
        <AlignmentToolbar label="Plan Content" value={planStyle.planAlign} onChange={val => { setAttributes({ planStyle: { ...planStyle, planAlign: val }, }) }} describedBy={__('Block Name Alignment')} alignmentControls={[
          { title: __(' Plan in left', 'b-blocks'), align: 'left', icon: 'align-left' },
          { title: __(' Plan in center', 'b-blocks'), align: 'center', icon: 'align-center' },
          { title: __(' Plan in right', 'b-blocks'), align: 'right', icon: 'align-right' }
        ]} />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Title  Style", "b-blocks")}
        initialOpen={false}
      >
        <Spacer marginBottom="20px" />

        <ColorControl
          label="Plan Title Color"
          defaultColor="#000000"
          value={planStyle?.planTitleStyle?.planTitleColor}
          onChange={(Color) => {
            {
              setAttributes({
                planStyle: {
                  ...planStyle,
                  planTitleStyle: {
                    ...planStyle.planTitleStyle,
                    planTitleColor: Color
                  }
                }
              });
            }
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={planStyle?.planTitleStyle?.planTitleSize || 22}
          label="Plan Title Size"
          max={100}
          min={1}
          onChange={(v) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                planTitleStyle: {
                  ...planStyle.planTitleStyle,
                  planTitleSize: v
                }
              }
            })
          }}
        />

        <Spacer marginBottom="20px" />

        <BoxControl label="Plan Title Margin" values={planStyle?.planTitleStyle?.planTitleMargin}
          onChange={(margin) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                planTitleStyle: {
                  ...planStyle.planTitleStyle,
                  planTitleMargin: margin
                }
              }
            });
          }}
        />
        
        <Spacer marginBottom="20px" />

        <h3>Plan Title Content</h3>
        <AlignmentToolbar value={planStyle?.planTitleStyle?.planTitleAlign}
          onChange={(val) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                planTitleStyle: {
                  ...planStyle.planTitleStyle,
                  planTitleAlign: val,
                }
              }
            });
          }} describedBy={__('Block Name Alignment')} alignmentControls={[
            { title: __(' Price in left', 'textdomain'), align: 'left', icon: 'align-left' },
            { title: __(' Price in center', 'textdomain'), align: 'center', icon: 'align-center' },
            { title: __(' Price in right', 'textdomain'), align: 'right', icon: 'align-right' }
          ]} />
      </PanelBody>



      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Price Style", "b-blocks")}
        initialOpen={false}
      >

        <Spacer marginBottom="20px" />

        <ColorControl
          label="Plan Title Color"
          defaultColor="#000000"
          value={planStyle?.planPriceStyle?.priceColor}
          onChange={(Color) => {
            {
              setAttributes({
                planStyle: {
                  ...planStyle,
                  planPriceStyle: {
                    ...planStyle.planPriceStyle,
                    priceColor: Color
                  }
                }
              });
            }
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={planStyle?.planPriceStyle?.priceSize || 22}
          label="Plan Title Size"
          max={100}
          min={1}
          onChange={(v) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                planPriceStyle: {
                  ...planStyle.planPriceStyle,
                  priceSize: v
                }
              }
            })
          }}
        />

        <Spacer marginBottom="20px" />

        <BoxControl label="Plan Title Margin" values={planStyle?.planPriceStyle?.priceMargin}
          onChange={(margin) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                planPriceStyle: {
                  ...planStyle.planPriceStyle,
                  priceMargin: margin
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <h3>Plan Price Content</h3>
        <AlignmentToolbar value={planStyle?.planPriceStyle?.priceAlign}
          onChange={(val) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                planPriceStyle: {
                  ...planStyle.planPriceStyle,
                  priceAlign: val,
                }
              }
            });
          }} describedBy={__('Block Name Alignment')} alignmentControls={[
            { title: __(' Price in left', 'textdomain'), align: 'left', icon: 'align-left' },
            { title: __(' Price in center', 'textdomain'), align: 'center', icon: 'align-center' },
            { title: __(' Price in right', 'textdomain'), align: 'right', icon: 'align-right' }
          ]} />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Features Style", "b-blocks")}
        initialOpen={false}
      >
        <Spacer marginBottom="20px" />

        <BoxControl label="Plan Feature Margin" values={planStyle?.FeaturesStyle?.featureliMagin}
          onChange={(margin) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                FeaturesStyle: {
                  ...planStyle.FeaturesStyle,
                  featureliMagin: margin
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <h3>Plan Feature Content</h3>
        <AlignmentToolbar value={planStyle?.FeaturesStyle?.featureAlign}
          onChange={(val) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                FeaturesStyle: {
                  ...planStyle.FeaturesStyle,
                  featureAlign: val,
                }
              }
            });
          }} describedBy={__('Block Name Alignment')} alignmentControls={[
            { title: __(' Feature in left', 'textdomain'), align: 'left', icon: 'align-left' },
            { title: __(' Feature in center', 'textdomain'), align: 'center', icon: 'align-center' },
            { title: __(' Feature in right', 'textdomain'), align: 'right', icon: 'align-right' }
          ]} />


      </PanelBody>


      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Button Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label="Button Text Color"
          defaultColor="#fff"
          value={planStyle?.buttonStyle?.buttonColor}
          onChange={(Color) => {
            setAttributes({
              planStyle: { ...planStyle, buttonStyle: { ...planStyle.buttonStyle, buttonColor: Color } }
            });
          }}
        />

        <SolidBackground
          label="Button Background Color"
          value={planStyle?.buttonStyle?.buttonBackgroundColor}
          onChange={(value) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                buttonStyle: {
                  ...planStyle.buttonStyle,
                  buttonBackgroundColor: value
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={planStyle?.buttonStyle?.buttonBackgroundColorOpacity || 1}
          label="Background Opacity"
          step={0.1}
          max={1}
          min={0.1}
          onChange={(v) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                buttonStyle: {
                  ...planStyle.buttonStyle,
                  buttonBackgroundColorOpacity: v
                }
              }
            });
          }}
        />
        <Spacer marginBottom="20px" />

        <BoxControl
          label="Button Padding"
          values={planStyle?.buttonStyle?.buttonPadding}
          onChange={(padding) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                buttonStyle: {
                  ...planStyle.buttonStyle,
                  buttonPadding: padding
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <BoxControl label="Button Margin"
          values={planStyle?.buttonStyle?.buttonMargin}
          onChange={(margin) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                buttonStyle: {
                  ...planStyle.buttonStyle,
                  buttonMargin: margin
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          // help="Please select how transparent you would like this."
          value={planStyle?.buttonStyle?.buttonFontSize || 16}
          label="Button Font Size"
          max={100}
          min={1}
          onChange={(v) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                buttonStyle: {
                  ...planStyle.buttonStyle,
                  buttonFontSize: v
                }
              }
            })
          }}
        />

        <Spacer marginBottom="20px" />

        <BoxControl label="Button Radius"
          values={planStyle?.buttonStyle?.buttonBorderRadius}
          onChange={(radius) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                buttonStyle: {
                  ...planStyle.buttonStyle,
                  buttonBorderRadius: radius
                }
              }
            });
          }}
        />

      </PanelBody>


      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Hover Shadow Style", "b-blocks")}
        initialOpen={false}
      >
        <ShadowControl
          label="Hover Effect / Shadow"
          value={shadow}
          onChange={(newShadow) => setAttributes({ shadow: newShadow })}
        />

      </PanelBody>


      <PanelBody
        className="bPlPanelBody"
        title={__("Plan Popular  Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl
          label=" Popular Border  Color"
          defaultColor="#6ab04c"
          value={planStyle?.popularStyle?.borderColor}
          onChange={(Color) => {
            setAttributes({
              planStyle: { ...planStyle, popularStyle: { ...planStyle.popularStyle, borderColor: Color } },
            });
          }}
        />

        <ColorControl
          label=" Popular Button text Color"
          defaultColor="rgba(255, 255, 255, 1)"
          value={planStyle?.popularStyle?.badgeColor}
          onChange={(Color) => {
            setAttributes({
              planStyle: { ...planStyle, popularStyle: { ...planStyle.popularStyle, badgeColor: Color } },
            });
          }}
        />

        <SolidBackground
          label="Button Background Color"
          value={planStyle?.popularStyle?.badgeBackgroundColor}
          onChange={(value) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                popularStyle: {
                  ...planStyle.popularStyle,
                  badgeBackgroundColor: value
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <BoxControl label="Popular Button Padding"
          values={planStyle?.popularStyle?.badgePadding}
          onChange={(padding) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                popularStyle: {
                  ...planStyle.popularStyle,
                  badgePadding: padding
                }
              }
            });
          }}
        />

        <Spacer marginBottom="20px" />

        <RangeControl
          value={planStyle?.popularStyle?.badgeFontSize || 18}
          label="Popular Button Font Size"
          max={100}
          min={1}
          onChange={(v) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                popularStyle: {
                  ...planStyle.popularStyle,
                  badgeFontSize: v
                }
              }
            })
          }}
        />

        <Spacer marginBottom="20px" />

        <BoxControl label="Popular Button Radius"
          values={planStyle?.popularStyle?.badgeRadius}
          onChange={(radius) => {
            setAttributes({
              planStyle: {
                ...planStyle,
                popularStyle: {
                  ...planStyle.popularStyle,
                  badgeRadius: radius
                }
              }
            });
          }}
        />


      </PanelBody>
    </>
  );
};

export default Style;
