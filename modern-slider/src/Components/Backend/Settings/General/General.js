import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl, SelectControl ,__experimentalSpacer as Spacer, AlignmentMatrixControl, ToggleControl } from '@wordpress/components';
import ItemsPanel from './../../../../../../bpl-tools/Components/ItemsPanel/ItemsPanel';
import { useState } from 'react';
import { Device, IconLibrary } from '../../../../../../bpl-tools/Components';
// import { tagOptions } from '../../../../utils/options';
import { pxUnit, remUnit, vhUnit } from '../../../../../../bpl-tools/utils/options';
import Items from '../Panel/Items';



const General = ({ attributes, setAttributes }) => {
  // tagName
  const { sliderHeight, descriptionRespon = {}, nextArrow, prevArrow,alignmentControl,autoplay } = attributes;
  const [device, setDevice] = useState("desktop");
  const currentGap = descriptionRespon[device];

console.log(autoplay);



  return (
    <>

      <PanelBody className='bPlPanelBody' title={__('Slides', 'b-blocks')} initialOpen={false}>

        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="items"
          newItem={{
            title: "New Slide..",
            description: " Description here ..",
            image: "https://cdn.pixabay.com/photo/2024/02/28/15/14/ai-generated-8602228_1280.jpg",
            buttonName: "",
            buttonUrl: "https://www.facebook.com/",
            buttonNewTab: false
          }}
          ItemSettings={Items}
          itemLabel="Slide"
          design="sortable"
        />

      </PanelBody>



      {/* <PanelBody className='bPlPanelBody' title={__('Title', 'b-blocks')} initialOpen={false}>
        <div className='tag' style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center", gap: "10px"
        }}>
          <div>Tag</div>
          <div>
            <ToolbarGroup>
              <DropdownMenu
                icon={tagName === "p" ? "editor-paragraph" : "heading"}
                controls={tagOptions.map((tag) => ({
                  title: tag.label,
                  icon: tag.value === "p" ? "editor-paragraph" : "heading",
                  onClick: () => { setAttributes({ tagName: tag.value }) },
                  isActive: tagName === tag.value, // Highlight active tag
                }))}
              />
            </ToolbarGroup>
          </div>
        </div>
      </PanelBody> */}

      <PanelBody className='bPlPanelBody' title={__('Layout Settings', 'b-blocks')} initialOpen={false}>

        <div className='' style={{ display: "flex", alignItems: "center", gap: "140px" }}>
          <h2>Gap:</h2>
          <Device
            device={device}
            onChange={(selectedDevice) => setDevice(selectedDevice)}
          />

        </div>
        <div className='' style={{ display: "flex", alignItems: "center", gap: "5px", }}>
          <span>Left/Right InnerGap</span>
          <UnitControl style={{ width: "111px" }}
            value={currentGap}
            units={[remUnit(), pxUnit(), vhUnit()]}
            // units={units}
            onChange={(newGap) => {
              setAttributes({
                descriptionRespon: {
                  ...descriptionRespon,
                  [device]: newGap, // Update only the selected device
                },
              });
            }}
          />
        </div>
        <Spacer />
        <IconLibrary
          label="Select Previous Arrow Icon"
          value={prevArrow}
          onChange={(icon) => setAttributes({ prevArrow: icon })}
        />
        <Spacer />
        <IconLibrary
          label="Select Next Arrow Icon"
          value={nextArrow}
          onChange={(icon) => setAttributes({ nextArrow: icon })}
        />
        <Spacer />

        <div className='' style={{ display: "flex", alignItems: "center", gap: "5px", }}>
          <h2 style={{}}>Slide Direction</h2>
          <SelectControl style={{ width: "137px" }}
            // value={user}
            // onChange={(user) => { setUser(user) }}
            options={[
              { value: 'defult', label: 'Defult' },
              { value: 'verticly', label: 'Verticly' },
            ]}
          />

        </div>
        <div className='' style={{ display: "flex", alignItems: "center", gap: "7.6rem" }}>
          <h2>Height:</h2>
          <Device
            device={descriptionRespon}
            setDevice={descriptionRespon}
            onChange={(selectedDevice) => {
              setAttributes({ selectedDevice });
            }}
          />
        </div>
        <Spacer />

        <div className='' style={{ display: "flex", alignItems: "center", gap: "75px", }}>
          <span>Slider Height</span>
          <UnitControl style={{ width: "77px" }}
            value={sliderHeight}
            units={[remUnit(), pxUnit(), vhUnit()]}
            onChange={(newGap) => { setAttributes({ sliderHeight: newGap }) }}
          />
        </div>

        <Spacer />
        <div className='' style={{ display: "flex", alignItems: "center", gap: "75px", }}>
          <span> Position:</span> 

          <AlignmentMatrixControl 
            value={ alignmentControl }
            onChange={(newAlignment) => setAttributes({ alignmentControl: newAlignment })}
        />
          
        </div>
      </PanelBody>


      <PanelBody className='bPlPanelBody' title={__('Slider Option', 'b-blocks')} initialOpen={false}>
      <ToggleControl
            label="Enable Autoplay"
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Indicator', 'b-blocks')} initialOpen={false}>

      </PanelBody>

    </>
  );
};

export default General;
