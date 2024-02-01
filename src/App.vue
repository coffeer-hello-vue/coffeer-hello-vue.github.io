<script setup>
import {ref} from 'vue'
import Child from './components/Child.vue'
const pocketMoney = ref("퇴실 할 시간 입니다.");
</script>

<template>

<Child :pocketMoney="pocketMoney" />

</template>
