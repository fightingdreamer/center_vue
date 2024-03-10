<script setup lang="ts"></script>

<template>
  <div class="location-input">
    <span class="label">Link to shortcut</span>
    <input type="text" value="https://center.ai/pl/strona-glowna/" />
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
