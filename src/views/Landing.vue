<template>
  <guest-layout>
    <jumbotron></jumbotron>
    <estimate></estimate>
    <manage></manage>
  </guest-layout>
</template>

<script>
import guestLayout from "@/layouts/Guest.vue"
import jumbotron from "@/components/landing/Jumbotron.vue"
import estimate from "@/components/landing/Estimate.vue"
import manage from "@/components/landing/Manage.vue" 
export default {
    name: "Landing",
    components:{
        guestLayout,
        jumbotron,
        estimate,
        manage
    }
}
</script>

<style>
    /*Main page style by message*/
    @import url(http://fonts.googleapis.com/css?family=Open+Sans);

    :root{
        --primary-color: #091429;
        --secondary-color: #0ABAB5;
        --dark-color: #262626;
        --light-color: #B1B1B1;
    }
        /****************************/
        /*------- main styles ------*/
        /****************************/
    body{
        font-family: 'Open Sans', sans-serif !important;
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))t;
    }

    h1,
    .h1{
        font-weight: 600 !important;
        font-size: 3.5rem;
        font-size: calc(38px + 4 * (100vw - 767px) / 700);
        line-height: 120% !important;
        vertical-align: top !important;
    }
    h2,
    .h2 {
        font-size: 3.2rem;
        font-size: calc(28px + 4 * (100vw - 767px) / 700);
        font-weight: 700;
    }
    h3,
    .h3 {
        font-size: 2rem !important;
        font-size: calc(24px + 4 * (100vw - 767px) / 700) !important;
        font-weight: 600 !important;
        line-height: 150% !important;
    }
    h4,
    .h4 {
        font-size: 1.6rem;
    }
    h5,
    .h5 {
        font-size: 1.2rem;
        font-weight: 700 !important;
        line-height: 150% !important;
    }
    h6,
    .h6 {
        font-size: 1.4rem;
    }
    p{
        font-size: 16px !important;
        font-weight: normal;
        line-height: 32px;
    }
    p.bold{
        font-size: 18px !important;
        font-weight: 700;
        line-height: 32px;
    }
</style>