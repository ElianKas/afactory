<template>
	<div>
		<section class="grid place-items-center py-[2rem]">
			<h1><SvgBrandLogoGrey class="w-[250px] h-auto m-auto" /></h1>
			<p
				class="m-auto overflow-hidden w-full text-nowrap font-bold pt-[1rem] text-grey">
				THE DIGITAL MARKETPLACE FOR HANDCRAFTED 3D PRINTED OBJECTS
			</p>
		</section>
		<article>
			<div
				class="border aspect-video relative px-[1rem] ml-[1rem] rounded-l-[--border-radius]">
				<div
					class="absolute top-[calc(100%-60px)] flex items-center gap-[1rem]">
					<div
						class="h-[90px] aspect-square bg-black rounded-full"></div>
					<p>Neuer Designer in AFACTORY</p>
				</div>
			</div>
			<div class="px-[1rem] py-[3rem] text-center">
				<h2 class="text-2xl py-[1rem]">
					Lerne
					<span class="text-orange-400">@Lars Harnhard</span> kennen
				</h2>
				<p class="pb-[1.5rem] text-paragraph">
					About dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud
				</p>
				<NuxtLink
					to="/lars-harnhard/shop"
					class="border-b py-[.5rem]"
					>Shop besuchen</NuxtLink
				>
			</div>
		</article>
		<section class="px-[1rem] py-[2rem]">
			<h2 class="text-2xl">STUDIO HIGHLIGHT</h2>
			<br />
			<div>
				<div
					class="w-full aspect-square border rounded-[--border-radius]"></div>
				<div class="grid grid-cols-2 gap-[1rem] py-[1rem]">
					<div
						class="aspect-[1.618/2] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[1.618/2] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[1.618/2] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[1.618/2] border rounded-[--border-radius]"></div>
				</div>
			</div>
		</section>
		<article class="py-[2rem]">
			<div class="border aspect-video"></div>
			<div class="px-[1rem] py-[3rem]">
				<h2 class="text-2xl">Designer Spotlight</h2>
				<br />
				<p class="text-paragraph">
					About dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur.“
				</p>
				<br />
				<br />
				<div class="flex gap-[1rem] items-center">
					<div
						class="h-[70px] aspect-square border rounded-full"></div>
					<NuxtLink to="/"
						>Mehr über <br />
						Lars Harnhard</NuxtLink
					>
				</div>
			</div>
		</article>
		<Trends />
		<Designers />
	</div>
</template>
