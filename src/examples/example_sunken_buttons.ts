import './example_sunken_buttons.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description = '';

export const example_sunken_buttons = () => {
	let html = '';
	html += `
	<section class="buttons-container">
		<button>
			<img src="images/scissors.svg" alt="">
			Cut</button>
		<button>
			<img src="images/file.svg" alt="">
			Copy</button>
		<button>
			<img src="images/paste.svg" alt="">
			Paste</button>
	</section>
	`;
	return wrapAsExample('example_sunken_buttons', html, description);
}