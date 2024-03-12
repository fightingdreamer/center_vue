<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import FormInput from '@/components/reusable/FormInput.vue'
import GeneratedLink from '@/components/shorten-link/GeneratedLink.vue'
import axios from 'axios'
import { shallowRef } from 'vue'
import { useRecentLinksStore } from '@/store/recentLinks'
import { absoluteUrl } from '@/lib/url'

const recentLinkStore = useRecentLinksStore()

const location = shallowRef<string>('')

const name = shallowRef<string>('')
const error = shallowRef<undefined | string>()

function onLocationChange(value: string) {
  location.value = value
}

async function onShortenClick() {
  try {
    const data = { location: location.value }
    const response = await axios.request<{ name: string }>({
      url: '/api/redirections/',
      data,
      method: 'post'
    })
    name.value = response.data.name
    error.value = undefined
    recentLinkStore.remember(name.value, data.location)
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error.value = err.response?.data?.location?.[0]
    }
  }
}
</script>

<template>
  <div class="shorten-link">
    <div class="logo">
      <Logo />
    </div>
    <div class="header">
      <span>Short link</span>
      <FormInput
        label="Link to shortcut"
        :placeholder="absoluteUrl('very-long-link')"
        :value="location"
        @change="onLocationChange"
        :error="error"
      />
      <button @click="onShortenClick">Shorten it</button>
      <GeneratedLink v-if="name" :name="name" />
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
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #363c56;
    text-align: center;
  }
}

button {
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

  &:hover {
    background-color: #6831f8;
  }

  &:active {
    filter: drop-shadow(0px 0px 10px rgba(87, 39, 213, 0.7));
  }
}
</style>
