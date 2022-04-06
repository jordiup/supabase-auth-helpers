<script context="module">
	export const key = {};
</script>

<script type="ts">
	import { setContext } from 'svelte';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { session } from '$app/stores';
	import { UserStore } from '@supabase/supabase-auth-helpers/dist/svelte';

	export let supabaseClient: SupabaseClient;
	export let callbackUrl = '/api/auth/callback';
	export let user = null;
	export let cb = () => {};

	const userStore = UserStore({ supabaseClient, callbackUrl, user });

	userStore.checkAuthState(cb);

	setContext(key, userStore);

	$: {
		user = $session.user;
		console.log({ user });
	}
</script>

<slot />
