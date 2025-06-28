import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl, __experimentalSpacer as Spacer, AlignmentMatrixControl, ToggleControl, __experimentalNumberControl as NumberControl, } from '@wordpress/components';
import Items from '../Sortable/items';
import { IconLibrary, ItemsPanel } from '../../../../../../bpl-tools/Components';
import { Device, } from '../../../../../../bpl-tools/Components';

import { pxUnit, remUnit, vhUnit } from '../../../../../../bpl-tools/utils/options';
import { updateData } from '../../../../../../bpl-tools/utils/functions';

const General = ({ attributes, setAttributes, device = "desktop" }) => {
  const { descriptionRespon, sliderHeightRespon, contentAlignment, sliderNavigation, sliderPagination, sliderMouseWheel, autoPlay,slidersimulateTouch ,nextArrow,prevArrow} = attributes;






  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Slide', 'b-blocks')} initialOpen={false}>

        <ItemsPanel {...{ attributes, setAttributes }}

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

      <PanelBody className='bPlPanelBody' title={__('Layout Settings', 'b-blocks')} initialOpen={false}>

        <div className='' style={{ display: "flex", alignItems: "center", gap: "140px" }}>
          <h2>Gap:</h2>
          <Device />
        </div>
        <div className='' style={{ display: "flex", alignItems: "center", gap: "3px", }}>
          <span>Left/Right InnerGap</span>
          <UnitControl style={{ width: "125px" }}
            value={descriptionRespon[device]}
            units={[remUnit(), pxUnit(), vhUnit()]}
            onChange={(v) => setAttributes({ descriptionRespon: updateData(descriptionRespon, v, device) })}
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

        <div  style={{ display: "flex", alignItems: "center", gap: "5px", }}>
          {/* <h2 style={{}}>Slide Direction</h2>
          <SelectControl style={{ width: "137px" }}
            value={navigation}
            onChange={(nav) => setAttributes({ navigation: updateData(navigation, nav) })}
            options={[
              { value: 'horizontal', label: 'Default' },
              { value: 'vertical', label: 'Vertical' },
            ]}
          /> */}
        </div>

        <Spacer />
        <div className='' style={{ display: "flex", alignItems: "center", gap: "7.6rem" }}>
          <h2>Height:</h2>
          <Device />
        </div>
        <Spacer />
        <div className='' style={{ display: "flex", alignItems: "center", gap: "19px", }}>
          <span>Slider Height</span>
          <UnitControl style={{ width: "150px" }}
            value={sliderHeightRespon[device]}
            units={[remUnit(), pxUnit(), vhUnit()]}
            onChange={(v) => setAttributes({ sliderHeightRespon: updateData(sliderHeightRespon, v, device) })}
          />
        </div>

        <Spacer />
        <div className='' style={{ display: "flex", alignItems: "center", gap: "75px", }}>
          <span> Position:</span>

          <AlignmentMatrixControl
            value={contentAlignment}
            onChange={(newAlignment) => setAttributes({ contentAlignment: updateData(contentAlignment, newAlignment) })}
          />

        </div>
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Slider Options', 'b-blocks')} initialOpen={false}>

        <ToggleControl
          label="Enable Autoplay"
          checked={autoPlay.status}
          onChange={() => setAttributes({ autoPlay:updateData(autoPlay, !autoPlay.status, "status") })}
        />
     <Spacer />
        {autoPlay.status && (
          <NumberControl
            className="auto"
            label={__("Autoplay delay", "b-blocks")}
            onChange={(value) => setAttributes({ autoPlay:updateData(autoPlay, value, "delay") })}
            value={autoPlay.delay}
          />
        )}
     <Spacer />

        <ToggleControl
          label="Show Arrow/Navigation"
          checked={sliderNavigation}
          onChange={(value) => setAttributes({ sliderNavigation: value })}
        />

      <Spacer />

        <ToggleControl
          label="Show Indicators/Pagination"
          checked={sliderPagination}
          onChange={(value) => setAttributes({ sliderPagination: value })}
        />
      
      <Spacer />

        <ToggleControl
          label="Slide On MouseWheel"
          checked={sliderMouseWheel}
          onChange={(value) => setAttributes({ sliderMouseWheel: value })}
        />
      <Spacer />

        <ToggleControl
          label="Slide on Mouse Drag"
           help="Only work frontEnd and BackEnd will not work"
          checked={slidersimulateTouch}
          onChange={(value) => setAttributes({ slidersimulateTouch: value })}
        />

      </PanelBody>
    </>

  )
}

export default General