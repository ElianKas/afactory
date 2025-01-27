<script setup>
	import { useSessionStorage } from '@vueuse/core';
	const cartItems = useSessionStorage('cartItems', []);
	const storyblokApi = useStoryblokApi();
	const searchTerm = ref('');
	const searchResults = ref(null);
	const isSearchActive = ref(false);
	watch(searchTerm, async (newTerm) => {
		let groups = {
			designers: [],
			collections: [],
			products: [],
		};
		const { data: searchFinds } = await storyblokApi.get(
			'cdn/stories',
			{
				search_term: newTerm,
			}
		);
		searchFinds.stories.forEach((element) => {
			if (element.content.component === 'profil') {
				groups.designers.push(element);
			}
			if (element.content.component === 'collection') {
				groups.collections.push(element);
			}
			if (element.content.component === 'product') {
				groups.products.push(element);
			}
		});
		searchResults.value = groups;
	});

	function reset() {
		document.getElementById('searchInput').blur();
		searchResults.value = null;
		searchTerm.value = '';
		isSearchActive.value = false;
	}
</script>
<template>
	<header
		class="relative flex justify-between h-[60px] items-center inset-0 fixed bg-white px-[1rem] z-[999]">
		<NuxtLink to="/"><SvgBrandShort /></NuxtLink>
		<input
			id="searchInput"
			@keypress.enter="reset()"
			@focus="isSearchActive = true"
			@blur="reset()"
			class="border rounded-full px-[1rem] py-[.4rem]"
			type="text"
			v-model="searchTerm" />
		<ul
			v-if="isSearchActive && searchResults !== null"
			class="absolute bg-white border w-full left-0 top-[100%] px-[1rem] py-[2rem]">
			<h2>Designer</h2>
			<li
				v-for="designer in searchResults.designers"
				:key="designer">
				{{ designer }}
			</li>
			<h2>Kollektionen</h2>
			<li
				v-for="collection in searchResults.collections"
				:key="collection">
				{{ collection }}
			</li>
			<h2>Produkte</h2>
			<li
				v-for="product in searchResults.products"
				:key="product">
				{{ product }}
			</li>
		</ul>
		<div>
			<NuxtLink to="/kaufen">{{ cartItems.length }} Artikel</NuxtLink>
		</div>
	</header>
</template>
