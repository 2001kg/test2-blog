<script lang="ts">
	import Footer from "./footer.svelte"
	import Header from "./header.svelte"
    import PageTransition from './transition.svelte'
	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'
	export let data
</script>

<div class="layout">
  <!-- Header -->
	<Header />

	<main>
		<!-- Black hole for other content -->
		<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	</main>

  <!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
		font-family: var(--font-sans); /* Use Manrope as the primary font */
    	color: var(--text-1); /* Text color */
		align-items: center;
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
