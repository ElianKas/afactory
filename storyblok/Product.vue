<script setup>
	import { useSessionStorage } from '@vueuse/core';
	const cartItems = useSessionStorage('cartItems', []);
	const props = defineProps({ blok: Object });

	function addToCart(item) {
		cartItems.value.push(item);
	}

	/* 	onMounted(() => {
		console.log(props.blok);
	}); */
</script>
<template>
	<article>
		<p>
			{{ blok }}
		</p>
		<br />
		<button @click="addToCart(blok)">In den Warenkorb</button>
	</article>
</template>
