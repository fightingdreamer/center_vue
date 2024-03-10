<script setup lang="ts">
import fileCopy from '@/assets/icons/file_copy.svg'

const p = defineProps<{
  name: string
  location: string
}>()
</script>

<template>
  <li class="recent-link">
    <div>
      <span class="location">{{ location }}</span>
      <span class="name-as-url">https://center.ai/{{ name }}/</span>
    </div>
    <button>
      <img :src="fileCopy" alt="File copy" />
    </button>
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
    border-radius: 32px 32px 16px 16px;
  }
  &:last-child {
    border-radius: 16px 16px 32px 32px;
  }
}

div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.location {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(54, 60, 86, 1);
}

.name-as-url {
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
  width: 18px;
  height: 21px;
}
</style>
