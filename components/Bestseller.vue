<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'produkte',
		is_startpage: false,
	});
	const item = ref(null);

	function filterBestseller() {
		item.value = data.stories[0];
	}

	onMounted(() => {
		filterBestseller();
	});
</script>
<template>
	<section class="py-[2rem] px-[1rem]">
		<ClientOnly>
			<template #fallback>
				<div class="grid place-items-center">
					<div class="skeleton w-[80%] aspect-[4/5]"></div>
				</div>
			</template>
			<NuxtLink
				v-if="item"
				:to="`/produkte/${item.slug}`"
				class="border aspect-[4/5] rounded-[--border-radius] flex flex-col justify-end p-[1rem] text-left">
				{{ item.content.name }}
			</NuxtLink>
		</ClientOnly>
	</section>
</template>
