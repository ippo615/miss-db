<template>
  <v-col>
    <v-row>
      <hello-world />
    </v-row>
    <v-row>
      <locale-select />
    </v-row>
    <v-row>
      <hello-i18n />
    </v-row>
    <v-row>
      <length-slider-vue />
    </v-row>
    <v-row>
      <shark-size-editor-vue />
    </v-row>
    <v-row>
      <tag-data-editor-map />
    </v-row>
    <v-row>
      <basic-map-vue/>
    </v-row>
  </v-col>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import LocaleSelect from '@/components/LocaleSelect.vue'
  import HelloI18n from '@/components/HelloI18n.vue'
  import LengthSliderVue from '@/components/LengthSlider.vue'
  import SharkSizeEditorVue from '@/components/SharkSizeEditor.vue'
  import TagDataEditorMap from '@/components/TagDataEditorMap.vue'
  import BasicMapVue from '@/components/BasicMap.vue'

  export default {
    components: {
      HelloWorld,
      LocaleSelect,
      HelloI18n,
      LengthSliderVue,
      SharkSizeEditorVue,
      TagDataEditorMap,
      BasicMapVue
    },
  }
</script>
