<script setup>
import {ref} from 'vue'
import variable from "@/assets/variable.json"


const variables = variable;


</script>


<template>
<li v-for="a in variables">
	{{a}}
</li>

</template>
