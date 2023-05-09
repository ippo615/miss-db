<template>
  <v-col>
    <v-row align="center" justify="center">
      <v-col>
        <about-info />
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <user-sign-in-email-vue />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <user-sign-up-email-vue />
    </v-row>
    <v-row>
      <user-sign-in-email-vue />
    </v-row>
  </v-col>
</template>

<script>
  import UserSignUpEmailVue from '@/components/UserSignUpEmail.vue'
  import UserSignInEmailVue from '@/components/UserSignInEmail.vue'
  import AboutInfo from '@/components/AboutInfo.vue'

  export default {
    components: {
      AboutInfo,
      UserSignUpEmailVue,
      UserSignInEmailVue,
    },
    data: () => ({
      "location1": {"lat": 30, "lng": -85},
      "location2": {"lat": 44, "lng": -80},
    })
  }
</script>
