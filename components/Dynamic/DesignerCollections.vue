<script setup>
	const storyblokApi = useStoryblokApi();
	const { slug } = useRoute().params;
	const { data: collections } = await storyblokApi.get(
		'cdn/stories',
		{
			is_startpage: false,
			content_type: 'collection',
			starts_with:
				slug[0] /* receive products published by the designer (slug = designer name) */,
		}
	);
</script>
<template>
	<section class="px-[1rem] py-[2rem]">
		<h2>Kollektionen</h2>
		<br />
		<ul>
			<li v-for="collection in collections.stories">
				{{ collection }}
			</li>
		</ul>
	</section>
</template>
