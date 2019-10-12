<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  methods: {
    //
  },

  created(){
      if(this.$route.path!=='/login' && this.$route.path!=='/register'){
          this.$store.dispatch('autoLogin');
      }
  },
}
</script>
<style>

</style>
