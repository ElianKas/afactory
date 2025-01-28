<script setup>
	const props = defineProps({ products: Array });
</script>
<template>
	<section class="px-[1rem] pb-[2rem] pt-[1rem]">
		<div class="border-b border-grey"></div>
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
