<script setup lang="ts">
import { useRecentLinksStore } from '@/store/recentLinks'
import RecentLink from '@/components/recent-links/RecentLink.vue'

const recentLinksStore = useRecentLinksStore()
</script>

<template>
  <div class="recent-links" v-if="recentLinksStore.links.length">
    <span class="legend">Last links</span>
    <div>
      <ul>
        <RecentLink
          v-for="link in recentLinksStore.links"
          :key="link.location"
          :name="link.name"
          :location="link.location"
        />
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
