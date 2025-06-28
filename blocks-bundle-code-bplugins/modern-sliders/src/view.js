import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ModernSliders from './Components/Common/ModernSliders';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-modern-sliders');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<ModernSliders attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});