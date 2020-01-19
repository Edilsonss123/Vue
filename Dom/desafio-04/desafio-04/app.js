new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		class3: '',
		class4: 'quadrado',
		perigo: true,
		cor5: '',
		estilo5: {
			widht : '100px',
			height: '100px'
		},
		width : '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 === 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		setPerigo(event) {
			if(event.target.value == "true"){
				this.perigo = true
			}else{
				this.perigo = false
			}
		},

		iniciarProgresso() {
			let valor = 0
			const temporiador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if (valor == 100) {
					clearInterval(temporiador)
				}
			}, 1000)
		}
	}
})
