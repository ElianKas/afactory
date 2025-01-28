<script setup>
	const emit = defineEmits(['emitProfile']);
	const storyblokApi = useStoryblokApi();
	const { slug } = useRoute().params;
	const { data: profile } = await storyblokApi.get('cdn/stories', {
		content_type: 'profil',
		starts_with: slug[0],
	});
	const { data: about } = await storyblokApi.get('cdn/stories', {
		content_type: 'about',
		starts_with: slug[0],
	});
	onMounted(() => {
		if (profile.stories.length > 1) {
			console.log(
				'WARNING - Storyblok: There should be one Profil Story only.'
			);
		}
		emit('emitProfile', profile.stories[0]);
	});
</script>
<template>
	<section>
		<div class="aspect-video border flex items-end p-[1rem]">
			<h1 class="text-2xl">{{ profile.stories[0].content.name }}</h1>
		</div>
		<nav class="px-[1rem] py-[1rem]">
			<ul class="flex flex-wrap gap-[1rem]">
				<NuxtLink :to="`/${slug[0]}/shop`">
					<li
						:class="{ 'border border-paragraph': slug[1] === 'shop' }"
						class="px-[1rem] py-[.5rem] rounded-full">
						Shop
					</li>
				</NuxtLink>
				<NuxtLink :to="`/${slug[0]}/about`">
					<li
						:class="{
							'border border-paragraph': slug[1] === 'about',
						}"
						class="px-[1rem] py-[.5rem] rounded-full"
						v-if="about.stories.length > 0">
						About
					</li>
				</NuxtLink>
			</ul>
		</nav>
	</section>
</template>
