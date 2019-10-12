<template>
    <header>
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
                        <li class="nav-item active">
                            <router-link  class="nav-link" to="/register"><span class="sr-only">(current)</span> Home </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  class="nav-link" to="/pricing"> Pricing </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  class="nav-link" to="/login"> Sign in </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  class="nav-link" to="/register"> Sign up </router-link>
                        </li>                             
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
