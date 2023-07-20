<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="col-sm-6 col-md-4">
        <v-row>
          <v-text-field
            :label="$t('labels.tag.latitude')"
            prepend-icon="mdi-latitude"
            type="number"
            v-model.number="location.lat"
            @change="updateLatLng"
            @mouseup="updateLatLng"
          ></v-text-field>
        </v-row>

        <v-row>
          <v-text-field
            :label="$t('labels.tag.longitude')"
            prepend-icon="mdi-longitude"
            type="number"
            v-model.number="location.lng"
            @change="updateLatLng"
            @mouseup="updateLatLng"
          ></v-text-field>
        </v-row>

        <v-row>
          <v-btn
            @click="useCurrentLocation"
            block
            :loading="process.getLocation"
            :disabled="process.getLocation"
          >
            <v-icon left>mdi-map-marker</v-icon>
            {{ $t("labels.action.useCurrentLocation") }}
            <template v-slot:loader>
              <v-progress-circular
                size="21"
                width="3"
                indeterminate
              ></v-progress-circular>
              {{ $t("labels.process.getCurrentLocation") }}
            </template>
          </v-btn>
          <v-spacer></v-spacer>
          <v-alert
            dismissible
            dense
            color="warning"
            v-model="error.failedToGetLocation"
            >{{ $t("errors.failedToGetLocation") }}</v-alert
          >
        </v-row>
      </v-col>

      <v-col cols="12" class="col-sm-6 col-md-8">
        <l-map
          ref="map"
          style="min-height: 200px; z-index: 1"
          :zoom="map.zoom"
          :center="map.center"
          @ready="mapReady"
        >
          <l-tile-layer
            :url="map.url"
            :attribution="map.attribution"
          ></l-tile-layer>
          <l-marker
            ref="mapMarker"
            :lat-lng.sync="location"
            draggable
            @update:latLng="updateLatLngData"
          ></l-marker>
        </l-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "LocationInput",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  emits: ["update:location", "update:lat", "update:lng"],
  props: ["initialLocation"],
  data: () => ({
    error: {
      failedToGetLocation: false,
    },
    location: {
      lat: 0,
      lng: 0,
    },
    process: {
      getLocation: false,
    },
    map: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 2,
      center: [0, 0],
    },
  }),
  created() {
    this.location.lat = this.initialLocation.lat;
    this.location.lng = this.initialLocation.lng;
    this.$nextTick(() => this.updateLatLng());
  },
  methods: {
    updateLatLngData: function () {
      this.$emit("update:location", this.location);
      this.$emit("update:lat", this.location.lat);
      this.$emit("update:lng", this.location.lng);
    },
    updateLatLng: function () {
      // this.$refs.mapMarker.setLatLng(this.location);
      let map = this.$refs.map.mapObject;
      map.flyTo(this.location);
      this.updateLatLngData();
      // https://vue2-leaflet.netlify.app/components/LMarker.html#events
    },
    mapReady: function () {
      this.$refs.map.mapObject.on("locationfound", this.onLocationFound);
      this.$refs.map.mapObject.on("locationerror", this.onLocationError);
      this.$refs.map.mapObject.on("mouseup", this.updateLatLng);
    },
    onLocationFound: function (e) {
      this.process.getLocation = false;
      this.error.failedToGetLocation = false;
      this.location = { ...e.latlng };
      this.updateLatLng();
      // var radius = e.accuracy;
      // L.marker(e.latlng).addTo(map)
      // L.circle(e.latlng, radius).addTo(map);
    },
    onLocationError: function (e) {
      console.error("Failed to get location.");
      console.error(e);
      this.process.getLocation = false;
      this.error.failedToGetLocation = true;
    },
    useCurrentLocation: function () {
      this.process.getLocation = true;
      let map = this.$refs.map.mapObject;
      map.locate({ timeout: 10000 });
    },
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
