import { db } from "@/firebaseApp";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const state = {
  isLoader: false,
  specimenData: [],
};

const getters = {
  actionLoader: (state) => state.isLoader,
  getSpecimen: (state) => state.specimenData,
};

const actions = {
  async addSpecimen({ commit }, payload) {
    try {
      commit("setLoader", true);
      console.log(payload, "payload");
      let collectionRef = collection(db, "specimen");
      await addDoc(collectionRef, {
        ...payload,
        // createdAt: Timestamp.now(),
      });
      commit("setLoader", false);
    } catch (error) {
      alert("create payload error....");
      console.log(error.message);
      commit("setLoader", false);
    }
  },
  async getSpecimenSamples({ commit }) {
    // console.log("getSpecimenSamples");
    try {
      let collectionRef = collection(db, "specimen");
      await onSnapshot(collectionRef, (snapshot) => {
        let tempData = [];
        for (let doc of snapshot.docs) {
          tempData.push({
            docId: doc.id,
            ...doc.data(),
          });
        }
        commit("setSpecimenData", tempData);
      });
    } catch (error) {
      alert("get payload error....");
    }
  },
  async editSpecimen({ commit }, payload) {
    // console.log("getSpecimenSamples");
    console.log(payload.data, "payload");

    try {
      commit("setLoader", true);
      const editCollectionRef = doc(db, "specimen", payload.id);
      await updateDoc(editCollectionRef, {
        ...payload.data,
      });
      commit("setLoader", false);
    } catch (error) {
      // alert("edit payload error....");
      console.log(error.message);
      commit("setLoader", false);
    }
  },
};

const mutations = {
  setSpecimenData(state, payload) {
    state.specimenData = payload;
  },

  setLoader(state, payload) {
    state.isLoader = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
