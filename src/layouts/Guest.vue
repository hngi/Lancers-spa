<template>
    <div>
        <header>
            <guest-navbar></guest-navbar>
        </header>
        <main>
            <slot></slot>
        </main>
        <guest-footer></guest-footer>
    </div>
</template>

<script>
import guestNavbar from "@/components/GuestNavbar.vue"
import guestFooter from "@/components/GuestFooter.vue"
export default {
    name: "Guest",
    components:{
        guestNavbar,
        guestFooter
    }
}
</script>

<style scoped>
    .text-primary{
        color: var(--primary-color) !important;
    }
    .text-secondary{
        color: var(--secondary-color) !important;
    }
    .text-dark{
        color: var(--dark-color) !important;
    }
    .text-light{
        color: var(--light-color) !important;
    }
    .bg-primary{
        background-color: var(--primary-color) !important;
    }
    .bg-secondary{
        background-color: var(--secondary-color) !important;
    }
    .bg-light{
        background-color: var(--light-color) !important;
    }
    .bg-dark{
        background-color: var(--dark-color) !important;
    }
    .btn{
        border: none !important;
        display: inline-block;
        position: relative;
        overflow: hidden;
        transition: all ease-in-out .5s;
    }
    .btn::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 25%;
        height: 100%;
        width: 40%;
        background-color: #000;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        transition: all ease-in-out 1s;
        transform: scale(5, 5);
    }
    .btn:active::after {
        padding: 0;
        margin: 0;
        opacity: .2;
        transition: 0s;
        transform: scale(0, 0);
    }
    .btn-primary{
        background-color: var(--primary-color) !important;
    }
    .btn-secondary{
        background-color: var(--secondary-color) !important;
    }
    .btn-primary-outline{
        background-color: transparent !important;
        color: var(--primary-color)  !important;
        border: 1px solid var(--primary-color)  !important;
    }
    .btn-secondary-outline{
        background-color: transparent !important;
        color: var(--secondary-color)  !important;
        border: 2px solid var(--secondary-color)  !important;
    }
    .btn-primary:hover, .btn-secondary:hover, .btn-primary-outline:hover, .btn-secondary-secondary:hover{
        border-color: inherit !important;
        opacity: 0.8 !important;
    }
</style>