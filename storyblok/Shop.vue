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
	const { data: profil } = await storyblokApi.get('cdn/stories', {
		is_startpage: false,
		content_type: 'profil',
		starts_with:
			slug[0] /* receive products published by the designer (slug = designer name) */,
	});
	onMounted(() => {
		console.log(products);
		console.log(profil);
	});
</script>
<template>
	<article>
		<DynamicDesignerBar />
		<h2>Bio</h2>
		{{ blok.text }}
		<h2>Produkte</h2>
		<p>{{ products }}</p>
	</article>
</template>
