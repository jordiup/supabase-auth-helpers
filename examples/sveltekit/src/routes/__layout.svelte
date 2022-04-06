<script context="module">
	export async function load({ session }) {
		return {
			status: 200
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/db';
	import UserContext from '$lib/UserContext.svelte';

	const redirect = () => {
		goto('/about');
	};
</script>

<UserContext {supabaseClient} cb={redirect}>
	<slot />
</UserContext>
