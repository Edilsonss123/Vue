new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        exibirAlerta: function(){
            alert('Olá');
        },
        capturarValorInput: function(event){
            console.log(event.target.value);
            this.valor = event.target.value;
        }
    },
})