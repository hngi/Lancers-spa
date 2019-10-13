<template>
    <nav class="navbar navbar-expand-lg navbar-main">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="https://lancer-app.000webhostapp.com/images/svg/logo-white.svg" class="img img-responsive" height="30" width="auto">
            </a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
                <!-- <span class="navbar-toggler-icon"><i class="fa fa-bars fa-lg py-1 text-white"></i></span> -->
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item" v-for="(link, id) in links" :key="id" :class="path == link.path ? 'active' : ''">
                        <router-link :to="link.path" class="nav-link">{{link.text}}</router-link>
                    </li>                         
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "GuestNavbar",
    data: function(){
        return {
            links: [
                {
                    text: "Home",
                    path: "/"
                },
                {
                    text: "Pricing",
                    path: "/pricing"
                },
                {
                    text: "Sign in",
                    path: "/login"
                },
                {
                    text: "Sign up",
                    path: "/register"
                }
            ]
        }
    },
    computed:{
        path(){
            return window.location.pathname;
        }
    }
}
</script>

<style scoped>
            /****************************/
        /*-----Landing Page---------*/
        /****************************/

    /*------Navbar------------*/

    .navbar-main {
        background-color: var(--primary-color);
    }
    .navbar-main .navbar-brand,
    .navbar-main .navbar-text {
        color: rgba(255, 255, 255, 0.9);
    }
    .navbar-main .navbar-nav .nav-link {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
    }
    .navbar-main .nav-item.active .nav-link,
    .navbar-main .nav-item:hover .nav-link {
        color: #ffffff;
    }

    /* for navbar toggler design */
    .icon-bar {
        width: 22px; 
        height: 2px;
        background-color: #B6B6B6;
        display: block;
        transition: all 0.2s;
        margin-top: 4px
    }
    .navbar-toggler {
        border: none;
        background: transparent !important;
    }
    .navbar-toggler:focus{
        outline: none !important;
    }

    /* navbar toggler animation*/

    .navbar-toggler .top-bar {
        transform: rotate(45deg);
        transform-origin: 10% 10%;
    } 
    .navbar-toggler .middle-bar {
        opacity: 0;
    } 
    .navbar-toggler .bottom-bar {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
    }
    .navbar-toggler.collapsed .top-bar {
        transform: rotate(0);
    } 
    .navbar-toggler.collapsed .middle-bar {
        opacity: 1;
    }
    .navbar-toggler.collapsed .bottom-bar {
        transform: rotate(0);
    }
</style>