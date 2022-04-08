import type { RequestEvent } from '@sveltejs/kit';

export async function loadUser(event: RequestEvent) {
  const { user, accessToken } = event.locals;
  return {
    status: 200,
    body: {
      user,
      accessToken
    }
  };
}
