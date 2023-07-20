import { mapActions, mapGetters } from "vuex";

export default {
  computed: { ...mapGetters(["getSpecimen", "actionLoader"]) },
  methods: {
    ...mapActions(["addSpecimen", "getSpecimenSamples", "editSpecimen"]),
  },
};
