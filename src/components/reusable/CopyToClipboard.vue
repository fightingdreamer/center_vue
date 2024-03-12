<script setup lang="ts">
import CopyIcon from '@/assets/icons/file_copy.svg'
import { copyToClipboard } from '@/lib/clipboard'

defineProps<{
  text: string
}>()
</script>

<template>
  <button @click="copyToClipboard(text)">
    <CopyIcon />
  </button>
</template>

<style scoped>
button {
  padding: 0;
  fill: #676c80;

  &:hover {
    fill: #6831f8;
  }

  &:active {
    filter: drop-shadow(0px 0px 15px rgba(87, 39, 213, 0.7));
  }
}

svg {
  padding-right: 1px;
  width: 19px;
  height: 22px;
}
</style>
