<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in fotos"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
    data() {
        return {
            fotos: [
				{src: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2019/10/13154859/Peugeot-2008-2020-1600-02-1160x712.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
        }
    },
}
</script>
<style lang="">
    
</style>