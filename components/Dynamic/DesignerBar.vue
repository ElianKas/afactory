<script setup>
	const storyblokApi = useStoryblokApi();
	const { slug } = useRoute().params;
	const { data: profil } = await storyblokApi.get('cdn/stories', {
		is_startpage: false,
		content_type: 'profil',
		starts_with:
			slug[0] /* receive products published by the designer (slug = designer name) */,
	});
	onMounted(() => {
		if (profil.stories.length > 1) {
			console.log(
				'Storyblok: There should be one Profil Story only.'
			);
		}
	});
</script>
<template>
	<nav class="aspect-video border">
		<h1 class="text-2xl">{{ profil.stories[0].content.name }}</h1>
	</nav>
</template>
