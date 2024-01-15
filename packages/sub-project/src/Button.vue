<template>
  <el-tag>{{ tagValue }}</el-tag>
  <el-button @click="add">+1</el-button>
</template>

<script setup>
import { ref } from 'vue';

const tagValue = ref(0);
const add = () => {
  tagValue.value += 1
}
</script>