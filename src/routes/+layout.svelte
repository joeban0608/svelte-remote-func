<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import classList from '$lib/action/classList';
	import Header from '$lib/component/Header.svelte';

	let { children, data } = $props();
</script>

<svelte:body
	use:classList={[
		'bg-white',
		'text-black',
		'dark:bg-gradient-to-r',
		'dark:from-gray-950',
		'dark:via-purple-950',
		'dark:to-gray-950',
		'dark:text-white'
	]}
/>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
