<script setup>
function say(message){
	alert(message)
}

</script>

<template>
	<button @click="say('hello')">Say Hello</button>
	<button @click= "say('bye')">Say Bye </button>

</template>
