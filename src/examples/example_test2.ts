import './example_test2.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const example_test2 = () => {
	let html = '';
	html += `
		<div class="ball">example</div>	
	`;
	return wrapAsExample('example_test2', html, description);
}