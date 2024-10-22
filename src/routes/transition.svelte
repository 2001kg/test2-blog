<script lang="ts">
	import { fade } from 'svelte/transition';
	import { backIn } from 'svelte/easing';


	export let url: string
</script>

{#key url}
	<div class="transition" in:fade={{ duration: 250, easing: backIn }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
