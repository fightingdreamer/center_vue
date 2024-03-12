<script setup lang="ts">
import { redirectionLink } from '@/lib/url'
import CopyToClipboard from '@/components/reusable/CopyToClipboard.vue'
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const link = computed(() => redirectionLink(props.name))
</script>

<template>
  <div class="result-link">
    <span>{{ link }}</span>
    <CopyToClipboard :text="link" />
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
</style>
