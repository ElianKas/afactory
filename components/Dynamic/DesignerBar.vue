<script setup>
	const emit = defineEmits(['emitProfile']);
	const storyblokApi = useStoryblokApi();
	const { slug } = useRoute().params;
	const { data: profile } = await storyblokApi.get('cdn/stories', {
		is_startpage: false,
		content_type: 'profil',
		starts_with:
			slug[0] /* receive products published by the designer (slug = designer name) */,
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
	<nav class="aspect-video border">
		<h1 class="text-2xl">{{ profile.stories[0].content.name }}</h1>
	</nav>
</template>
