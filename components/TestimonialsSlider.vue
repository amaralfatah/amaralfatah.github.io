<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="flex justify-center flex-shrink-0 w-full px-4"
        >
          <div class="w-4/5 card-base">
            <p class="mb-6 text-lg">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-4">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full"
              />
              <div>
                <h4 class="font-medium">{{ testimonial.name }}</h4>
                <p class="text-sm text-mygray">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute flex justify-between w-full px-4 -translate-y-1/2 top-1/2"
    >
      <button
        @click="prevSlide"
        class="p-2 transition-all duration-300 bg-transparent border rounded-full border-mygray/10 hover:border-mygray/50"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>

      <button
        @click="nextSlide"
        class="p-2 transition-all duration-300 bg-transparent border rounded-full border-mygray/10 hover:border-mygray/50"
      >
        <ChevronRightIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

const testimonials = [
  {
    id: 1,
    text: "Working with you was an absolute pleasure. The attention to detail and commitment to quality really shows in the final product.",
    name: "John Smith",
    role: "CEO at TechCorp",
    avatar: "https://colecaccamise.com/_next/image?url=%2Fcole.jpg&w=256&q=75",
  },
  {
    id: 2,
    text: "Working with you was an absolute pleasure. The attention to detail and commitment to quality really shows in the final product.",
    name: "Asem Amis",
    role: "CEO at MustFive",
    avatar:
      "https://media.gq.com/photos/627d37fbbad17dc46fce8158/4:3/w_2507,h_1880,c_limit/MCDAVAT_FE021.jpg",
  },
  {
    id: 3,
    text: "Working with you was an absolute pleasure. The attention to detail and commitment to quality really shows in the final product.",
    name: "Anti Garam",
    role: "CEO at NasiPadang",
    avatar:
      "https://www.shutterstock.com/image-illustration/young-pretty-blond-woman-cute-600nw-2210357885.jpg",
  },
];

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + testimonials.length) % testimonials.length;
};
</script>
