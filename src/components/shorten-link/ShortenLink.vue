<script setup lang="ts">
import logo from '@/assets/logo.svg'
import LocationInput from './LocationInput.vue'
import ResultLink from './ResultLink.vue'
</script>

<template>
  <div class="shorten-link">
    <div class="logo">
      <img alt="Center AI" :src="logo" />
    </div>
    <div class="header">
      <span>Short link</span>
      <LocationInput />
      <button>Shorten it</button>
      <ResultLink location="https://center.ai/pl-sg/" />
    </div>
  </div>
</template>

<style scoped>
.shorten-link {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px;
  border-radius: 30px;
  gap: 32px;
  background-color: #ffffff;
  filter: drop-shadow(0px 15px 80px rgba(34, 3, 134, 0.06));
}

.logo {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;

  span {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #363c56;
    text-align: center;
  }
}

button {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: white;
  height: 46px;
  border: 0;
  border-radius: 46px;
  background-color: #4a24ac;
  cursor: pointer;
  filter: drop-shadow(0px 0px 30px rgba(54, 60, 86, 0.07));
}
</style>
