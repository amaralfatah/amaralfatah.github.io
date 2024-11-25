<!-- components/ContactForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          :disabled="isSubmitting"
          class="input-base"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          :disabled="isSubmitting"
          class="input-base"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <label for="subject" class="text-sm">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        required
        :disabled="isSubmitting"
        class="input-base"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="message" class="text-sm">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        :disabled="isSubmitting"
        class="input-base"
      ></textarea>
    </div>

    <div
      v-if="error"
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-300"
      role="alert"
    >
      <div class="flex items-center">
        <svg
          class="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>{{ error }}</span>
      </div>
    </div>

    <div
      v-if="success"
      class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-300"
      role="alert"
    >
      <div class="flex items-center">
        <svg
          class="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>{{ success }}</span>
      </div>
    </div>

    <button
      type="submit"
      class="px-6 py-3 text-white transition-all duration-300 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
      :disabled="
        isSubmitting ||
        !form.name ||
        !form.email ||
        !form.subject ||
        !form.message
      "
    >
      <span v-if="isSubmitting">
        <span class="inline-block animate-spin">↻</span> Sending...
      </span>
      <span v-else>Send Message</span>
    </button>
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";

// Konfigurasi EmailJS
const EMAILJS_SERVICE_ID = "service_6sfihlo";
const EMAILJS_TEMPLATE_ID = "template_22525qd";
const EMAILJS_PUBLIC_KEY = "xCaAuiFMcnhbtTx8f";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const error = ref("");
const success = ref("");

// Inisialisasi EmailJS
onMounted(() => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
});

const validateForm = () => {
  if (!form.value.name.trim()) {
    throw new Error("Please enter your name");
  }
  if (!form.value.email.trim()) {
    throw new Error("Please enter your email");
  }
  if (!form.value.subject.trim()) {
    throw new Error("Please enter a subject");
  }
  if (!form.value.message.trim()) {
    throw new Error("Please enter your message");
  }

  // Validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    throw new Error("Please enter a valid email address");
  }
};

const resetForm = () => {
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};

const handleSubmit = async () => {
  error.value = "";
  success.value = "";
  isSubmitting.value = true;

  try {
    // Validasi form
    validateForm();

    // Persiapkan template parameter
    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
    };

    // Kirim email menggunakan EmailJS
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

    // Reset form setelah berhasil
    resetForm();
    success.value = "Message sent successfully! We will get back to you soon.";
  } catch (err) {
    error.value = err.message || "Failed to send message. Please try again.";
    console.error("EmailJS Error:", err);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
