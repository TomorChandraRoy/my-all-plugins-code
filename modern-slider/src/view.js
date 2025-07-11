import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ModernSlider from './Components/Common/ModernSlider';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-modern-slider'); 
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<ModernSlider attributes={attributes}/>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});