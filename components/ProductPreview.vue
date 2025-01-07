<script setup>
	import { register } from 'swiper/element/bundle';
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'produkte',
		is_startpage: false,
	});

	onMounted(() => {
		register();
	});
</script>
<template>
	<section>
		<ClientOnly>
			<swiper-container
				class="cursor-grab"
				v-if="data"
				:slides-per-view="1.5"
				:space-between="16"
				:centeredSlides="true"
				:navigation="false">
				<swiper-slide
					v-for="item in data.stories"
					:key="item"
					><NuxtLink
						:to="`/produkte/${item.slug}`"
						class="border aspect-[4/5] rounded-[--border-radius] flex flex-col justify-end p-[1rem]">
						{{ item.content.name }}
					</NuxtLink>
				</swiper-slide>
			</swiper-container>
		</ClientOnly>
	</section>
</template>
