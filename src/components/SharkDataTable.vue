<template>
  <v-data-table
    :headers="headers"
    :items="specimen_localized"
    item-key="species"
  ></v-data-table>
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
    ]
  }),
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
      console.info(h);
      console.info(this.$data.specimen);
      return h;
    },
    specimen_localized(){
      // translate all non-numeric fields
      let localized = [];
      for(let i=0, l=this.$data.specimen.length; i<l; i+=1){
        // copy the specimen and translate specific fields
        let s = this.$data.specimen[i];
        console.info(s);
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
