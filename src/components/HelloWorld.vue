<template>
  <div class="font-bold">{{msg}}</div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>