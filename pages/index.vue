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
	<div>
		<section>
			<div class="h-[80px] grid place-items-center">
				<h1>Welcome to AFACTORY the future of production.</h1>
			</div>
			<div class="bg-black max-sm:aspect-[3/5] w-full">
				<div>
					<h2>Like Paper</h2>
					<p>Designed by Lars Harnhardt</p>
					<br />
					<button class="btn"></button>
				</div>
			</div>
		</section>
		<ul>
			<li
				v-if="data"
				v-for="item in data.stories">
				{{ item.content.name }} <br />
				<button @click="addToCart(item)">In den Warenkorb</button>
			</li>
		</ul>
	</div>
</template>
