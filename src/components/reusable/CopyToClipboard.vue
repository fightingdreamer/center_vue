<script setup lang="ts">
import fileCopy from '@/assets/icons/file_copy.svg'
import { copyToClipboard } from '@/lib/clipboard'

defineProps<{
  text: string
}>()
</script>

<template>
  <button @click="copyToClipboard(text)">
    <img :src="fileCopy" alt="File copy" />
  </button>
</template>
