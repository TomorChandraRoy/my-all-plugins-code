import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import PackageEnqueue from './Components/Common/PackageEnqueue';
import SwiperDemo from './Components/Common/SwiperDemo';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-package-enqueue');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<PackageEnqueue attributes={attributes}/>
			<SwiperDemo/>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});