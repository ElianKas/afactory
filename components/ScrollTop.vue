<script setup>
	const btn = ref(false);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	onMounted(() => {
		if (window.scrollY > window.innerHeight) {
			btn.value = true;
		} else {
			btn.value = false;
		}
		window.addEventListener('scroll', () => {
			if (window.scrollY > window.innerHeight) {
				btn.value = true;
			} else {
				btn.value = false;
			}
		});
	});
</script>
<template>
	<div
		@click="scrollToTop"
		v-if="btn"
		class="bg-white text-black fixed bottom-[1rem] right-[1rem] cursor-pointer z-[999] grid place-items-center w-[50px] aspect-square rounded-full shadow">
		<SvgNavigationArrow />
	</div>
</template>
