<script setup lang="ts">
import logo from '@/assets/logo.svg'
import fileCopy from './icons/file_copy.svg'
</script>

<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '40px',
      borderRadius: '30px',
      gap: '32px',
      backgroundColor: '#ffffff',
      filter: 'drop-shadow(0px 15px 80px rgba(34, 3, 134, 0.06))'
    }"
  >
    <div
      :style="{
        height: '92px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }"
    >
      <img alt="Center AI" :src="logo" />
    </div>
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '24px'
      }"
    >
      <span
        :style="{
          fontFamily: 'Montserrat',
          fontSize: '22px',
          fontWeight: '600',
          lineHeight: '28px',
          letterSpacing: '-0.01em',
          color: '#363c56',
          textAlign: 'center'
        }"
        >Short link</span
      >
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }"
      >
        <span
          :style="{
            fontFamily: 'Montserrat',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#4a24ac'
          }"
          >Link to shortcut</span
        >
        <input
          :style="{
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#363c56',
            border: '0',
            padding: '0'
          }"
          type="text"
          value="https://center.ai/pl/strona-glowna/"
        />
        <span :style="{ height: '1px', backgroundColor: '#4a24accc' }" />
      </div>
      <button
        :style="{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          color: 'white',
          height: '46px',
          border: '0',
          borderRadius: '46px',
          backgroundColor: '#4a24ac',
          cursor: 'pointer',
          filter: 'drop-shadow(0px 0px 30px rgba(54, 60, 86, 0.07))'
        }"
      >
        Shorten it
      </button>
      <div
        :style="{
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          backgroundColor: '#fafafa'
        }"
      >
        <span
          :style="{
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: '700',
            lineHeight: '17px',
            color: '#4A24AC'
          }"
          >https://center.ai/pl-sg/</span
        >
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
    </div>
  </div>
</template>
