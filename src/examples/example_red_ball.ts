import './example_red_ball.scss';
import { wrapAsExample } from '../components/wrapAsExample';

export const example_red_ball = () => {
	let html = '';
	html += `
		<div class="ball">the ball</div>	
	`;
	return wrapAsExample('example_red_ball', html);
}