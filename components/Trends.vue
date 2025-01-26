<script setup>
	import { register } from 'swiper/element/bundle';
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		is_startpage: false,
		content_type: 'product',
	});

	onMounted(() => {
		register();
	});
</script>
<template>
	<section class="py-[2rem] px-[1rem] text-center">
		<h2 class="text-2xl">Trendprodukte</h2>
		<br />
		<!-- <ClientOnly>
			<template #fallback>
				<div class="grid place-items-center">
					<div class="skeleton w-[80%] aspect-[4/5]"></div>
				</div>
			</template>
			<swiper-container
				class="cursor-grab"
				v-if="data"
				:slides-per-view="1.3"
				:space-between="16"
				:centeredSlides="false"
				:navigation="false">
				<swiper-slide
					v-for="item in data.stories"
					:key="item"
					><NuxtLink
						:to="`/produkte/${item.slug}`"
						class="border aspect-[4/5] rounded-[--border-radius] flex flex-col justify-end p-[1rem] text-left">
						{{ item.content.name }}
					</NuxtLink>
				</swiper-slide>
			</swiper-container>
		</ClientOnly> -->
	</section>
</template>
