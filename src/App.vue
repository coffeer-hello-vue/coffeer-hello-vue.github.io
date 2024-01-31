<script setup>
import { ref, onMounted } from 'vue'

// reactive state 초기값 선언
const count = ref({cnt: 0, name : "Jeon"})

//function that mutate state and trigger updates
function increment(){
	count.value.cnt = count.value.cnt+2
	count.value.name = count.value.name.split('').reverse().join('')//.join('')
}

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
})


</script>

	<template>
		<button @click="increment"> Count is: {{ count.cnt+count.name }}</button>
	</template>

<style scoped>
button {
	font-weight: bold;
}
</style>
