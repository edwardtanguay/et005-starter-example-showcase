import './example_test.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const example_test = () => {
	let html = '';
	html += `
		<div class="ball">example</div>	
	`;
	return wrapAsExample('example_test', html, description);
}