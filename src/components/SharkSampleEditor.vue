<template>
  <v-container>
    <v-col cols="12">

      <v-row>
        <v-autocomplete
          v-model="species"
          :items="sharkSpecies"
          clearable
          prepend-icon="mdi-fish"
          :label="$t('labels.speciesEntry.species')"
          item-text="text"
          item-value="value"
        >
          <template v-slot:selection="data">
            <v-list-item-content
              v-bind="data.attrs"
              :input-value="data.selected"
              @click="data.select"
            >
              <v-list-item-title>{{data.item.displayCommonName}}</v-list-item-title>
              <v-list-item-subtitle style="opacity: 0.5">{{$t(data.item.order)}} / {{$t(data.item.family)}} / {{$t(data.item.genus)}} / {{$t(data.item.species)}}</v-list-item-subtitle>
            </v-list-item-content>
          </template>

          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item"></v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.common_name"></v-list-item-title>
                <v-list-item-subtitle>{{$t(data.item.order)}} / {{$t(data.item.family)}} / {{$t(data.item.genus)}} / {{$t(data.item.species)}}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </v-row>

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
          :label="$t('labels.hookTime')"
          prepend-icon="mdi-timer"
          v-model="hookTime"
          :suffix="$t('units.time.minutes')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.soakTime')"
          prepend-icon="mdi-timer"
          v-model="soakTime"
          :suffix="$t('units.time.minutes')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.waterCondition.depth')"
          prepend-icon="mdi-water"
          v-model="depth"
          :suffix="$t('units.length.meters')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.waterCondition.salinity')"
          prepend-icon="mdi-shaker-outline"
          v-model="salinity"
          :suffix="$t('units.partsPerThousand')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.waterCondition.temperature')"
          prepend-icon="mdi-thermometer-water"
          v-model="temperature"
          :suffix="$t('units.temperature.celsius')"
          type="number"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-autocomplete
          v-model="tide"
          prepend-icon="mdi-waves"
          auto-select-first
          clearable
          :items="items.tide"
          :label="$t('labels.tide.tide')"
        ></v-autocomplete>
      </v-row>

    <v-row>
      <location-input @update:lat="onUpdateLat" @update:lng="onUpdateLng" :initialLocation="tagLocation"/>
    </v-row>

    <v-row>
      <v-btn block @click="saveSample">
        {{$t('labels.action.saveSample')}}
      </v-btn>
    </v-row>

    </v-col>
  </v-container>
</template>

<script>
import shark_species_data from '@/assets/shark_species_data';
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
    },
    species: '',
    samplesTaken: [],
    releaseCondition: '',
    hookTime: 0,
    soakTime: 0,
    depth: 0,
    tide: '',
    salinity: 0,
    temperature: 0
  }),
  // items within a select element should be computed so they are translated correctly
  computed: {
    items(){
      return {
        // SEX
        sex: [{
          text: this.$t("labels.sex.male"),
          value: "male",
        }, {
          text: this.$t("labels.sex.female"),
          value: "female",
        }],
        // MATURITY
        maturity: [{
          text: this.$t("labels.maturity.youngOfYear"),
          value: "youngOfYear",
        }, {
          text: this.$t("labels.maturity.immature"),
          value: "immature",
        }, {
          text: this.$t("labels.maturity.mature"),
          value: "mature",
        }],
        // TAG TYPE
        tagType: [{
          text: this.$t("labels.tagType.dart"),
          value: "dart",
        }, {
          text: this.$t("labels.tagType.psat"),
          value: "psat",
        }, {
          text: this.$t("labels.tagType.acoustic"),
          value: "acoustic",
        }],
        // SAMPLES TAKEN
        samplesTaken: [{
          text: this.$t("labels.samplesTaken.genetics"),
          value: "genetics"
        }, {
          text: this.$t("labels.samplesTaken.biopsy"),
          value: "biopsy"
        }, {
          text: this.$t("labels.samplesTaken.blood"),
          value: "blood"
        }, {
          text: this.$t("labels.samplesTaken.mouthSwab"),
          value: "mouthSwab"
        }, {
          text: this.$t("labels.samplesTaken.analSwab"),
          value: "analSwab"
        }],
        // RELEASE CONDITION
        releaseCondition: [{
          text: this.$t("labels.releaseCondition.excellent"),
          value: "excellent"
        }, {
          text: this.$t("labels.releaseCondition.good"),
          value: "good"
        }, {
          text: this.$t("labels.releaseCondition.fair"),
          value: "fair"
        }, {
          text: this.$t("labels.releaseCondition.poor"),
          value: "poor"
        }, {
          text: this.$t("labels.releaseCondition.doa"),
          value: "doa"
        }],
        // TIDE
        tide: [{
          text: this.$t("labels.tide.rising"),
          value: "rising"
        }, {
          text: this.$t("labels.tide.falling"),
          value: "falling"
        }, {
          text: this.$t("labels.tide.high"),
          value: "high"
        }, {
          text: this.$t("labels.tide.low"),
          value: "low"
        }]
      };
    },
    sharkSpecies(){
      // return shark_species_data;
      let sharks = [...shark_species_data];
      for(let i=0, l=sharks.length; i<l; i+=1 ){
        var shark = sharks[i];
        let names = [
            this.$t(shark.order),
            this.$t(shark.family),
            this.$t(shark.genus),
            this.$t(shark.species),
        ]
        shark.text = `${names.join(' / ')} (${this.$t(shark.common_name)})`;
        shark.value = shark.speciesId;
        shark.value = i;
        // Convert the common name to start with caps: ie "nine tooth shark" -> "Nine Tooth Shark"
        shark.displayCommonName = shark.common_name.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
        // shark.text = shark.common_name;
        // shark.value = shark.common_name;
      }
      return sharks;
    }
  },
  methods: {
    saveSample(){
      console.info(this.$data)
    },
    onUpdateLat(lat){
      this.$data.tagLocation.lat = lat;
    },
    onUpdateLng(lng){
      this.$data.tagLocation.lng = lng;
    },
  }
}
</script>
