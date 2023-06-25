import './example_german_states.scss';
import { wrapAsExample } from '../components/wrapAsExample';

const description = 'This example uses <code>forEach()</code> to loop through an array of German state names, displaying each in a circle that is animated on hover.';

export const example_german_states = () => {
	let html = '';

	const states = [
		"Baden-Württemberg",
		"Bavaria",
		"Berlin",
		"Brandenburg",
		"Bremen",
		"Hamburg",
		"Hessen",
		"Lower Saxony",
		"Mecklenburg-Vorpommern",
		"North Rhine-Westphalia",
		"Rhineland-Palatinate",
		"Saarland",
		"Saxony",
		"Saxony-Anhalt",
		"Schleswig-Holstein",
		"Thuringia"
	];

	html += '<div class="states">';
	states.forEach(state => {
		html += `<div class="state">${state}</div>`;
	})
	html += '</div>'; 
	
	return wrapAsExample('example_german_states', html, description);
}