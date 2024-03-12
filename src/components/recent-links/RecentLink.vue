<script setup lang="ts">
import CopyToClipboard from '@/components/reusable/CopyToClipboard.vue'

import { redirectionLink } from '@/lib/url'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  location: string
}>()

const link = computed(() => redirectionLink(props.name))
</script>

<template>
  <li class="recent-link">
    <div>
      <span class="target-url">{{ location }}</span>
      <span class="source-url">{{ link }}/</span>
    </div>
    <CopyToClipboard :text="link" />
  </li>
</template>

<style scoped>
.recent-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 16px 40px 16px 40px;
  background-color: #ffffff;

  border-radius: 16px;
  &:first-child {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }
  &:last-child {
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  }
}

div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.target-url {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(54, 60, 86, 1);
}

.source-url {
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
  color: rgba(74, 36, 172, 1);
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
  padding-right: 1px;
  width: 19px;
  height: 22px;
}
</style>
