import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {auth} from '@/firebaseApp'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    currentLocale: 'en',
    sharks: []
  },
  getters: {
    getUser: state => state.user,
  },
  // store.commit(mutation)
  mutations: {
    SET_USER: state => {
      state.user = auth.user;
    },
    SET_LOCALE(state, localeCode){
      console.info(`Changeing locale from ${state.currentLocale} to ${localeCode}`);
      state.currentLocale = localeCode;
    },
    SET_SHARKS(state, sharks){
      console.info(state);
      state.sharks = sharks;
    }
  },
  // store.dispatch(action)
  actions: {
    async setLocale(context, localeCode){
      try {
        // const shark_text = await axios.get(`/shark_species_data/${localeCode}.json`);
        // const sharks = JSON.parse(shark_text).sharks;
        const response = await axios.get(`/shark_species_data/${localeCode}.json`);
        context.commit("SET_SHARKS", response.data.sharks);
        context.commit("SET_LOCALE", localeCode);
      } catch (e){
        console.info(e);
        console.info(`Failed to load shark data for locale ${localeCode}.`)
      }
    },
    setUser: context => {
      context.commit("SET_USER");
    },
    createUserEmailPassword: function(context, {email, password}){
      console.info("Creating user");
      console.info(email);
      console.info(password);
      console.info(auth);
      // console.info(createUserWithEmailAndPassword);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          context.commit("SET_USER");
          console.info(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.info('ERROR');
          console.info(errorCode);
          console.info(errorMessage);
        });
    },
    signInEmailPassword: async function(context, {email, password}){
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          console.info('User Credentials:')
          console.info(userCredential);
          context.commit("SET_USER");
        })
        .catch((error) => {
          console.error(error);
          throw error;
          // console.info(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.info(errorCode);
          // console.info(errorMessage);
          // ..
        });
    },
    sendResetPasswordEmail: async function(context, {email}){
      console.info(context);
      await sendPasswordResetEmail(auth, email).then(()=>{
        alert("Reset Password Email Sent");
      }).catch((error) => {
        console.info(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
    }
  },
  modules: {
  }
})
