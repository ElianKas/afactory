<script setup>
	const props = defineProps({ products: Array });
</script>
<template>
	<section class="px-[1rem] py-[2rem]">
		<h2>Produkte</h2>
		<br />
		<ul>
			<li
				v-for="product in products"
				:key="product">
				{{ product }}
				<br />
				<br />
			</li>
		</ul>
	</section>
</template>
