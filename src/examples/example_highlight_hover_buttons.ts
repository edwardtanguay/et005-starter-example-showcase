import './example_highlight_hover_buttons.scss';
import { wrapAsExample } from '../components/wrapAsExample';
import icons from '../data/icons.json';
import * as tools from '../tools';

const description = '';

tools.shuffle(icons);

export const example_highlight_hover_buttons = () => {
	let html = '';
	html += `<section class="buttons-container">`;

	for (const icon of icons) {
		html += `<button><i class="fa ${icon.fontAwesomeClass}" aria-hidden="true"></i> ${icon.name}</button>`;
	}

	html += `</section>`;
	return wrapAsExample('example_highlight_hover_buttons', html, description);
}