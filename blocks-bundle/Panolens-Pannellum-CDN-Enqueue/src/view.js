import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import PanoPannellumCDN from './Components/Common/PanoPannellumCDN';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-pano-pannellum');  //aey name ta block.json file ar "name": "b-blocks/basic-plugins",  dite  hobe na hole a kaj korbe na 
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<PanoPannellumCDN attributes={attributes}/>

		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});