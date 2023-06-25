import { example_blue_ball } from './examples/example_blue_ball';
import { example_german_states } from './examples/example_german_states';
import './styles/main.scss';


document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>Example Showcase</h1>
<div class="examples">
	${example_blue_ball()}
	${example_german_states()}
</div>
`;