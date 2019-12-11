<template>
  <v-layout row justify-center>
    <v-dialog
      :fullscreen="$vuetify.breakpoint.xsOnly"
      max-width="600px"
      v-model="resetPassword"
    >
      <v-card fullscreen class="resetPasswordForm">
        <v-card-title>
          <h1>Reset Password</h1>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  const Auth = () => import('@/store/modules/auth')
  import { mapState } from 'vuex';

  export default {
    name: "reset-password",
    computed: mapState(['resetPassword']),
    data(){
      return {
        resetPassword: this.$store.state.resetPassword
      }
    },
    created(){
      var urlParams = window.location.href.split("?")[1],
          scope = this;

      if (urlParams && urlParams.split('=')[0] == 'reset-token') {
        this.$store.dispatch('auth/resetPassword')
      }
    }
  };
</script>

<style>

</style>
