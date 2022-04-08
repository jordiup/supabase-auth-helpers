<script context="module">
	export const key = {};
</script>

<script type="ts">
	import { setContext } from 'svelte';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { UserStore } from '@supabase/supabase-auth-helpers/dist/sveltekit';

	export let supabaseClient: SupabaseClient;
	export let callbackUrl = '/api/auth/callback';
	export let redirectUrl = '/';

	const userStore = UserStore({ supabaseClient, callbackUrl, redirectUrl });

	userStore.checkAuthState();

	setContext(key, userStore);
</script>

<slot />
