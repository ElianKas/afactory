<script setup>
	import { useSessionStorage } from '@vueuse/core';
	const cartItems = useSessionStorage('cartItems', []);
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'produkte',
		is_startpage: false,
	});

	function addToCart(item) {
		cartItems.value.push(item);
	}

	onMounted(() => {
		console.log(data);
	});
</script>
<template>
	<section>
		<ul>
			<li
				v-if="data"
				v-for="item in data.stories">
				{{ item.content.name }} <br />
				<button @click="addToCart(item)">In den Warenkorb</button>
			</li>
		</ul>
	</section>
</template>
