new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor != 37 ? 'Valor Diferente de 37' : 'Valor Igual a 37'
        }
    },
    watch: {
        resultado(newValue, oldValue){
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    },
});