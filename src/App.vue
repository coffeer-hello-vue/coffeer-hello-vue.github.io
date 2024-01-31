<script setup>
import {ref} from 'vue';

const awesome = ref(true);

function toogleAwesome(){

	awesome.value = !awesome.value
}

function isAwesome(){
	return	awesome.value
}
</script>

<template>

	<button @click='toogleAwesome()'>toggle</button>

<h1 v-if="isAwesome()"> Vue is awesome! </h1>
<h1 v-else> oh no 😥</h1>

</template>
