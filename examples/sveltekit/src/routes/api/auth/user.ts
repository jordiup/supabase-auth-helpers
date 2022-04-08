/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post(event) {
	const { user, accessToken } = event.locals;
	return {
		status: 200,
		body: {
			user,
			accessToken
		}
	};
}
