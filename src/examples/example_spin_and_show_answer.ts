import './example_spin_and_show_answer.scss';
import { wrapAsExample } from '../components/wrapAsExample';
import * as qarr from '../../share/qtools/qarr';

const description = '';

const fruits = ['apple', 'banana', 'orange'];
qarr.shuffle(fruits);


export const example_spin_and_show_answer = () => {
	let html = '';
	html += `<div class="boxes">`;

	for (const fruit of fruits) {
		html += `<div class="box">${fruit}</div>`;
	}

	html += `</div>`;

	return wrapAsExample('example_spin_and_show_answer', html, description);
}