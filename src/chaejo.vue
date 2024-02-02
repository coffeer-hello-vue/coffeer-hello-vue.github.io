<script setup>
import {ref} from 'vue'

const show  = ref(true)
const list = ref([1,2,3])
const a= ref(true)
function showList(){
	this.show = !this.show

}
function addList(a){
	a = list.value.length +1
	list.value.push(a)
}
function delList(){
	list.value.pop(list.value.length)
}
function  reverseList(){
	const reversed = this.list.reverse()
	return reversed
	
}

		
</script>

<template>
<button @click = "showList()">List 렌더링 on/off </button>
 <button @click = "addList(a)">List 추가 </button>
<button @click = "delList()">List 제거 </button>
<button @click = "reverseList">List 뒤집기 </button>

<ul v-if = "show === true"><li v-for= "item of list">{{ item }} </li></ul>
<p v-else-if= "list.length">List is not empty, but hidden.</p>
<p v-else>List is empty </p>

</template>
