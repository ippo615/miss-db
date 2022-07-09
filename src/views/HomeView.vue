<template>
  <v-col>
    <hello-world />
    <v-row>
      <locale-select />
    </v-row>
    <v-row>
      <hello-i18n />
    </v-row>
  </v-col>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import LocaleSelect from '@/components/LocaleSelect.vue'
  import HelloI18n from '@/components/HelloI18n.vue'

  export default {
    components: {
      HelloWorld,
      LocaleSelect,
      HelloI18n,
    },
  }
</script>
