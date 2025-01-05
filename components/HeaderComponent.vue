<script setup>
	import { useSessionStorage } from '@vueuse/core';

	const cartItems = useSessionStorage('cartItems', []);
</script>
<template>
	<header
		class="flex justify-between h-[60px] items-center inset-0 fixed border px-[1rem]">
		<h1>Mein Shop</h1>
		<div>
			<NuxtLink to="/kaufen">{{ cartItems.length }} Artikel</NuxtLink>
		</div>
	</header>
</template>
