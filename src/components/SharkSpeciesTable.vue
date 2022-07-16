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
  import shark_species from '../assets/shark_species_data.js'
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Common Name',
            align: 'start',
            value: 'common_name',
          },
          { text: 'Order', value: 'order' },
          { text: 'Family', value: 'family' },
          { text: 'Genus', value: 'genus' },
          { text: 'Species', value: 'species' },
        ],
        species: shark_species,
        example: {
            "order": "hexanchiformes",
            "family": "chlamydoselachidae",
            "genus": "chlamydoselachus",
            "species": "chlamydoselachus africana",
            "common_name": "southern african frilled shark",
            "discovery_year": "ebert",
            "discoverer": ""
        },
      }
    }
  }
</script>