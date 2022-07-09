<template>
  <v-container>
    <v-row>
        <v-autocomplete
            auto-select-first
            clearable
            v-bind:items="availableLocales"
            @input="setLocale"
            v-model="locale"
        ></v-autocomplete>
    </v-row>
    <v-row>Rows per page: {{$vuetify.lang.t('$vuetify.dataTable.itemsPerPageText')}}</v-row>
  </v-container>
</template>

<script>
  export default {
    name: "LocaleSelect",
    data: function(){
        return {
            // todo: add vuetify langs to it
            availableLocales: [...new Set([
                ...this.$i18n.availableLocales,
                // ...this.$vuetify.lang.locales.keys()
            ])],
            locale: this.$i18n.locale,
        };
    },
    methods: {
        setLocale: function(){
            this.$i18n.locale = this.locale;
            this.$vuetify.lang.current = this.locale;
        }
    }
  }
</script>
