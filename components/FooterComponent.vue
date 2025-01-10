<template>
	<footer>
		<section class="h-[80px] grid place-items-center">
			<p>3% for Recycling in Cameroon. <u>Learn more</u></p>
		</section>
		<section class="bg-black text-white px-[1rem]">
			<h2 class="text-center py-[2rem]">AFACTORY</h2>
			<nav>
				<ul class="text-2xl flex flex-col gap-[2rem]">
					<li>Produkte</li>
					<li>Kollektionen</li>
					<li>Designer</li>
					<li>Vision</li>
				</ul>
				<div class="py-[3rem]">
					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title px-0">Shop</div>
						<div class="collapse-content">
							<p>hello</p>
						</div>
					</div>
					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title px-0">Unternehmen</div>
						<div class="collapse-content">
							<p>hello</p>
						</div>
					</div>
					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title px-0">Bestellungen</div>
						<div class="collapse-content">
							<p>hello</p>
						</div>
					</div>
					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title px-0">Rechtliches</div>
						<div class="collapse-content">
							<p>hello</p>
						</div>
					</div>
				</div>
				<aside>
					<h3>Zahlungsmethoden</h3>
					<div class="flex flex-wrap gap-[.5rem] pt-[.5rem]">
						<div
							class="w-[100px] aspect-[2/1] bg-white rounded-[--border-radius]"></div>
						<div
							class="w-[100px] aspect-[2/1] bg-white rounded-[--border-radius]"></div>
						<div
							class="w-[100px] aspect-[2/1] bg-white rounded-[--border-radius]"></div>
						<div
							class="w-[100px] aspect-[2/1] bg-white rounded-[--border-radius]"></div>
						<div
							class="w-[100px] aspect-[2/1] bg-white rounded-[--border-radius]"></div>
					</div>
				</aside>
				<div class="grid grid-cols-3 place-items-center py-[2rem]">
					<div></div>
					<NuxtLink to="/kaufen">Warenkorb</NuxtLink>
					<ScrollTop class="justify-self-end" />
				</div>
			</nav>
		</section>
		<section></section>
	</footer>
</template>
