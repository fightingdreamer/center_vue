<script setup lang="ts">
defineProps<{
  label: string
  value: string
  placeholder: string
  error?: string
}>()

const emit = defineEmits<{
  change: [value: string]
}>()

function onChange(event: Event) {
  emit('change', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="location-input">
    <span class="label" :class="{ error: error }">{{ error ?? label }}</span>
    <input type="text" :placeholder="placeholder" :value="value" @change="onChange" />
    <span class="separator" />
  </div>
</template>

<style scoped>
.location-input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.label {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #4a24ac;

  &.error {
    color: red;
  }
}

input {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #363c56;
  border: 0;
  padding: 0;
}

.separator {
  height: 5px;
  border-bottom: 1px solid #4a24accc;
}
</style>
