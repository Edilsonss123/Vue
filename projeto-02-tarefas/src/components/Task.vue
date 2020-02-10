<template>
    <div class="task" @click="changeStatusTask(indexTask)"
        :class="stateClass">
        <span class="close"  @click.stop="deleteTask(indexTask)">x</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
import busTask from '@/buses/busTask'

export default {
    props: {
        indexTask: {
            type: Number,
            required: true
        },
        task: {
            type: Object,
            required: true
        }
    }, 
    methods: {
        deleteTask(indexTask) {
            busTask.busDeleteTask(indexTask);
        },
        changeStatusTask(indexTask) {
            busTask.busChangeStatusTask(indexTask);
        }
    },
    computed: {
        stateClass(){
            return{
                pending : this.task.pending,
                done: !this.task.pending,
            }
        }
    }
}
</script>

<style>
    .task{
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .pending {
        border-left: 12px solid #983229;
        background-color: #f44336; 
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0a8f08;
        background-color: #4caf50;
        text-decoration: line-through;
    }
    .pending .close {
        background-color: #b73229;
    }
    .done .close {
        background-color: #0ABF08;
    }
    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center
    }
</style>
