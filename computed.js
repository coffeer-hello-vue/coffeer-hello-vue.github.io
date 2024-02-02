<script setup>
import {reactive, computed, ref} from 'vue'

const author = ref({
	name: 'John Doe', books: [1,2,3]});

</script>

<template>

	<p> Has published books; </p>
	<span> {{ author.value.books.length > 2 ? 'yes' : 'no'}} </span> 

</template>

