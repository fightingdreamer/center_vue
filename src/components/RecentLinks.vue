<script setup lang="ts">
import fileCopy from './icons/file_copy.svg'
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <span
      :style="{
        padding: '0 40px 0 40px',
        fontFamily: 'Montserrat',
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '17px'
      }"
      >Last links</span
    >
    <div
      :style="{
        padding: '14px',
        borderRadius: '40px',
        border: '2px solid rgba(103, 108, 128, 0.16)'
      }"
    >
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          filter: 'drop-shadow(0px 15px 80px rgba(34, 3, 134, 0.06))'
        }"
      >
        <div
          :style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            padding: '16px 40px 16px 40px', // note: :first-child
            borderRadius: '32px 32px 16px 16px',
            backgroundColor: '#ffffff'
          }"
        >
          <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: '1' }">
            <span
              :style="{
                fontFamily: 'Montserrat',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '17px',
                color: 'rgba(54, 60, 86, 1)'
              }"
              >https://center.ai/pl/blog/</span
            >
            <span
              :style="{
                fontFamily: 'Montserrat',
                fontSize: '15px',
                fontWeight: '700',
                lineHeight: '17px',
                color: 'rgba(74, 36, 172, 1)'
              }"
              >https://center.ai/pl-b/</span
            >
          </div>
          <button
            :style="{
              display: 'flex',
              alignItems: 'center',
              placeContent: 'center',
              width: '24px',
              height: '24px',
              border: '0',
              cursor: 'pointer',
              backgroundColor: 'transparent'
            }"
          >
            <img :src="fileCopy" alt="File copy" :style="{ width: '18px', height: '21px' }" />
          </button>
        </div>
        <div
          :style="{
            padding: '16px 40px 16px 40px',
            borderRadius: '16px',
            backgroundColor: '#ffffff'
          }"
        >
          test
        </div>
        <div
          :style="{
            padding: '16px 40px 16px 40px',
            borderRadius: '16px 16px 32px 32px', // note: :last-child
            backgroundColor: '#ffffff'
          }"
        >
          test
        </div>
      </div>
    </div>
  </div>
</template>
