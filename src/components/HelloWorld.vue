<template>
  {{msg}}
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>