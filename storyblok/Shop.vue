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
	function handleEmitProfile(profile) {
		/* console.log(profile); */
	}
	onMounted(() => {});
</script>
<template>
	<article>
		<DynamicDesignerBar @emit-profile="handleEmitProfile" />
		<DynamicDesignerCollections />
		<DynamicDesignerProducts :products="products.stories" />
		<section class="px-[1rem] py-[2rem]">
			<h2>Bio</h2>
			<p>{{ blok.text }}</p>
		</section>
	</article>
</template>
