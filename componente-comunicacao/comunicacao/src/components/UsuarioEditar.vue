<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{idade}}</strong></p>
        <button @click="alterarIdade">Editar idade</button>
        <button @click="alterarIdadeFn(28)">Editar idade (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento';
export default {
    props:{
        idade: Number,
        alterarIdadeFn: Function
    }, 
    methods: {
        alterarIdade(){
            this.idade++
            var idade1 = this.idade ;
            barramento.alterarIdade(idade1);
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
