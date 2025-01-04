<script setup>
	import { useStorage } from '@vueuse/core';

	const cartItems = useStorage('cartItems', [
		{ hello: 'hi', greeting: 'Hello' },
		{ hello: 'hi2', greeting: 'Hello2' },
		{ hello: 'hi3', greeting: 'Hello3' },
	]);
</script>
<template>
	<header
		class="flex justify-between h-[60px] items-center inset-0 fixed border px-[1rem]">
		<h1>Mein Shop</h1>
		<div>
			<div>{{ cartItems.length }} Artikel</div>
		</div>
	</header>
</template>
