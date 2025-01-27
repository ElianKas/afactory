<script setup>
	import { useSessionStorage } from '@vueuse/core';
	const cartItems = useSessionStorage('cartItems', []);
	const storyblokApi = useStoryblokApi();
	const searchTerm = ref('');
	const searchResults = ref(null);
	watch(searchTerm, async (newTerm) => {
		const { data: searchFinds } = await storyblokApi.get(
			'cdn/stories',
			{
				search_term: newTerm,
			}
		);
		searchResults.value = searchFinds;
		console.log(searchFinds);
	});
</script>
<template>
	<header
		class="flex justify-between h-[60px] items-center inset-0 fixed bg-white px-[1rem] z-[999]">
		<NuxtLink to="/"><SvgBrandShort /></NuxtLink>
		<input
			class="border rounded-full px-[1rem] py-[.4rem]"
			type="text"
			v-model="searchTerm" />
		<div>
			<NuxtLink to="/kaufen">{{ cartItems.length }} Artikel</NuxtLink>
		</div>
	</header>
</template>
