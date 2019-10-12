<template>
      <div class="container">
        <div class="clearfix mt-3">
            <div class="float-left">
                <a href="" class="navbar-brand"><img src="https://res.cloudinary.com/sgnolebagabriel/image/upload/v1570531368/Lancers_evgrmc.png" alt="logo"></a>
            </div>
            <div class="float-right">

            </div>
        </div>
        <div class="row align-items-center mt-5">
            <div class="col-md-6">
                <!-- <slot name="side"></slot> -->
            </div>
            <div class="col-md-5 offset-md-1 signinform mt-5 pl-5 pr-5 pt-4 pb-4">
                <!-- <slot name="form"></slot> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    body {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 200;
    }
    
    h1 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;
        font-size: 72px;
    }
    
    h4 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;
        font-size: 32px;
    }
    
</style>