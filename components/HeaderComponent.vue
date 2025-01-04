<script setup>
	const cartItems = useState('cartItems', () => []);
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
