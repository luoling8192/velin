<script setup lang="ts">
import { useCounter } from '@vueuse/core'

defineProps<{
  text: string
  number: number
  check: boolean
}>()

const { count } = useCounter()
</script>

<template>
  <div>
    <div>{{ text }}</div>
    <div>{{ number }}</div>
    <div>{{ check }}</div>
    <div>Internal count: {{ count }}</div>
  </div>
</template>
