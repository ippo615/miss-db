<template>
  <v-container>
    <v-row>
        <v-col cols="8">
            <l-map ref="map" style="height: 300px" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker ref="mapMarker" :lat-lng.sync="markerPosition" draggable></l-marker>
            </l-map>
        </v-col>

        <v-col cols="4">
            <v-text-field type="number" v-model="markerPosition.lat" @input="updateLatLng" label="Latitude"></v-text-field>
            <v-text-field type="number" v-model="markerPosition.lng" @input="updateLatLng" label="Longitude"></v-text-field>
            <!-- <v-text-field type="number" @input="updateLatLng" label="Latitude"></v-text-field>
            <v-text-field type="number" @input="updateLatLng" label="Longitude"></v-text-field> -->
        </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerPosition: {"lat":51.504, "lng":-0.159}
    };
  },
  methods: {
    updateLatLng: function(){
        // this.$refs.mapMarker.setLatLng(this.markerPosition)
        let map = this.$refs.map.mapObject;
        map.flyTo(this.markerPosition);
    }
  }
}
</script>
