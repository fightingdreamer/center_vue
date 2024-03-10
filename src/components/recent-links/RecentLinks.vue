<script setup lang="ts">
import RecentLink from './RecentLink.vue'
</script>

<template>
  <div class="recent-links">
    <span class="legend">Last links</span>
    <div>
      <ul>
        <RecentLink name="pl-b" location="https://center.ai/pl/blog/" />
        <RecentLink name="pl-b" location="https://center.ai/pl/blog/" />
        <RecentLink name="pl-b" location="https://center.ai/pl/blog/" />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.recent-links {
  display: flex;
  flex-direction: column;
  gap: 8px;

  > span {
    padding: 0 40px 0 40px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
  }

  > div {
    padding: 14px;
    border-radius: 40px;
    border: 2px solid rgba(103, 108, 128, 0.16);
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  filter: drop-shadow(0px 15px 80px rgba(34, 3, 134, 0.06));
}
</style>
