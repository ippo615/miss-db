<template>
    <div>
        (<span>{{$t(common_name)}}</span>)
    </div>
</template>
<script>

export default {
  name: 'SharkSpeciesLine',
  props: {
    "order": {type: String},
    "family": {type: String},
    "genus": {type: String},
    "species": {type: String},
    "common_name": {type: String},
    "discovery_year": {type: String},
    "discoverer": {type: String},
    "speciesId": {type: Number}
  },
  // https://vuetifyjs.com/en/components/autocompletes/#caveats
  computed: {
    text: function(){
        var names = [
            this.$t(this.order),
            this.$t(this.family),
            this.$t(this.genus),
            this.$t(this.species),
        ]
        return `${names.join(' / ')} (${this.$t(this.common_name)})`;
    }
  }
}
</script>
