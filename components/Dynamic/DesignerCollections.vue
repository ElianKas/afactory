<script setup>
	import { register } from 'swiper/element/bundle';
	const storyblokApi = useStoryblokApi();
	const { slug } = useRoute().params;
	const { data: collections } = await storyblokApi.get(
		'cdn/stories',
		{
			is_startpage: false,
			content_type: 'collection',
			starts_with:
				slug[0] /* receive products published by the designer (slug = designer name) */,
		}
	);
	onMounted(() => {
		register();
	});
</script>
<template>
	<section class="px-[1rem] pt-[2rem] pb-[1rem]">
		<h2 class="text-2xl">Kollektionen</h2>
		<br />
		<ClientOnly>
			<template #fallback>
				<div class="grid place-items-center">
					<div class="skeleton w-full aspect-[2/1.618]"></div>
				</div>
			</template>
			<swiper-container
				class="cursor-grab"
				:slides-per-view="1.3"
				:space-between="16"
				:centeredSlides="false"
				:navigation="false">
				<swiper-slide
					v-for="collection in collections.stories"
					:key="collection"
					><li
						class="border aspect-[2/1.618] rounded-[--border-radius] flex flex-col justify-end p-[1rem] text-left">
						{{ collection.name }}
					</li>
				</swiper-slide>
			</swiper-container>
		</ClientOnly>
	</section>
</template>
