<script setup>
	import { useStorage } from '@vueuse/core';

	const cartItems = useStorage('cartItems', [
		{ hello: 'hi', greeting: 'Hello' },
		{ hello: 'hi2', greeting: 'Hello2' },
		{ hello: 'hi3', greeting: 'Hello3' },
	]);

	const checkout = async () => {
		try {
			const response = await $fetch('/api/stripe/checkout-session', {
				method: 'POST',
				/* body: {}, */
			});

			if (response) {
				console.log(response);
				window.location.href = response.headers.Location;
			}
		} catch (err) {
			console.log(`Ein Fehler ist aufgetreten: ${err.message}`);
		}
	};

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
