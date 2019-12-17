var app = new Vue({
    el: "#desafio",
    data: {
       nome: "Edilson",
       idade: 21,
       imageLink : "https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2015/12/vuejs.jpg?resize=720%2C260&ssl=1"
    },
    methods: {
        numeroRandomico(){
            return Math.random();
        }
    },
});