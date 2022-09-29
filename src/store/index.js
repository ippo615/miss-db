import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '@/firebaseApp'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => state.user,
  },
  // store.commit(mutation)
  mutations: {
    SET_USER: state => {
      state.user = auth.user;
    }
  },
  // store.dispatch(action)
  actions: {
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
