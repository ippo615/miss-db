<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <locale-select></locale-select>

      <v-spacer></v-spacer>

      <v-menu left bottom v-if="$store.state.user !== null">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>

            <v-avatar color="red">
              <span class="white--text text-h5">CJ</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-else>
        <v-btn plain small to="login" replace>
          <v-icon left>
            mdi-login
          </v-icon>
          {{$t('labels.action.signIn')}}
        </v-btn>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import LocaleSelect from '@/components/LocaleSelect.vue'

export default {
  name: 'App',
  components: {
    LocaleSelect
  },

  data: () => ({
    collapseOnScroll: true,
  }),
};
</script>
