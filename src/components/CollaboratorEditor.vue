<template>
  <v-container>
    <v-col cols="12">
      <v-row>
        <v-text-field
          :label="$t('labels.collaborator.name')"
          prepend-icon="mdi-account"
          v-model="name"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          :label="$t('labels.collaborator.institution')"
          prepend-icon="mdi-office-building"
          v-model="institution"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          :label="$t('labels.collaborator.email')"
          prepend-icon="mdi-email"
          v-model="email"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-textarea
          :label="$t('labels.collaborator.focusArea')"
          prepend-icon="mdi-target"
          v-model="focusArea"
          rows="1"
          auto-grow
        ></v-textarea>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
        name: '',
        institution: '',
        focusArea: '',
        email: ''
    })
  }
</script>