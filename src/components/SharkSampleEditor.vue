<template>
  <v-container>
    <v-col cols="12">

      <v-row>
        <v-autocomplete
          v-model="sex"
          prepend-icon="mdi-gender-male-female"
          auto-select-first
          clearable
          :items="items.sex"
          :label="$t('labels.sex.sex')"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-autocomplete
          v-model="maturity"
          prepend-icon="mdi-radiobox-blank"
          auto-select-first
          clearable
          :items="items.maturity"
          :label="$t('labels.maturity.maturity')"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-autocomplete
          v-model="tagType"
          prepend-icon="mdi-tag"
          auto-select-first
          clearable
          :items="items.tagType"
          :label="$t('labels.tagType.tagType')"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-autocomplete
          v-model="releaseCondition"
          prepend-icon="mdi-tag"
          auto-select-first
          clearable
          :items="items.releaseCondition"
          :label="$t('labels.releaseCondition.releaseCondition')"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-autocomplete
          v-model="samplesTaken"
          prepend-icon="mdi-radiobox-blank"
          auto-select-first
          clearable
          chips
          deletable-chips
          multiple
          :items="items.samplesTaken"
          :label="$t('labels.samplesTaken.samplesTaken')"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.preCaudalLength')"
          prepend-icon="mdi-human-male-height"
          v-model="preCaudalLength"
          :suffix="$t('units.short.cm')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.finLength')"
          prepend-icon="mdi-human-male-height"
          v-model="finLength"
          :suffix="$t('units.short.cm')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.tailLength')"
          prepend-icon="mdi-human-male-height"
          v-model="tailLength"
          :suffix="$t('units.short.cm')"
          type="number"
        ></v-text-field>
      </v-row>
      
      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.standardLength')"
          prepend-icon="mdi-human-male-height"
          v-model="standardLength"
          :suffix="$t('units.short.cm')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.girth')"
          prepend-icon="mdi-human-male-height"
          v-model="girth"
          :suffix="$t('units.short.cm')"
          type="number"
        ></v-text-field>
      </v-row>

    <v-row>
      <location-input v-bind.sync="tagLocation" :initialLocation="tagLocation"/>
    </v-row>

    </v-col>
  </v-container>
</template>

<script>
import LocationInput from './LocationInput.vue'
export default {
  name: 'SharkSampleEditor',
  components: {
    LocationInput
  },
  created(){
    this.updateLocale();
  },
  data: () => ({
    sex: '',
    maturity: '',
    tagType: '',
    preCaudalLength: 0,
    finLength: 0,
    tailLength: 0,
    standardLength: 0,
    girth: 0,
    tagLocation: {
      lat: 24.786734541988906,
      lng: -81.60644531250001
    }
  }),
  // items within a select element should be computed so they are translated correctly
  computed: {
    items(){
      return {
        // SEX
        sex: [{
          text: this.$t("labels.sex.male"),
          value: "MALE",
        }, {
          text: this.$t("labels.sex.female"),
          value: "FEMALE",
        }],
        // MATURITY
        maturity: [{
          text: this.$t("labels.maturity.youngOfYear"),
          value: "YOUNG_OF_YEAR",
        }, {
          text: this.$t("labels.maturity.regular"),
          value: "REGULAR",
        }],
        // TAG TYPE
        tagType: [{
          text: this.$t("labels.tagType.dart"),
          value: "DART",
        }],
        // SAMPLES TAKEN
        samplesTaken: [{
          text: this.$t("labels.samplesTaken.genetics"),
          value: "GENETICS"
        }, {
          text: this.$t("labels.samplesTaken.biopsy"),
          value: "BIOPSY"
        }, {
          text: this.$t("labels.samplesTaken.blood"),
          value: "BLOOD"
        }, {
          text: this.$t("labels.samplesTaken.mouthSwab"),
          value: "MOUTH_SWAB"
        }, {
          text: this.$t("labels.samplesTaken.analSwab"),
          value: "ANAL_SWAB"
        }],
        // RELEASE CONDITION
        releaseCondition: [{
          text: this.$t("labels.releaseCondition.excellent"),
          value: "EXCELLENT"
        }, {
          text: this.$t("labels.releaseCondition.other"),
          value: "OTHER"
        } ]
      };
    },
  },
}
</script>
