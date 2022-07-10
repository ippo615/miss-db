<template>
  <v-container>
    <length-slider-vue v-model="preCaudalLength">{{$t('labels.sharkSize.preCaudalLength')}}</length-slider-vue>
    <length-slider-vue v-model="finLength">{{$t('labels.sharkSize.finLength')}}</length-slider-vue>
    <length-slider-vue v-model="tailLength">{{$t('labels.sharkSize.tailLength')}}</length-slider-vue>
    <length-slider-vue v-model="standardLength">{{$t('labels.sharkSize.standardLength')}}</length-slider-vue>
    <length-slider-vue v-model="girth">{{$t('labels.sharkSize.girth')}}</length-slider-vue>
  </v-container>
</template>

<script>
import LengthSliderVue from './LengthSlider.vue'

export default {
  name: 'SharkSizeEditor',
  components: {
    LengthSliderVue
  },
  data: () => ({
    preCaudalLength: 0,
    finLength: 0,
    tailLength: 0,
    standardLength: 0,
    girth: 0,
  })
}
</script>
