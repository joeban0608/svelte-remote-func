<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		MegaMenu,
		Button,
		Avatar,
		Dropdown,
		DropdownItem,
		Badge
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { getUser, logout } from '../../routes/demo/lucia/auth.remote';

	interface Props {
		// isLogin: boolean;
	}
	let {}: Props = $props();

	const megaMenuItems = [
		{ name: 'About us', href: '/#' }
		// { name: 'Blog', href: '/#' },
		// { name: 'Contact us', href: '/#' },
	];

	let isAvatarOpen = $state(false);

	async function delayed(text: string) {
		return new Promise<string>((resolve) => {
			setTimeout(() => {
				resolve(text);
			}, 2000);
		});
	}
</script>

<Navbar class="cursor-pointer">
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi class="cursor-pointer">
			Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
		</NavLi>
		<MegaMenu items={megaMenuItems}>
			{#snippet children({ item })}
				<a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500"
					>{item.name}</a
				>
			{/snippet}
		</MegaMenu>

		<svelte:boundary>
			<Avatar
				onclick={() => {
					isAvatarOpen = !isAvatarOpen;
				}}
			/>
			<Dropdown bind:isOpen={isAvatarOpen} simple>
				<!-- <DropdownItem>
					<Badge color="yellow">{user?.id}</Badge>
				</DropdownItem> -->
				<DropdownItem>
					<Badge color="cyan">{(await getUser()).username}</Badge>
				</DropdownItem>
				<DropdownItem>
					<Button
						class="w-full"
						onclick={async () => {
							await logout().updates(getUser());
						}}>Sign out</Button
					>
				</DropdownItem>
			</Dropdown>

			<!-- <Button href="/demo/lucia/login">Login</Button> -->

			{#snippet pending()}
				<p>loading...</p>
			{/snippet}
			{#snippet failed(error)}
				<Button href="/demo/lucia/login">Login</Button>
			{/snippet}

			<svelte:boundary>
				<p>{await delayed('hello!')}</p>

				{#snippet pending()}
					<p>loading...</p>
				{/snippet}
			</svelte:boundary>
		</svelte:boundary>
		<!-- <NavLi href="/services">Products</NavLi>
		<NavLi href="/services">Contact</NavLi> -->
	</NavUl>
</Navbar>
