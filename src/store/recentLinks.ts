import { ref, computed, shallowRef } from 'vue'
import { defineStore } from 'pinia'

export interface Link {
  name: string
  location: string
}

export const useRecentLinksStore = defineStore('recent-links', () => {
  const links = shallowRef(new Array<Link>())
  const limit = shallowRef(3)

  function remember(name: string, location: string) {
    for (const link of links.value) {
      if (link.location == location) return
    }
    links.value = [{ name, location }, ...links.value].slice(0, limit.value)
  }

  return { links, remember }
})
