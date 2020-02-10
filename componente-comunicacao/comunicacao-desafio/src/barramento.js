import Vue from 'vue'
export default new Vue({
    methods: {
        exibirDetalheUsuario(usuario){
            this.$emit('exibirDadosUsuario', usuario);
        },
        novoUsuarioExibicao(callback){
            this.$on('exibirDadosUsuario', callback);
        }
    },
})