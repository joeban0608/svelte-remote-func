// import { session } from './../lib/server/db/schema';
// import * as auth from '$lib/server/auth';
// ref: https://svelte.dev/docs/kit/remote-functions

/* 
export const actions: Actions = {
  logout: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await auth.invalidateSession(event.locals.session.id);
    auth.deleteSessionTokenCookie(event);

    return redirect(302, '/demo/lucia/login');
  }
};

*/

// import { command, query } from '$app/server';
// import { db } from '$lib/server/db';

// export const logout = command(async () => {
//   const [_session] = await db.select().from(session);
//   if (_session) {
//     await auth.invalidateSession(_session.id);
//     auth.deleteSessionTokenCookie(event);
//   }
//   return sessions;
// });