<script setup lang="ts">
import fileCopy from '@/assets/icons/file_copy.svg'
import { copyToClipboard } from '@/lib/clipboard'
const p = defineProps<{
  location: string
}>()
</script>

<template>
  <div class="result-link">
    <span>{{ location }}</span>
    <button @click="copyToClipboard(p.location)">
      <img :src="fileCopy" alt="File copy" />
    </button>
  </div>
</template>

<style scoped>
.result-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 8px;
  padding: 16px;
  background-color: #fafafa;
}

span {
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
  color: #4a24ac;
  flex-grow: 1;
}

button {
  display: flex;
  align-items: center;
  place-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
}

img {
  width: 18px;
  height: 21px;
}
</style>
