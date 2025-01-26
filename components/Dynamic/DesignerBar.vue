<script setup>
	const props = defineProps({ name: String });
</script>
<template>
	<nav>
		<h1 class="text-2xl">{{ name }}</h1>
	</nav>
</template>
