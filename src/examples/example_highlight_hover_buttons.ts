import './example_highlight_hover_buttons.scss';
import { wrapAsExample } from '../components/wrapAsExample';
import _icons from '../data/icons.json';
import * as tools from '../../share/toolsFrontend';

const description = '';

let icons = _icons;
tools.shuffle(icons);
const newLength = tools.getRandomNumberBetween(3, icons.length);
icons = _icons.slice(0, newLength);



export const example_highlight_hover_buttons = () => {
	let html = '';
	html += `<section class="buttons-container">`;

	for (const icon of icons) {
		html += `<button><i class="fa ${icon.fontAwesomeClass}" aria-hidden="true"></i> ${icon.name}</button>`;
	}

	html += `</section>`;
	return wrapAsExample('example_highlight_hover_buttons', html, description);
}