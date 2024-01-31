<script setup>
import {ref} from 'vue'
import variable from "@/assets/variable.json"


const variables = variable;


</script>

<template>
<template v-for="(a) in variables">
<li v-if="a.objectVar">
	{{a}}
</li>
</template>
</template>
