<template>
<v-container>
  <v-row>
    <v-col cols="4">
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
          type="number"
          v-model="location.lng"
          @input="updateLatLng"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.tag.latitude')"
          prepend-icon="mdi-latitude"
          type="number"
          v-model="location.lat"
          @input="updateLatLng"
        ></v-text-field>
      </v-row>
      
      <!-- Keyboard input date -->
      <!-- <v-row>
        <v-text-field
          v-model="date"
          :label="$t('labels.tag.date')"
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          type="date"
        ></v-text-field>
      </v-row> -->

      <!-- Mouse GUI Date Select-->
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
    
    <v-col cols="8">
      <l-map ref="map" :zoom="map.zoom" :center="map.center">
        <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
        <l-marker ref="mapMarker" :lat-lng.sync="location" draggable></l-marker>
      </l-map>
    </v-col>

  </v-row>
</v-container>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  name: 'TagDataEditor',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    "tagNumber": "",
    "location": {"lat":51.504, "lng":-0.159},
    "dateTagged": (new Date()),
    "tagDescription": "",
    "map": {
      "url": 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      "attribution": '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      "zoom": 15,
      "center": [51.505, -0.159],
    }
  }),
  methods: {
    updateLatLng: function(){
        // this.$refs.mapMarker.setLatLng(this.location)
        let map = this.$refs.map.mapObject;
        map.flyTo(this.location);
    }
  }
}
</script>
