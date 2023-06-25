import './example_display_api_nouns.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description =  '';

export const example_display_api_nouns = () => {
	let html = '';
	html += `
		<div class="ball">example</div>	
	`;
	return wrapAsExample('example_display_api_nouns', html, description);
}