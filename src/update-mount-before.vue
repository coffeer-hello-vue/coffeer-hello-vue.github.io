<script setup>
import { ref, onUpdated, onMounted, onBeforeUpdate} from 'vue'
const count = ref(0);
onUpdated ( () => { console.log (document.getElementById('count').textContent + "= onUpdated" ) } );
onMounted ( () => { console.log (document.getElementById('count').textContent +"= onMounted") });
onBeforeUpdate ( () => { console.log (document.getElementById('count').textContent + "= onBeforeUpdate" )  });

</script>

<template>
<button id = "count" @click = "count++"> {{ count }} </button>
</template>
