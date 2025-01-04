<script setup>
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
		const cartItems = useState('cartItems', () => []);
		cartItems.value.push('Produkt 1');
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
