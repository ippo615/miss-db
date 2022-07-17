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
    <v-row>
      <basic-map-vue/>
    </v-row>
    <v-row>
      <!-- <location-input-vue :location.sync="location"/> -->
      <location-input-vue v-bind.sync="location1" :initialLocation="location1"/>
    </v-row>
    <v-row>
      <!-- <location-input-vue :location.sync="location"/> -->
      <location-input-vue v-bind.sync="location2" :initialLocation="location2"/>
    </v-row>
    <v-row>
      <shark-sample-editor-vue />
    </v-row>
    <v-row><shark-species-table/></v-row>
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
  import SharkSpeciesTable from '@/components/SharkSpeciesTable.vue'
  import LocationInputVue from '@/components/LocationInput.vue'
  import SharkSampleEditorVue from '@/components/SharkSampleEditor.vue'

  export default {
    components: {
      HelloWorld,
      LocaleSelect,
      HelloI18n,
      LengthSliderVue,
      SharkSizeEditorVue,
      TagDataEditorMap,
      BasicMapVue,
      SharkSpeciesTable,
      LocationInputVue,
      SharkSampleEditorVue,
    },
    data: () => ({
      "location1": {"lat": 30, "lng": -85},
      "location2": {"lat": 44, "lng": -80},
    })
  }
</script>
