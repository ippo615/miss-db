<template>
  <v-container>
    <v-col cols="12">

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.preCaudalLength')"
          prepend-icon="mdi-human-male-height"
          v-model="preCaudalLength"
          :suffix="$t('units.short.cm')"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.finLength')"
          prepend-icon="mdi-human-male-height"
          v-model="finLength"
          :suffix="$t('units.short.cm')"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.tailLength')"
          prepend-icon="mdi-human-male-height"
          v-model="tailLength"
          :suffix="$t('units.short.cm')"
        ></v-text-field>
      </v-row>
      
      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.standardLength')"
          prepend-icon="mdi-human-male-height"
          v-model="standardLength"
          :suffix="$t('units.short.cm')"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.sharkSize.girth')"
          prepend-icon="mdi-human-male-height"
          v-model="girth"
          :suffix="$t('units.short.cm')"
        ></v-text-field>
      </v-row>

    </v-col>
  </v-container>
</template>

<script>

export default {
  name: 'SharkSizeEditor',
  data: () => ({
    preCaudalLength: 0,
    finLength: 0,
    tailLength: 0,
    standardLength: 0,
    girth: 0,
  })
}
</script>
