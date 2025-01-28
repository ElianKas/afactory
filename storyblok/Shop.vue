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
	const profile = ref(null);
	function handleEmitProfile(profileObj) {
		profile.value = profileObj;
	}
	onMounted(() => {});
</script>
<template>
	<article>
		<DynamicDesignerBar @emit-profile="handleEmitProfile" />
		<DynamicDesignerCollections />
		<DynamicDesignerProducts :products="products.stories" />
		<section
			class="px-[1rem] py-[5rem] bg-black text-white text-center">
			<ClientOnly>
				<p>{{ blok.text }}</p>
				<br />
				<p>{{ profile.content.name }}</p>
			</ClientOnly>
		</section>
	</article>
</template>
