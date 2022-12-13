<template>
<v-container>
  <v-row>
    <v-col>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('labels.default.search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="species"
      :search="search"
    ></v-data-table>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
  // TODO: the best practice for i18n of this data is:
  //  - create a file for each translation of the table (ie shark_species_data.en.js, ...ko.js, etc...)
  //  - add a language property in Vuex
  //  - in the mutation event -- reload the data and replace with new language
  // import shark_species from '../assets/shark_species_data.js'
  export default {
    data: () => ({
      search: '',
      // species: shark_species,
      example: {
          "order": "hexanchiformes",
          "family": "chlamydoselachidae",
          "genus": "chlamydoselachus",
          "species": "chlamydoselachus africana",
          "common_name": "southern african frilled shark",
          "discovery_year": "ebert",
          "discoverer": ""
      }
    }),
    computed: {
      species(){
        return this.$store.state.sharks;
      },
      headers(){
        return [{
            text: this.$t('labels.speciesTable.commonName'),
            align: 'start',
            value: 'common_name',
          },
          { text: this.$t('labels.speciesTable.order'), value: 'order' },
          { text: this.$t('labels.speciesTable.family'), value: 'family' },
          { text: this.$t('labels.speciesTable.genus'), value: 'genus' },
          { text: this.$t('labels.speciesTable.species'), value: 'species' },
        ]
      }
    }
  }
</script>