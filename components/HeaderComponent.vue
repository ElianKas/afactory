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
		if (newTerm === '') {
			reset();
		}
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
		class="flex justify-between h-[60px] items-center inset-0 fixed bg-white px-[1rem] z-[999]">
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
			class="absolute bg-white h-[calc(100vh-60px)] overflow-scroll border w-full left-0 top-[100%] px-[1rem] py-[2rem] flex flex-col gap-[1rem]">
			<div>
				<h2>Designer</h2>
				<br />
				<li
					v-for="designer in searchResults.designers"
					:key="designer">
					{{ designer.content }}
				</li>
			</div>
			<div>
				<h2>Kollektionen</h2>
				<br />
				<li
					v-for="collection in searchResults.collections"
					:key="collection">
					{{ collection.content }}
				</li>
			</div>
			<div>
				<h2>Produkte</h2>
				<br />
				<li
					v-for="product in searchResults.products"
					:key="product">
					{{ product.content }}
				</li>
			</div>
		</ul>
		<div>
			<NuxtLink to="/kaufen">{{ cartItems.length }} Artikel</NuxtLink>
		</div>
	</header>
</template>
