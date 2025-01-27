<script setup>
	const props = defineProps({ blok: Object });
	const storyblokApi = useStoryblokApi();
	const { slug } = useRoute().params;
	const { data: products } = await storyblokApi.get('cdn/stories', {
		is_startpage: false,
		content_type: 'product',
		starts_with:
			slug[0] /* receive products published by the designer (slug = designer name) */,
	});
	onMounted(() => {});
</script>
<template>
	<article>
		<DynamicDesignerBar />
		<h2>Bio</h2>
		<p>{{ blok.text }}</p>
		<br />
		<br />
		<h2>Produkte</h2>
		<p>{{ products }}</p>
	</article>
</template>
