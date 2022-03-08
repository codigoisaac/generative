<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
      <HelloWorld msg="Welcome to Generative" />

      <nav>
        <RouterLink to="/dissolvingLabyrinth">Dissolving Labyrinth</RouterLink>
        <RouterLink to="/wonderingWaves">Wondering Waves</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>