<template>
  <v-autocomplete
    auto-select-first
    clearable
    dense
    hide-details
    prepend-icon="mdi-translate"
    v-bind:items="availableLocales"
    @input="setLocale"
    v-model="locale"
  ></v-autocomplete>
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
    },
    mounted(){
      this.$store.dispatch('setLocale', this.locale);
    }
  }
</script>
