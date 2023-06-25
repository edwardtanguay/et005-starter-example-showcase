import './example_random_german_noun_flashcard.scss';
import { wrapAsExample } from '../components/wrapAsExample';
import nouns from '../data/germanNouns.json';

const description =  '';

export const example_random_german_noun_flashcard = () => {
	let html = '';

	const randomIndex = Math.floor(Math.random() * nouns.length);
	const noun = nouns[randomIndex];

	html += `
		<div class="ball">${noun.singular}</div>	
	`;
	return wrapAsExample('example_random_german_noun_flashcard', html, description);
}