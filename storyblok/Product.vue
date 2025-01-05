<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news/aktuelles',
		is_startpage: false,
	});
</script>
<template>{{ data }}</template>
