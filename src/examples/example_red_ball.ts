import './example_red_ball.scss';
import { wrapAsExample } from '../components/wrapAsExample';

export const example_red_ball = () => {
	let html = '';

	const states = [
		"Baden-Württemberg",
		"Bavaria",
		"Berlin",
		"Brandenburg",
		"Bremen",
		"Hamburg",
		"Hesse",
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
	
	return wrapAsExample('example_red_ball', html);
}