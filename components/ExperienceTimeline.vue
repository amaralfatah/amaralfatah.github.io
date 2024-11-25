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
          <div class="flex flex-wrap gap-2">
            <SkillBadge
              v-for="stack in experience.technologies"
              :key="stack"
              :name="stack"
            />
          </div>
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
    role: "Freelance Developer",
    company: "Self-employed",
    location: "Remote, Indonesia",
    duration: "Aug 2023 - Present",
    descriptions: [
      "Developed and maintained multiple web and mobile applications for various clients",
      "Implemented robust API integrations for seamless data flow between systems",
      "Created responsive and user-friendly interfaces using modern frameworks",
    ],
    technologies: ["Kotlin", "REST API", "Mobile Development"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Universitas Ahmad Dahlan",
    location: "Yogyakarta, Indonesia",
    duration: "Dec 2023 - Aug 2024",
    descriptions: [
      "Architected and implemented user interfaces for optimal user experience",
      "Developed responsive layouts using Bootstrap and CodeIgniter frameworks",
      "Collaborated with backend teams to integrate APIs and optimize performance",
    ],
    technologies: ["Bootstrap", "CodeIgniter", "Frontend Development"],
  },
  {
    id: 3,
    role: "Fullstack Developer",
    company: "PT Mahir Technology Indonesia",
    location: "Yogyakarta, Indonesia",
    duration: "Feb 2024 - Jun 2024",
    descriptions: [
      "Led full-stack development initiatives using Laravel framework",
      "Participated in comprehensive training for both technical and soft skills",
      "Collaborated in team projects following agile methodologies",
    ],
    technologies: ["Laravel", "Full-stack Development", "API Integration"],
  },
  {
    id: 4,
    role: "Fullstack Developer",
    company: "SEVEN INC JOGJA",
    location: "Yogyakarta, Indonesia",
    duration: "Sep 2023 - Dec 2023",
    descriptions: [
      "Contributed to project-based development using Laravel framework",
      "Implemented RESTful APIs for various client applications",
      "Participated in regular training sessions for skill enhancement",
    ],
    technologies: ["Laravel", "REST API", "Bootstrap"],
  },
  {
    id: 5,
    role: "Mobile Developer",
    company: "Bangkit Academy",
    location: "Bandung, Indonesia",
    duration: "Feb 2023 - Jun 2023",
    descriptions: [
      "Specialized in Android development using Kotlin",
      "Collaborated with ML and Cloud Computing teams for Capstone Project",
      "Completed comprehensive mobile development training program",
    ],
    technologies: ["Kotlin", "Android Development", "REST API"],
  },
]);
</script>
