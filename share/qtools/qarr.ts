/**
 * Randomizes the items of an array sent as the parameter.
 *
 * tools.shuffle(icons);
 *
 * (returns void, array is shuffled)
 */
export const shuffle = (items: any[]) => {
	for (let i = items.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = items[i];
		items[i] = items[j];
		items[j] = temp;
	}
}
