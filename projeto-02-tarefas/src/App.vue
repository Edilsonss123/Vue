<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress"/>
		<NewTask @taskAdded="addtask"/>
		<TaskGrid :tasks="tasks"/>
	</div>
</template>

<script>
import TaskGrid from '@/components/TaskGrid.vue'
import NewTask from '@/components/NewTask.vue'
import TaskProgress from '@/components/TaskProgress.vue'
import busTask from '@/buses/busTask'
export default {
	components : {TaskGrid, NewTask, TaskProgress},
	data() {
		return {
			tasks: []
		}
	},
	methods: {
		addtask(task) {
			const sameName = t => t.name === task.name;
			const reallNew = this.tasks.filter(sameName).length === 0;
			!reallNew && alert('Tarefa já realizada');
			//linha abaixo reallNew && (expresão a ser realizada) equivale a if(reallNew){}
			reallNew && this.tasks.push({
				name: task.name,
				pending: task.pending || true
			});
		}
	},
	created() {
		busTask.deleteTask(index => {
			index >= 0 && this.tasks.splice(index,1);
		});
		busTask.changeStatusTask(index => {
			var status = this.tasks[index].pending;
			this.tasks[index].pending = !status;
		});
		const tasksStorage = localStorage.getItem('tasks') ;
		const taskArray = JSON.parse(tasksStorage) 
		this.tasks = Array.isArray(taskArray) ? taskArray : [];
	},
	computed: {
		progress() {
			const total = this.tasks.length;
			const done =  this.tasks.filter(t => !t.pending).length;
			return Math.round( done / total * 100 ) || 0;
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
