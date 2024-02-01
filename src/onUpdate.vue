<script setup>
import { ref, onUpdated } from 'vue'
const count = ref(0);
onUpdated ( () => { console.log ( document.getElementById('count').textCount) } )


</script>

<template>
<button id = "count" @click = "count++"> {{ count }} </button>
</template>
