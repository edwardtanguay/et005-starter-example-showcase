import { example_highlight_hover_buttons } from './examples/example_highlight_hover_buttons';
import { example_random_german_noun_flashcard } from './examples/example_random_german_noun_flashcard';
import { example_blue_ball } from './examples/example_blue_ball';
import { example_german_states } from './examples/example_german_states';
import './styles/main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>HTML-CSS-JavaScript Showcase</h1>
<div class="examples">
${example_highlight_hover_buttons()}
${example_random_german_noun_flashcard()}
${example_german_states()}
${example_blue_ball()}
</div>
`;