import './example_blue_ball.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  'This shows how to use <code>border-radius: 50%</code> to create a round shape.';

export const example_blue_ball = () => {
	let html = '';
	html += `
		<div class="ball">the ball</div>	
	`;
	return wrapAsExample('example_blue_ball', html, description);
}