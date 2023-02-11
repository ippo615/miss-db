<template>
  <v-container>
    <v-col>
      <v-form
        ref="form"
        v-model="valid"
        @keyup.native.enter="valid && signIn($event)"
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

        <v-container>
          <v-row class="alert-container">
            <v-col>
              <v-alert
                dismissible
                dense
                type="error"
                v-model="feedback.login.active"
              >{{feedback.login.message}}</v-alert>
              <v-alert
                dismissible
                dense
                type="success"
                v-model="feedback.reset.active"
              >{{feedback.reset.message}}</v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-btn color="secondary" plain small block @click="passwordReset" :disabled="!validEmail">
              <v-icon left>
                mdi-lock-reset
              </v-icon>
              {{$t('labels.action.passwordReset')}}
            </v-btn>
          </v-row>
          <v-row>
            <v-btn color="secondary" plain small block to="register" replace>
              <v-icon left>
                mdi-account-plus
              </v-icon>
              {{$t('labels.action.registerLink')}}
            </v-btn>
          </v-row>
        </v-container>

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
      feedback:{
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
          this.$data.feedback.login.active = true;
          this.$data.feedback.login.message = error.message + ' ('+error.code+')';

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
        this.$data.feedback.reset.active = true;
        this.$data.feedback.reset.message = this.$t('feedback.resetEmailSent');
      }
    }
  }
</script>
