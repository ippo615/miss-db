<template>
  <v-container>

    <v-form>

      <v-card>
        <v-card-title>{{$t('labels.sex.sex')}} <v-icon>mdi-filter</v-icon></v-card-title>
        <v-card-text>
          <v-switch
            v-model="dataFilter.sex.male"
            :label="$t('labels.sex.male')"
            :hint="`${dataStats.sex.male} / ${specimen.length}`"
            persistent-hint
            inset
            dense
          ></v-switch>
          <v-switch
            v-model="dataFilter.sex.female"
            :label="$t('labels.sex.female')"
            :hint="`${dataStats.sex.female} / ${specimen.length}`"
            persistent-hint
            inset
            dense
          ></v-switch>
        </v-card-text>
      </v-card>

    </v-form>

    <v-data-table
      :headers="headers"
      :items="specimenLocalized"
      item-key="species"
    ></v-data-table>
  </v-container>
</template>

<script>
// import shark_species_data from '@/assets/shark_species_data';
import SharkSpecimen from '@/models/shark_specimen';
export default {
  name: 'SharkDataTable',
  data: () => ({
    specimen: [
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom(),
      SharkSpecimen.createRandom()
    ],
    dataFilter: {
      // Options: true => show, false => hide
      sex: {
        male: true,
        female: true
      },
      maturity: {
        youngOfYear: true,
        immature: true,
        mature: true
      },
      tagType: {
        dart: true,
        psat: true,
        acoustic: true
      },
      samplesTaken: {
        genetics: true,
        biopsy: true,
        blood: true,
        mouthSwab: true,
        analSwab: true
      },
      releaseCondition: {
        excellent: true,
        good: true,
        fair: true,
        poor: true,
        doa: true
      },
      tide: {
        rising: true,
        falling: true,
        high: true,
        low: true
      },
      // Numeric
      preCaudalLength: {min: 0, max: 9999},
      finLength: {min: 0, max: 9999},
      tailLength: {min: 0, max: 9999},
      standardLength: {min: 0, max: 9999},
      girth: {min: 0, max: 9999},
      hookTime: {min: 0, max: 9999},
      soakTime: {min: 0, max: 9999},
      depth: {min: 0, max: 9999},
      salinity: {min: 0, max: 9999},
      temperature: {min: 0, max: 9999},
    }
  }),
  methods: {
    removeMatchingProperty(objects, targetProperty, targetValue){
      let subset = [];
      for( let i=0, l=objects.length; i<l; i+=1 ){
        let o = objects[i];
        if(o[targetProperty] != targetValue){
          subset.push(o);
        }
      }
      return subset;
    },
    allValuesAre(object, value){
      let values = Object.values(object)
      for( let i=0, l=values.length; i<l; i+=1 ){
        if(value[i] != value){
          return false;
        }
      }
      return true;
    },
    statsUpdateCount(stats, object, keys){
      for( let i=0, l=keys.length; i<l; i+=1 ){
        let key = keys[i];
        stats[key][object[key]] += 1;
      }
    },
    statsUpdateMinMax(stats, object, keys){
      for( let i=0, l=keys.length; i<l; i+=1 ){
        let key = keys[i];
        let val = object[key];
        if( val < stats[key].min ){stats[key].min = val}
        if( val > stats[key].max ){stats[key].max = val}
      }
    }
  },
  computed: {
    headers(){
      let h = [];
      for(let i=0, l=SharkSpecimen.fields.length; i<l; i+=1){
        let field = SharkSpecimen.fields[i];
        h.push({
            text: this.$t(`labels.sharkDataHeaders.${field}`),
            align: 'start',
            sortable: false,
            value: field,
        })
      }
      return h;
    },
    dataStats(){
      let stats = {
        // Options: direct count
        sex: {
          male: 0,
          female: 0
        },
        maturity: {
          youngOfYear: 0,
          immature: 0,
          mature: 0
        },
        tagType: {
          dart: 0,
          psat: 0,
          acoustic: 0
        },
        samplesTaken: {
          genetics: 0,
          biopsy: 0,
          blood: 0,
          mouthSwab: 0,
          analSwab: 0
        },
        releaseCondition: {
          excellent: 0,
          good: 0,
          fair: 0,
          poor: 0,
          doa: 0
        },
        tide: {
          rising: 0,
          falling: 0,
          high: 0,
          low: 0
        },
        // Numeric
        preCaudalLength: {min: 9e99, max: -9e99},
        finLength: {min: 9e99, max: -9e99},
        tailLength: {min: 9e99, max: -9e99},
        standardLength: {min: 9e99, max: -9e99},
        girth: {min: 9e99, max: -9e99},
        hookTime: {min: 9e99, max: -9e99},
        soakTime: {min: 9e99, max: -9e99},
        depth: {min: 9e99, max: -9e99},
        salinity: {min: 9e99, max: -9e99},
        temperature: {min: 9e99, max: -9e99},
      };
      let optionKeys = ["sex", "maturity", "tagType", "samplesTaken", "releaseCondition", "tide"];
      let numericKeys = ["preCaudalLength", "finLength", "tailLength", "standardLength", "girth", "hookTime", "soakTime", "depth", "salinity", "temperature"];
      let specimen = this.$data.specimen;
      for( let i=0, l=specimen.length; i<l; i+=1 ){
        let instance = specimen[i];
        this.statsUpdateCount(stats, instance, optionKeys);
        this.statsUpdateMinMax(stats, instance, numericKeys);
      }
      return stats;
    },
    specimenFiltered(){
      // first invert the options filter so we remove from the list
      let optionKeys = ["sex", "maturity", "tagType", "samplesTaken", "releaseCondition", "tide"];
      // let numericKeys = ["preCaudalLength", "finLength", "tailLength", "standardLength", "girth", "hookTime", "soakTime", "depth", "salinity", "temperature"];
      let results = this.$data.specimen;
      for(let i=0, l=optionKeys.length; i<l; i+=1){
        let optionKey = optionKeys[i];
        // if everything is visible then do not filter by that property
        let option = this.$data.dataFilter[optionKey];
        if(this.allValuesAre(option, true)){
          continue;
        }
        // otherwise, remove things that should not be shown
        for( let optionValue in option ){
          if(!option[optionValue]){
            results = this.removeMatchingProperty(results, optionKey, optionValue);
          }
        }
      }
      console.info(this.dataStats)
      return results;
    },
    specimenLocalized(){
      // translate all non-numeric fields
      let localized = [];
      let initialSpecimen = this.specimenFiltered;
      for(let i=0, l=initialSpecimen.length; i<l; i+=1){
        // copy the specimen and translate specific fields
        let s = initialSpecimen[i];
        let specimen = {
          ...s,
          sex: this.$t(`labels.sex.${s.sex}`),
          maturity: this.$t(`labels.maturity.${s.maturity}`),
          tagType: this.$t(`labels.tagType.${s.tagType}`),
          species: this.$t(`labels.species.${s.species}`), // TODO: proper handling of species
          samplesTaken: [
            s.samplesTaken.map(v => this.$t(`labels.samplesTaken.${v}`))
          ],
          releaseCondition: this.$t(`labels.releaseCondition.${s.releaseCondition}`)
        };
        localized.push(specimen);
      }
      return localized;
    }
  }
}
</script>
