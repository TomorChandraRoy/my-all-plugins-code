import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalSpacer as Spacer, SelectControl} from '@wordpress/components';
import { themeSwitch } from '../../../../utils/functions';
import { themeOptions } from '../../../../utils/options';


const General = ({ attributes, setAttributes, device = "desktop" }) => {
  const {themeStyle} = attributes;

  return (
    <>
    {/* theme SelectControl */}
    <PanelBody className='bPlPanelBody' title={__('Choose Style', 'section-collection')} initialOpen={false}>
        <SelectControl 
        className="help" 
        value={themeStyle?.theme}
          onChange={(val) => setAttributes(themeSwitch(val, attributes, device))}
          options={themeOptions}
          help={(<>
            <span className="span">
              {__("Warning : ")}
            </span>
            <span className="text">{__("If you change and save settings for one style, and then switch to another style and save, the changes made to the first style will be lost.")}</span>
          </>
          )}
        />
        <Spacer/>
    </PanelBody>
    </>



  )
}

export default General