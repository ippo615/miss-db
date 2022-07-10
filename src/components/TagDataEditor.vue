<template>
  <v-container>

    <v-col cols="12">
      <v-row>
        <v-text-field
          :label="$t('labels.tag.tagNumber')"
          prepend-icon="mdi-tag"
          v-model="tagNumber"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.tag.longitude')"
          prepend-icon="mdi-longitude"
          v-model="tagNumber"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.tag.latitude')"
          prepend-icon="mdi-latitude"
          v-model="tagNumber"
        ></v-text-field>
      </v-row>
      
      <v-row>
        <v-menu
          ref="dateMenu"
          v-model="dateMenu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              :label="$t('labels.tag.date')"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="dateMenu = false"
            >
              {{$t('labels.default.cancel')}}
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.dateMenu.save(date)"
            >
              {{$t('labels.default.ok')}}
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-row>

      <v-row>
        <v-textarea
          :label="$t('labels.tag.description')"
          rows="2"
          prepend-icon="mdi-text-long"
          v-model="tagDescription"
        >
        </v-textarea>
      </v-row>

    </v-col>

  </v-container>
</template>

<script>
export default {
  name: 'TagDataEditor',
  components: {
  },
  data: () => ({
    "tagNumber": "",
    "locationTaggedLongitude": 0.0,
    "locationTaggedLatitude": 0.0,
    "dateTagged": (new Date()),
    "tagDescription": "",
  })
}
</script>
