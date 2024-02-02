<script setup>
import {ref} from 'vue'

let id  = 0 ;
const newTodo = ref('');
const todos = ref([	{ id: id++, issue: 'BackLog'},
			{ id: id++, issue: 'Todo'},
			{ id: id++, issue: 'Going Hawii'}
	]);
	
function removeTodo(todo){
this.todos = this.todos.filter(todos => todos !== todo ); 
console.log(todo.id);
}

function addTodo(){
	todos.value.push({id: id++, issue: newTodo.value}); 
}

</script>

<template>
	<form @submit.prevent = "addTodo">
	<input v-model="newTodo">
	<button> 할 일 추가 </button>
	</form>
	<ul>
		<li v-for="todo in todos">
		{{todo.issue}} - <button @click="removeTodo(todo)">Done</button>
		</li> 
	</ul>
</template>
