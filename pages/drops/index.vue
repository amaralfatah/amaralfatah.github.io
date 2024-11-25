<template>
  <section class="flex flex-col gap-16 bg-myblack text-mywhite">
    <!-- Header Section -->
    <Header
      :id="header"
      :title="'Drops'"
      :subtitle="'Premium digital products I\'ve created.'"
    />
    <div class="flex flex-col gap-4">
      <span class="font-medium text-mywhite">All drops</span>
      <div class="flex flex-col">
        <a
          v-for="product in products"
          :key="product.id"
          :href="`#`"
          target=""
          class="flex items-center gap-4 py-6 no-underline transition-all duration-200 rounded-md hover:bg-mygray/5 hover:px-3 hover:-mx-3"
        >
          <div class="w-16 h-16 overflow-hidden">
            <img
              :alt="product.title"
              loading="lazy"
              width="512"
              height="512"
              decoding="async"
              data-nimg="1"
              class="object-cover h-full rounded-lg"
              style="color: transparent"
              src="/assets/img/avatar.jpeg"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-mywhite">{{ product.title }}</span>
            <span class="flex items-center gap-1 font-normal text-mygray">
              {{ product.type }} - ${{ product.price }}
            </span>
          </div>
        </a>
      </div>
    </div>
    <span class="text-sm text-mygray"
      >Have an audience who'd love my products?
      <a
        class="hover:opacity-90 text-mywhite"
        href="https://colecaccamise.lemonsqueezy.com/affiliates"
        >Become an affiliate</a
      >.</span
    >
  </section>
</template>

<script setup>
import products from "@/data/products.json";

useHead({
  title: "Drops - Amar Al Fatah",
});
</script>
