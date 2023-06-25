import { example_blue_ball } from './examples/example_blue_ball';
import { example_red_ball } from './examples/example_red_ball';
import './styles/main.scss';


document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>Examples</h1>
<div class="examples">
	${example_blue_ball()}
	${example_red_ball()}
</div>
`;