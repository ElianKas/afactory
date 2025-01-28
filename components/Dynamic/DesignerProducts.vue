<script setup>
	const props = defineProps({ products: Array });
</script>
<template>
	<section class="px-[1rem] pb-[2rem] pt-[1rem]">
		<div class="border-b border-grey"></div>
		<br />
		<ul class="flex flex-col gap-[2rem]">
			<li
				v-for="product in products"
				:key="product">
				<div
					class="aspect-[1.618/2] border rounded-[--border-radius]"></div>
				<p class="p-[1rem]">
					{{ product.name }}
				</p>
			</li>
		</ul>
	</section>
</template>
