<script setup>
import {ref} from 'vue'
import category from "@/assets/category.json"


const categories = category;


</script>


<template>
<li v-for="a in categories">
	{{a.name}}----{{a.code}}
</li>



</template>
