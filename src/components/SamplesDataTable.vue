<template>
  <v-container>
    <!-- {{ specimenLocalized }} -->
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(option, optionKey) in dataOptions"
        :key="optionKey"
      >
        <v-expansion-panel-header expand-icon="mdi-filter">
          <v-row no-gutters>
            <v-col>
              {{ $t(`labels.${optionKey}.${optionKey}`) }}
              <span class="text--secondary"
                >({{ filterSummary[optionKey] }})</span
              >
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-switch
            v-for="(value, valueKey) in option"
            :key="valueKey"
            v-model="dataFilter[optionKey][valueKey]"
            :label="$t(`labels.${optionKey}.${valueKey}`)"
            :hint="`${dataStats[optionKey][valueKey]} / ${specimen.length}`"
            persistent-hint
            inset
            dense
          ></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- automatic filter input -->
    <!-- <v-form>
      <v-card v-for="(option, optionKey) in dataOptions" :key="optionKey">
        <v-card-title>{{$t(`labels.${optionKey}.${optionKey}`)}} <v-icon>mdi-filter</v-icon></v-card-title>
        <v-card-text>
          <v-switch v-for="(value, valueKey) in option" :key="valueKey"
            v-model="dataFilter[optionKey][valueKey]"
            :label="$t(`labels.${optionKey}.${valueKey}`)"
            :hint="`${dataStats[optionKey][valueKey]} / ${specimen.length}`"
            persistent-hint
            inset
            dense
          ></v-switch>
        </v-card-text>
      </v-card>
    </v-form> -->

    <!-- MANUAL CODED FILTER INPUT
    <v-form>
      <v-card>
        <v-card-title>{{$t('labels.sex.sex')}} <v-icon>mdi-filter</v-icon></v-card-title>
        <v-card-text>
          <v-switch
            v-model="dataFilter.sex.male"
            :label="$t('labels.sex.male')"
            :hint="`${dataStats.sex.male} / ${specimen.length}`"
            persistent-hint
            inset
            dense
          ></v-switch>
          <v-switch
            v-model="dataFilter.sex.female"
            :label="$t('labels.sex.female')"
            :hint="`${dataStats.sex.female} / ${specimen.length}`"
            persistent-hint
            inset
            dense
          ></v-switch>
        </v-card-text>
      </v-card>
    </v-form>
    -->

    <v-data-table
      :headers="headers"
      :items="specimenLocalized"
      item-key="species"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.action="{ item }">
        <v-btn class="" x-small @click="editItem(item.docId)" color="cyan" dark>
          <!-- <v-icon small class="mr-2"> mdi-pencil </v-icon> -->
          Edit</v-btn
        >
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
// import shark_species_data from '@/assets/shark_species_data';
import SharkSpecimen from "@/models/shark_specimen";
export default {
  name: "SamplesDataTable",
  data: () => ({
    specimen: [], // this.generateRandomSamples(50),
    dataOptions: {
      sex: {
        male: true,
        female: true,
      },
      maturity: {
        youngOfYear: true,
        immature: true,
        mature: true,
      },
      tagType: {
        dart: true,
        psat: true,
        acoustic: true,
      },
      sampleType: {
        biopsyFinClipPectoral: true,
        biopsyFinClipPelvic: true,
        biopsyFinClipDorsal: true,
        biopsyGillSnipLeft: true,
        biopsyGillSnipRight: true,
        bloodSampleTail: true,
        bloodSampleDorsalSinuses: true,
        biopsySkin: true,
        biopsyMuscle: true,
        swabAnal: true,
        swabMouth: true,
        swabGills: true,
        other: true,
      },
      releaseCondition: {
        excellent: true,
        good: true,
        fair: true,
        poor: true,
        doa: true,
      },
      tide: {
        rising: true,
        falling: true,
        high: true,
        low: true,
      },
    },
    dataFilter: {
      // Options: true => show, false => hide
      sex: {
        male: true,
        female: true,
      },
      maturity: {
        youngOfYear: true,
        immature: true,
        mature: true,
      },
      tagType: {
        dart: true,
        psat: true,
        acoustic: true,
      },
      sampleType: {
        biopsyFinClipPectoral: true,
        biopsyFinClipPelvic: true,
        biopsyFinClipDorsal: true,
        biopsyGillSnipLeft: true,
        biopsyGillSnipRight: true,
        bloodSampleTail: true,
        bloodSampleDorsalSinuses: true,
        biopsySkin: true,
        biopsyMuscle: true,
        swabAnal: true,
        swabMouth: true,
        swabGills: true,
        other: true,
      },
      releaseCondition: {
        excellent: true,
        good: true,
        fair: true,
        poor: true,
        doa: true,
      },
      tide: {
        rising: true,
        falling: true,
        high: true,
        low: true,
      },
      // Numeric
      preCaudalLength: { min: 0, max: 9999 },
      finLength: { min: 0, max: 9999 },
      tailLength: { min: 0, max: 9999 },
      standardLength: { min: 0, max: 9999 },
      girth: { min: 0, max: 9999 },
      hookTime: { min: 0, max: 9999 },
      soakTime: { min: 0, max: 9999 },
      depth: { min: 0, max: 9999 },
      salinity: { min: 0, max: 9999 },
      temperature: { min: 0, max: 9999 },
    },
  }),
  mounted() {
    // We needa timeout so the translations have time to load
    // setTimeout(() => {
    //   this.$data.specimen = this.getSpecimen;
    //   // this.$data.specimen = this.generateRandomSamples(100);
    // }, 500);
    this.getSpecimenSamples();
  },
  methods: {
    generateRandomSamples(count) {
      let results = [];
      for (let i = 0; i < count; i += 1) {
        results.push(SharkSpecimen.createRandom());
      }
      return results;
    },
    removeMatchingProperty(objects, targetProperty, targetValue) {
      let subset = [];
      for (let i = 0, l = objects.length; i < l; i += 1) {
        let o = objects[i];
        if (o[targetProperty] != targetValue) {
          subset.push(o);
        }
      }
      return subset;
    },
    getKeysWithValue(object, value) {
      let keys = [];
      for (let key in object) {
        if (object[key] == value) {
          keys.push(key);
        }
      }
      return keys;
    },
    valuesCount(object, value) {
      let values = Object.values(object);
      let count = 0;
      for (let i = 0, l = values.length; i < l; i += 1) {
        if (values[i] == value) {
          count += 1;
        }
      }
      return count;
    },
    allValuesAre(object, value) {
      let values = Object.values(object);
      for (let i = 0, l = values.length; i < l; i += 1) {
        if (values[i] != value) {
          return false;
        }
      }
      return true;
    },
    statsUpdateCount(stats, object, keys) {
      for (let i = 0, l = keys.length; i < l; i += 1) {
        let key = keys[i];
        stats[key][object[key]] += 1;
      }
    },
    statsUpdateMinMax(stats, object, keys) {
      for (let i = 0, l = keys.length; i < l; i += 1) {
        let key = keys[i];
        let val = object[key];
        if (val < stats[key].min) {
          stats[key].min = val;
        }
        if (val > stats[key].max) {
          stats[key].max = val;
        }
      }
    },

    editItem(id) {
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialog = true
      this.$router.push({ path: `/specimen/${id}` });
      // window.open(route.href);
    },
  },
  computed: {
    headers() {
      let h = [];
      for (let i = 0, l = SharkSpecimen.fields.length; i < l; i += 1) {
        let field = SharkSpecimen.fields[i];
        h.push({
          text: this.$t(`labels.sharkDataHeaders.${field}`),
          align: "start",
          sortable: false,
          value: field,
        });
      }
      return h;
    },
    filterSummary() {
      let summaries = {
        sex: "",
        maturity: "",
        tagType: "",
        sampleType: "",
        releaseCondition: "",
        tide: "",
      };
      let optionKeys = [
        "sex",
        "maturity",
        "tagType",
        "sampleType",
        "releaseCondition",
        "tide",
      ];
      for (let i = 0, l = optionKeys.length; i < l; i += 1) {
        let optionKey = optionKeys[i];
        let option = this.$data.dataFilter[optionKey];
        if (this.allValuesAre(option, true)) {
          summaries[optionKey] = this.$t("labels.filterSummary.showingAll");
        } else if (this.allValuesAre(option, false)) {
          summaries[optionKey] = this.$t("labels.filterSummary.hidingAll");
        } else {
          let showCount = this.valuesCount(option, true);
          let hideCount = this.valuesCount(option, false);
          if (showCount == 1) {
            summaries[optionKey] = [
              this.$t("labels.filterSummary.showingOnly"),
              ": ",
              this.$t(
                "labels." +
                  optionKey +
                  "." +
                  this.getKeysWithValue(option, true).join("")
              ),
            ].join("");
          } else if (hideCount == 1) {
            summaries[optionKey] = [
              this.$t("labels.filterSummary.hidingOnly"),
              ": ",
              this.$t(
                "labels." +
                  optionKey +
                  "." +
                  this.getKeysWithValue(option, false).join("")
              ),
            ].join("");
          } else {
            summaries[optionKey] = this.$t(
              "labels.filterSummary.hidingMultiple"
            );
          }
        }
      }
      return summaries;
    },
    dataStats() {
      let stats = {
        // Options: direct count
        sex: {
          male: 0,
          female: 0,
        },
        maturity: {
          youngOfYear: 0,
          immature: 0,
          mature: 0,
        },
        tagType: {
          dart: 0,
          psat: 0,
          acoustic: 0,
        },
        sampleType: {
          biopsyFinClipPectoral: 0,
          biopsyFinClipPelvic: 0,
          biopsyFinClipDorsal: 0,
          biopsyGillSnipLeft: 0,
          biopsyGillSnipRight: 0,
          bloodSampleTail: 0,
          bloodSampleDorsalSinuses: 0,
          biopsySkin: 0,
          biopsyMuscle: 0,
          swabAnal: 0,
          swabMouth: 0,
          swabGills: 0,
          other: 0,
        },
        releaseCondition: {
          excellent: 0,
          good: 0,
          fair: 0,
          poor: 0,
          doa: 0,
        },
        tide: {
          rising: 0,
          falling: 0,
          high: 0,
          low: 0,
        },
        // Numeric
        preCaudalLength: { min: 9e99, max: -9e99 },
        finLength: { min: 9e99, max: -9e99 },
        tailLength: { min: 9e99, max: -9e99 },
        standardLength: { min: 9e99, max: -9e99 },
        girth: { min: 9e99, max: -9e99 },
        hookTime: { min: 9e99, max: -9e99 },
        soakTime: { min: 9e99, max: -9e99 },
        depth: { min: 9e99, max: -9e99 },
        salinity: { min: 9e99, max: -9e99 },
        temperature: { min: 9e99, max: -9e99 },
      };
      let optionKeys = [
        "sex",
        "maturity",
        "tagType",
        "sampleType",
        "releaseCondition",
        "tide",
      ];
      let numericKeys = [
        "preCaudalLength",
        "finLength",
        "tailLength",
        "standardLength",
        "girth",
        "hookTime",
        "soakTime",
        "depth",
        "salinity",
        "temperature",
      ];
      let specimen = this.$data.specimen;
      for (let i = 0, l = specimen.length; i < l; i += 1) {
        let instance = specimen[i];
        this.statsUpdateCount(stats, instance, optionKeys);
        this.statsUpdateMinMax(stats, instance, numericKeys);
      }
      return stats;
    },
    specimenFiltered() {
      // first invert the options filter so we remove from the list
      let optionKeys = [
        "sex",
        "maturity",
        "tagType",
        "sampleType",
        "releaseCondition",
        "tide",
      ];
      // let numericKeys = ["preCaudalLength", "finLength", "tailLength", "standardLength", "girth", "hookTime", "soakTime", "depth", "salinity", "temperature"];
      let results = this.$data.specimen;
      for (let i = 0, l = optionKeys.length; i < l; i += 1) {
        let optionKey = optionKeys[i];
        // if everything is visible then do not filter by that property
        let option = this.$data.dataFilter[optionKey];
        if (this.allValuesAre(option, true)) {
          continue;
        }
        // otherwise, remove things that should not be shown
        for (let optionValue in option) {
          if (!option[optionValue]) {
            results = this.removeMatchingProperty(
              results,
              optionKey,
              optionValue
            );
          }
        }
      }
      console.info(this.dataStats);
      return results;
    },
    specimenLocalized() {
      // translate all non-numeric fields
      let localized = [];
      let initialSpecimen = this.specimenFiltered;
      for (let i = 0, l = initialSpecimen.length; i < l; i += 1) {
        // copy the specimen and translate specific fields
        let s = initialSpecimen[i];
        let specimen = {
          ...s,
          sex: this.$t(`labels.sex.${s.sex}`),
          maturity: this.$t(`labels.maturity.${s.maturity}`),
          tagType: this.$t(`labels.tagType.${s.tagType}`),
          species: this.$store.getters.speciesById(s.species - 1).common_name, // TODO more columns for species info/object
          sampleType: this.$t(`labels.sampleType.${s.sampleType}`),
          releaseCondition: this.$t(
            `labels.releaseCondition.${s.releaseCondition}`
          ),
          tagLocation: this.$t(
            `lat:${s.tagLocation.lat}, lng:${s.tagLocation.lng}`
          ),
        };
        localized.push(specimen);
      }
      return localized;
    },
  },
  watch: {
    getSpecimen() {
      this.$data.specimen = this.getSpecimen;
    },
  },
};
</script>
