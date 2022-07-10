<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-row>
          <span class="heading font-weight-light mr-1"><slot></slot> </span>
        </v-row>
        <v-row>
          <span class="subheading">{{content}} </span>
          <span class="subheading font-weight-light mr-1"> {{$t(units)}}</span>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-slider
          v-model="content"
          track-color="grey"
          always-dirty
          :min="min"
          :max="max"
        >
          <template v-slot:prepend>
            <v-icon @click="decrement">
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon @click="increment">
              mdi-plus
            </v-icon>
          </template>
        </v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
        min: {
            type: Number,
            defualt: 0,
        },
        max: {
            type: Number,
            default: 200,
        },
        step: {
            type: Number,
            default: 5,
        },
        units: {
            type: String,
            default: 'units.short.cm',
        },
        label: {
            type: String,
            default: 'labels.default.value',
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data () {
      return {
        content: this.value
      }
    },
    methods: {
      decrement () {
        this.content -= this.step;
        this.handleInput();
      },
      increment () {
        this.content += this.step;
        this.handleInput();
      },
      handleInput(){
        this.$emit('input', this.value);
      }
    },
  }
</script>

