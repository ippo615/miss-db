<template>
  <v-container>
    <v-col cols="12">
      <v-form
        ref="form"
        v-model="valid"
        @keyup.native.enter="valid && signup($event)"
      >
        <v-text-field
          append-icon="mdi-email"
          :rules="[rules.required, rules.email]"
          :label="$t('labels.signup.email')"
          autocomplete="email"
          v-model="email"
          ></v-text-field>

        <v-text-field
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.passwordLength]"
          :type="passwordShow ? 'text' : 'password'"
          :label="$t('labels.signup.password')"
          @click:append="passwordShow = !passwordShow"
          v-model="password"
          autocomplete="new-password"
          id="new-password"
          ></v-text-field>

        <v-btn block @click="signup" :disabled="!valid">
          <v-icon left>
            mdi-account-plus
          </v-icon>
          {{$t('labels.action.signup')}}
        </v-btn>

        <v-container>
          <v-row class="alert-container"></v-row>
          <v-row>
            <v-btn color="secondary" plain small block to="login" replace>
              <v-icon left>
                mdi-login
              </v-icon>
              {{$t('labels.action.loginLink')}}
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
    }),
    computed: {
      rules(){
        return {
          required: v => !!v || this.$t("validation.fieldRequired"),
          passwordLength: v => v.length >= 8 || this.$t("validation.passwordMinLength8"),
          email: v => /.+@.+\..+/.test(v) || this.$t("validation.email.invalidAddress"),
        }
      },
    },
    methods: {
      signup: function(){
        let email = this.email;
        let password = this.password;
        this.$store.dispatch('createUserEmailPassword', {email, password});
      }
    }
  }
</script>
