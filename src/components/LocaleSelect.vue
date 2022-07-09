<template>
  <v-container>
    <v-row>
        <v-autocomplete
            auto-select-first
            chips
            clearable
            deletable-chips
            :items="$i18n.availableLocales"
            v-model="$i18n.locale"
        ></v-autocomplete>
    </v-row>
    <v-row>Rows per page: {{$vuetify.lang.t('$vuetify.dataTable.itemsPerPageText')}}</v-row>
  </v-container>
</template>

<script>
  export default {
    name: "LocaleSelect",
    data: () => ({}),
  }
</script>
