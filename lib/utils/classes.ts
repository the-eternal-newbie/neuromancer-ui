export type NeuroRoles =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'info'
	| 'warning'
	| 'error';

export default (
	styles: Record<string, string>,
	className: string,
	pre: string,
	...args: Array<string | undefined>
) => {
	const classNames = args.map(arg => {
		if (arg && !styles[`${pre}-${arg}`]) {
			return arg;
		}

		return arg ? styles[`${pre}-${arg}`] : undefined;
	});

	return [className, styles[pre], ...classNames].filter(Boolean).join(' ');
};
