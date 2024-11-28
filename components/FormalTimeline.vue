<!-- components/ExperienceTimeline.vue -->
<template>
  <div class="container px-4 mx-auto">
    <div class="space-y-10">
      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="relative pl-8 transition-all duration-300 group md:pl-12"
      >
        <!-- Timeline line -->
        <div class="absolute top-0 left-0 w-px h-full bg-mygray/20"></div>

        <!-- Timeline dot -->
        <div class="absolute left-[-2px] top-2">
          <div
            class="w-1.5 h-1.5 rounded-full bg-mywhite transition-all duration-300 group-hover:scale-125"
          ></div>
        </div>

        <!-- Content card -->
        <div class="card-base">
          <!-- Header -->
          <div
            class="flex flex-col gap-2 mb-4 md:flex-row md:items-center md:justify-between"
          >
            <h3 class="text-xl font-medium text-mywhite">
              {{ experience.role }}
            </h3>
            <div class="flex items-center text-sm text-mygray">
              <CalendarIcon class="w-4 h-4 mr-2" />
              {{ experience.duration }}
            </div>
          </div>

          <!-- Company and Location -->
          <div
            class="flex flex-wrap items-center mb-6 text-sm gap-x-4 gap-y-2 text-mygray"
          >
            <div class="flex items-center gap-1.5">
              <BuildingIcon class="w-4 h-4" />
              {{ experience.company }}
            </div>
            <div class="flex items-center gap-1.5">
              <MapPinIcon class="w-4 h-4" />
              {{ experience.location }}
            </div>
          </div>

          <!-- Description -->
          <ul class="mb-6 space-y-3 text-sm text-mygray">
            <li
              v-for="(desc, i) in experience.descriptions"
              :key="i"
              class="flex items-start gap-3"
            >
              <span class="mt-1.5 w-1 h-1 rounded-full bg-mywhite/50"></span>
              {{ desc }}
            </li>
          </ul>

          <!-- Technologies -->
          <!-- <div class="flex flex-wrap gap-2">
            <SkillBadge
              v-for="stack in experience.technologies"
              :key="stack"
              :name="stack"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CalendarIcon, BuildingIcon, MapPinIcon } from "lucide-vue-next";

const experiences = ref([
  {
    id: 1,
    role: "Bachelor of Informatics Engineering",
    company: "Ahmad Dahlan University",
    location: "Yogyakarta, Indonesia",
    duration: "Aug 2020 - Aug 2024",
    descriptions: [
      "Developed and maintained multiple web and mobile applications for various clients",
      "Implemented robust API integrations for seamless data flow between systems",
      "Created responsive and user-friendly interfaces using modern frameworks",
    ],
    technologies: ["Kotlin", "REST API", "Mobile Development"],
  },
  {
    id: 2,
    role: "Senior High School",
    company: "MA Sabilil Muttaqien",
    location: "Jawa Barat, Indonesia",
    duration: "Aug 2017 - Aug 2020",
    descriptions: [
      "Architected and implemented user interfaces for optimal user experience",
      "Developed responsive layouts using Bootstrap and CodeIgniter frameworks",
      "Collaborated with backend teams to integrate APIs and optimize performance",
    ],
    technologies: ["Bootstrap", "CodeIgniter", "Frontend Development"],
  },
]);
</script>
