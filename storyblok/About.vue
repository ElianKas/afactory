<script setup>
	const props = defineProps({ blok: Object });
	/* onMounted(() => {
		console.log(props.blok);
	}); */
</script>
<template>
	<article>
		<DynamicDesignerBar />
		{{ blok }}
	</article>
</template>
