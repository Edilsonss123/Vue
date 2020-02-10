import Vue from 'vue'
export default new Vue({
    methods: {
        busDeleteTask(task){
            this.$emit('deleteTask', task);
        },
        deleteTask(callback){
            this.$on('deleteTask', callback);
        },
        busChangeStatusTask(task){
            this.$emit('changeStatusTask', task);
        },
        changeStatusTask(callback){
            this.$on('changeStatusTask', callback);
        }
    },
})