<script setup>
	import { useSessionStorage } from '@vueuse/core';

	const cartItems = useSessionStorage('cartItems', []);

	function addToCart() {
		cartItems.value.push({ hello: 'hi4', greeting: 'Hello4' });
	}
</script>
<template>
	<div>
		<ul>
			<li>Produkt 1</li>
		</ul>
		<button @click="addToCart">In den Warenkorb</button>
	</div>
</template>
