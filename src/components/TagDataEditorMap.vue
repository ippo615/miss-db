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
          v-model="tagMarker.position.lng"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          :label="$t('labels.tag.latitude')"
          prepend-icon="mdi-latitude"
          v-model="tagMarker.position.lat"
        ></v-text-field>
      </v-row>
      
      <!-- Keyboard input date -->
      <v-row>
        <v-text-field
          v-model="date"
          :label="$t('labels.tag.date')"
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          type="date"
        ></v-text-field>
      </v-row>

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

    <!-- Leaflet map -->
    <!-- <v-col>
      <l-map>
        <l-control-layers
          :collapsed="false"
          :sort-layers="true"
        />
        <l-tile-layer
          layer-type="base"
        />
        <l-control-zoom />
        <l-control-attribution />
        <l-control-scale :imperial="imperial" />
        <l-marker
          :visible="tagMarker.visible"
          :draggable="tagMarker.draggable"
          :lat-lng.sync="tagMarker.position"
          :icon="tagMarker.icon"
          @click="alert(marker)"
        >
          <l-popup :content="marker.tooltip" />
          <l-tooltip :content="marker.tooltip" />
        </l-marker>
      </l-map>
    </v-col> -->

    <v-col>
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
      </l-map>
    </v-col>

  </v-container>
</template>

<script>
// import L from 'leaflet';
import { latLng } from "leaflet";
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  name: 'TagDataEditorMap',
  components: {
    LMap,
    LTileLayer,
  },
  data: () => ({
    "tagNumber": "",
    "locationTaggedLongitude": 0.0,
    "locationTaggedLatitude": 0.0,
    "dateTagged": (new Date()),
    "tagDescription": "",
    "tagMarker": {
      "id": 'm1',
      "position": {
        "lat": 51.505,
        "lng": -0.09
      },
      "tooltip": 'Drag me to change lat/lon',
      "draggable": true,
      "visible": true,
    },
    "zoom": 13,
    "center": latLng(47.41322, -1.219482),
    "url": 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    "attribution": '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    "withPopup": latLng(47.41322, -1.219482),
    "withTooltip": latLng(47.41422, -1.250482),
    "currentZoom": 11.5,
    "currentCenter": latLng(47.41322, -1.219482),
    "showParagraph": false,
    "mapOptions": {
      "zoomSnap": 0.5
    },
    "showMap": true
  }),
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
}
</script>
