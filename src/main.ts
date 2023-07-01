import { example_highlight_hover_buttons } from './examples/example_highlight_hover_buttons';
import { example_random_german_noun_flashcard } from './examples/example_random_german_noun_flashcard';
import { example_blue_ball } from './examples/example_blue_ball';
import { example_german_states } from './examples/example_german_states';
import './styles/main.scss';
import * as tools from '../share/toolsFrontend';

const currentPageIdCode = tools.getCurrentPageIdCode();

const displayComponent = (component: () => void, idCode: string) => {
	if (currentPageIdCode === '') {
		return component();
	} else {
		if (currentPageIdCode === idCode) {
			return component();
		} else {
			return '';
		}
	}
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>HTML-CSS-JavaScript Showcase 2.1</h1>
<h2>${tools.getCurrentEnvironment()}</h2>
${currentPageIdCode !== '' ? '<a href="/"><button class="btnBackToHome">Display all examples</button></a>' : ''}
<div class="examples">
${displayComponent(example_highlight_hover_buttons, 'example-highlight-hover-buttons')}
${displayComponent(example_random_german_noun_flashcard, 'example-random-german-noun-flashcard')}
${displayComponent(example_german_states, 'example-german-states')}
${displayComponent(example_blue_ball, 'example-blue-ball')}
</div>
`;