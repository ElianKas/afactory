<script setup>
	import { useSessionStorage } from '@vueuse/core';

	const cartItems = useSessionStorage('cartItems', []);

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
</script>
<template>
	<div>
		<h1>Produkte</h1>
		<form
			@submit.prevent="checkout"
			class="px-[1rem]">
			<ul>
				<li v-for="item in cartItems">{{ item }}</li>
			</ul>
			<button type="submit">Weiter</button>
		</form>
	</div>
</template>
