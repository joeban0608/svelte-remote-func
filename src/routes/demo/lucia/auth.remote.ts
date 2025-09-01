import { command, getRequestEvent, query } from '$app/server';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import * as auth from '$lib/server/auth';
import { error } from '@sveltejs/kit';

export const logout = command(async () => {
	const event = getRequestEvent();

	if (!event.locals.session) {
		return error(401);
	}

	await db.delete(table.session).where(eq(table.session.id, event.locals.session.id));
	event.cookies.delete(auth.sessionCookieName, {
		path: '/'
	});
});

export const getUser = query(async () => {
	const event = getRequestEvent();
	if (!event.locals.user) {
		return error(404);
	}
	return event.locals.user;
});
