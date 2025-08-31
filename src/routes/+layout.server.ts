import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	const isLogin = !!event.locals.session;
	return {
		isLogin
	}
}) satisfies LayoutServerLoad;
