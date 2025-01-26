<script setup>
	const { slug } = useRoute().params;
	const props = defineProps({ blok: Object });
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		is_startpage: false,
		content_type: 'product',
		starts_with:
			slug[0] /* receive products published by the designer (slug = designer name) */,
	});
	onMounted(() => {
		console.log(data);
	});
</script>
<template>
	<article>
		{{ blok }}
	</article>
</template>
