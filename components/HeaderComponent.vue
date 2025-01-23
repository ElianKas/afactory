<script setup>
	import { useSessionStorage } from '@vueuse/core';

	const cartItems = useSessionStorage('cartItems', []);
</script>
<template>
	<header
		class="flex justify-between h-[60px] items-center inset-0 fixed bg-white px-[1rem] z-[999]">
		<NuxtLink to="/"><SvgBrandShort /></NuxtLink>
		<div>
			<NuxtLink to="/kaufen">{{ cartItems.length }} Artikel</NuxtLink>
		</div>
	</header>
</template>
