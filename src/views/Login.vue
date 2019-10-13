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
                <h1>Welcome Back!</h1>
            </div>
            <div class="col-md-5 offset-md-1 signinform mt-5 pl-5 pr-5 pt-4 pb-4">
                <h4 class="text-center">Sign In</h4>
                <form id="loginform" @submit.prevent="login">
                    <div class="form-group">
                        <label for="my-email">Email Address</label>
                        <input required id="email" class="form-control" type="email" name="" v-model="form.email" placeholder="eg. johndoe@example.com">
                        <span  id="emessage"></span>
                    </div>
                    <div class="form-group">
                        <label for="my-password">Password</label>
                        <input required id="password" class="form-control" type="password" v-model="form.password" name="my-password" placeholder=""> 
                        <span id="pmessage"></span>
                    </div>
                    <div class="clearfix">
                        <div class="float-left">

                        </div>
                        <div class="float-right">
                            <a href="">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" id="login-btn" class="btn btn-success col-md-12 pt-2 pb-2 mt-2 mb-2">Login</button>
                    <div class="clearfix">
                        <div class="float-left">

                        </div>
                        <div class="float-right">
                            <p>Don't have an account? <router-link to="/register">Sign Up</router-link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {
                email: '',
                password: ''
            },

            loading: false,
            error: false,
            status: null,
        }
    },
    methods: {
        login(){
            this.$store.getters.isLoading(this, 'login-btn', 'Please wait..');  
            this.$store.dispatch('doLogin', {email: this.form.email, password:this.form.password})
            .then(response=>{
                this.$store.getters.hasLoaded(this, 'login-btn', 'Logging In..');
            })
            .catch(error=>{
                this.$store.getters.hasLoaded(this, 'login-btn', 'Redirecting..');  
            })
        }
    }
}
</script>

<style scoped>
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
    
    .signinform {
        border: thin #c4c4c4 solid;
        border-radius: 1% 1% 1% 1%;
    }
    
    a {
        color: #000;
    }
    
    a:hover {
        text-decoration: none;
        color: #000;
    }

    
    .btn-success {
        background-color: #0ABAB5;
        border: thin #0ABAB5 solid;
    }
    
    .btn-success:hover {
        background-color: #0ABAB5;
        border: thin #0ABAB5 solid;
    }


    form#loginform button{
        background:#0ABAB5;
        border:0px
    }

        div.floatright a, div.floatright p{
            font-size: 16px;
        }

    .error{
        background-color: red;
    }

</style>