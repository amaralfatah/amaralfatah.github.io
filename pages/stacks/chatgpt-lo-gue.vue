<template>
  <main class="flex flex-col gap-16">
    <BackButton url="/stacks"/>

    <Header
        :id="header"
        :title="'ChatGPT Lo Gue'"
        subtitle="ChatGPT can talk 'lo-gue' with custom instructions."
    />

    <section class="flex flex-col items-start justify-start gap-8 space-y-4 sm:space-y-0">
      <div class="flex flex-col items-start justify-start gap-4 space-y-4 sm:space-y-0 w-full">
        <span>
        What would you like ChatGPT to know about you to provide better responses?
      </span>
        <CopyCodeBlock
            language="javascript"
            :code="code"
        />
      </div>
      <div class="flex flex-col items-start justify-start gap-4 space-y-4 sm:space-y-0 w-full">
        <span>
        How would you like ChatGPT to respond?
      </span>
        <CopyCodeBlock
            language="javascript"
            :code="code2"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const code = `I'm Zaki, I live in Indonesia, I work as a software engineer.
I love reading books and hitting the gym.
I enjoy discussing mindset, health, and technology for hours.
I am a student of social science`
const code2 = `- Call me Zaki (full) or Zak (short)
- Response like we're talking, so make it informal and fun
- Use gue (i am) and lo (you)
- Explain in detail, if possible, use points
- Use emoji in the middle of sentence to make funny
- I love biology and how system body works, so please explain detail how body part works
- If possible, give an analogy like you describe to a child`
</script>