import './example_sunken_buttons.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description = '';

const icons = [
	{
		name: 'Profile',
		fontAwesomeClass: 'fa-user'
	},
	{
		name: 'Mail',
		fontAwesomeClass: 'fa-envelope-o'
	},
	{
		name: 'Videos',
		fontAwesomeClass: 'fa-video-camera'
	},
	{
		name: 'Travel',
		fontAwesomeClass: 'fa-car'
	},
	{
		name: 'Events',
		fontAwesomeClass: 'fa-calendar'
	},
	{
		name: 'Sports',
		fontAwesomeClass: 'fa-futbol-o'
	},
	{
		name: 'Restaurants',
		fontAwesomeClass: 'fa-cutlery'
	},
	{
		name: 'Search',
		fontAwesomeClass: 'fa-search'
	}
];

export const example_sunken_buttons = () => {
	let html = '';
	html += `<section class="buttons-container">`;

	for (const icon of icons) {
		html += `<button><i class="fa ${icon.fontAwesomeClass}" aria-hidden="true"></i> ${icon.name}</button>`;
	}

	// html += `<button><i class="fa fa-user" aria-hidden="true"></i> Profile</button>
	// 	<button><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail</button>
	// 	<button><i class="fa fa-video-camera" aria-hidden="true"></i> Videos</button>
	// 	`;
	
	html += `</section>`;
	return wrapAsExample('example_sunken_buttons', html, description);
}