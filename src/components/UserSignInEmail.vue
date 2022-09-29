<template>
  <v-container>
    <v-col cols="12">
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          append-icon="mdi-email"
          :rules="[rules.required, rules.email]"
          :label="$t('labels.signIn.email')"
          autocomplete="email"
          v-model="email"
          ></v-text-field>

        <v-text-field
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.passwordLength]"
          :type="passwordShow ? 'text' : 'password'"
          :label="$t('labels.signIn.password')"
          @click:append="passwordShow = !passwordShow"
          v-model="password"
          autocomplete="current-password"
          id="current-password"
          ></v-text-field>

        <v-btn block @click="signIn" :disabled="!valid">
          <v-icon left>
            mdi-login
          </v-icon>
          {{$t('labels.action.signIn')}}
        </v-btn>

        <v-spacer></v-spacer>
        <v-alert
          dismissible
          dense
          color="error"
          v-model="error.login.active"
        >{{error.login.message}}</v-alert>
        <v-spacer></v-spacer>

        <v-btn color="secondary" plain small block @click="passwordReset" :disabled="!validEmail">
          <v-icon left>
            mdi-lock-reset
          </v-icon>
          {{$t('labels.action.passwordReset')}}
        </v-btn>

      </v-form>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      password: '',
      passwordShow: false,
      error:{
        login: {
          active: false,
          message: ''
        },
        reset: {
          active: false,
          message: ''
        }
      }
    }),
    computed: {
      rules(){
        return {
          required: v => !!v || this.$t("validation.fieldRequired"),
          passwordLength: v => v.length >= 8 || this.$t("validation.passwordMinLength8"),
          email: v => /.+@.+\..+/.test(v) || this.$t("validation.email.invalidAddress"),
        }
      },
      validEmail(){
        return /.+@.+\..+/.test(this.email);
      }
    },
    methods: {
      signIn: function(){
        let email = this.email;
        let password = this.password;
        this.$store.dispatch('signInEmailPassword', {email, password}).catch((error) => {
          this.$data.error.login.active = true;
          this.$data.error.login.message = error.message + ' ('+error.code+')';

        });
        // try {
        //   this.$store.dispatch('signInEmailPassword', {email, password});
        // } catch(error){
        //   alert("HERE");
        //   this.$data.error.login.error = true;
        //   this.$data.error.login.message = error.message + ' ('+error.code+')';
        // }
      },
      passwordReset: function(){
        alert("Sending Password Reset Email");
        let email = this.email;
        this.$store.dispatch('sendResetPasswordEmail', {email});
      }
    }
  }
</script>
