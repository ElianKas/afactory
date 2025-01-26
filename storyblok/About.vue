<script setup>
	const props = defineProps({ blok: Object });
	/* onMounted(() => {
		console.log(props.blok);
	}); */
</script>
<template>
	<article>
		{{ blok }}
	</article>
</template>
