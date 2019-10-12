<template>
<!-- <h1>Hello</h1> -->
  <auth>
          <h1 v-slot="side">Welcome Back!</h1>
  </auth>
</template>

<script>
import auth from "@/layouts/Auth.vue";
export default {
    name: "Login"
}
</script>

<style>

</style>