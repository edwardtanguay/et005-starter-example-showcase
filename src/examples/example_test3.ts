import './example_test3.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const example_test3 = () => {
	let html = '';
	html += `
		<div class="ball">example</div>	
	`;
	return wrapAsExample('example_test3', html, description);
}