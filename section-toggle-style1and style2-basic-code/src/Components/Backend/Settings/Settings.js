// import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController, updateData } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { BplBlockPreview } from '../../../../../bpl-tools/Components';
import themeData from "./theme.json";

const Settings = ({ attributes, setAttributes,clientId, device }) => {
	const{themeStyle}=attributes;
	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-bpstb-section-toggle-basic' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}
			>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} device={device} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} device={device}/>}
					</>
				}
			</TabPanel>

		</InspectorControls>

		<BlockControls>
			{/* BplBlockPreview  */}
			<BplBlockPreview blocks={themeData} clientId={clientId} value={themeStyle?.theme} minHeight="150px" minWidth="400px"
				onChange={(value) => { setAttributes({ themeStyle: updateData(themeStyle, value, "theme") }) }}
			/>
		</BlockControls>
	</>;
};
export default Settings;