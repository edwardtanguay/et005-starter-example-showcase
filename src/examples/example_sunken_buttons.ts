import './example_sunken_buttons.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description = '';

export const example_sunken_buttons = () => {
	let html = '';
	html += `
	<section class="buttons-container">
		<button><i class="fa fa-user" aria-hidden="true"></i> Profile</button>
		<button><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail</button>
		<button><i class="fa fa-video-camera" aria-hidden="true"></i>
 Videos</button>
	</section>
	`;
	return wrapAsExample('example_sunken_buttons', html, description);
}