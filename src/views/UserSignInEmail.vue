<template>
  <user-sign-in-email-vue></user-sign-in-email-vue>
</template>

<script>
  import UserSignInEmailVue from '@/components/UserSignInEmail.vue';
  export default {
    components:{UserSignInEmailVue},
    mounted(){
      document.title = this.$i18n.t('pageTitle.login');
    }
  }
</script>
