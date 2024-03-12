import { ref, computed, shallowRef } from 'vue'
import { defineStore } from 'pinia'

export interface Link {
  name: string
  location: string
}

function loadLinks(): Array<Link> {
  const data = window.localStorage.getItem('recent-links') ?? '[]'
  return JSON.parse(data)
}

function saveLinks(links: Array<Link>) {
  const data = JSON.stringify(links)
  window.localStorage.setItem('recent-links', data)
}

export const useRecentLinksStore = defineStore('recent-links', () => {
  const links = shallowRef(loadLinks())
  const limit = shallowRef(3)

  function remember(name: string, location: string) {
    for (const link of links.value) {
      if (link.location == location) return
    }
    links.value = [{ name, location }, ...links.value].slice(0, limit.value)
    saveLinks(links.value)
  }

  return { links, remember }
})
