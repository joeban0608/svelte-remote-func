<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	interface Props {
		isLogin: boolean;
	}
	let { isLogin }: Props = $props();

	const megaMenuItems = [
		{ name: 'About us', href: '/#' }
		// { name: 'Blog', href: '/#' },
		// { name: 'Contact us', href: '/#' },
	];
	let open = $state();
</script>

<Navbar>
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi class="cursor-pointer" onclick={() => (open = true)}>
			Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
		</NavLi>
		<MegaMenu items={megaMenuItems}>
			{#snippet children({ item })}
				<a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500"
					>{item.name}</a
				>
			{/snippet}
		</MegaMenu>
		{#if isLogin}
			<NavLi href="/demo/lucia/logout">Logout</NavLi>
			<NavLi href="/demo/lucia/login">Login</NavLi>
		{/if}
		<NavLi href="/services">Products</NavLi>
		<NavLi href="/services">Contact</NavLi>
	</NavUl>
</Navbar>
