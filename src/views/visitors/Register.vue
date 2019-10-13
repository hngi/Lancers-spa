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
            <div class="col-md-6 register">
                <h2>Register to save your project and gain access to:</h2>
                <ul class="list">
                    <li><h5>- The document generator</h5></li>
                    <li><h5>- Our project management features</h5></li>
                    <li><h5>- Much more...</h5></li>
                </ul>
            </div>
            <div class="col-md-5 offset-md-1 signinform mt-5 pl-5 pr-5 pt-4 pb-4">
                <h4 class="text-center">Sign up</h4>
                <form id="loginform" @submit.prevent="register">
                    <div class="form-group">
                        <label for="my-name">Full Name</label>
                        <input required v-model="form.name" id="name" class="form-control" type="text" name="" placeholder="eg. John Doe">
                        <span  id="emessage"></span>
                    </div>
                    <div class="form-group">
                        <label for="my-email">Email Address</label>
                        <input required v-model="form.email" id="email" class="form-control" type="email" name="" placeholder="eg. johndoe@example.com">
                        <span  id="emessage"></span>
                    </div>
                    <div class="form-group">
                        <label for="my-password">Password</label>
                        <input required v-model="form.password" id="password" class="form-control" type="password" name="my-password" placeholder=""> 
                        <span id="pmessage" ></span>
                    </div>
                    <div class="form-group">
                        <label for="my-password">Password Confirmation</label>
                        <input required v-model="form.password_confirmation" id="password2" class="form-control" type="password" name="my-password" placeholder=""> 
                        <span id="pmessage" ></span>
                    </div>
                    <div class="clearfix">
                        <div class="float-left">

                        </div>
                    </div>
                    <button type="submit" id="register-btn" class="btn btn-success col-md-12 pt-2 pb-2 mt-2 mb-2">Register</button>
                    <div class="clearfix">
                        <div class="float-left">

                        </div>
                        <div class="float-right">
                            <p>Already have an account? <router-link to="/login">Sign In</router-link></p>
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
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
        
            loading: false,
            error: null,
            regErrors: [],
            status: null,
        }
    },
    methods: {
        register(){
            //VALIDATE FORM
            this.regErrors = [];
            this.$store.getters.isLoading(this, 'register-btn', 'Registering..');
            this.$store.dispatch('postData', {address: '/register', data:this.form})
            .then(response=>{
                this.$store.getters.hasLoaded(this, 'register-btn');
                this.doLogin();
            })
            .catch(error=>{
                this.$store.getters.hasLoaded(this, 'register-btn', 'Sign up');
                this.regErrors.push(error.errors);
                this.$store.getters.scroll(0);
            })
        },
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
        margin-top: -30px;
        margin-bottom: 30px;
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
        .register{
            margin-top:-85px;
        }
        li{
            list-style-type: none;
        }
        .list{
            margin: 30px 0 0 -30px;
        }
    .error{
        background-color: red;
    }

    @media only screen and (max-width: 770px) {
        .register{
            margin-top: 0px;
            text-align: center;                
        }
        .register li {
            text-align: initial;
        }
        h2{
            font-size: 2px larger;
        }
        h5{
            font-size: larger;
        }
        .float-left{
            text-align: center;
            margin-left: 100px;
        }
    }

    @media only screen and (max-width: 360px) {
        .register{
            margin-top: 0px;
            text-align: center;                
        }
        .register li {
            text-align: initial;
        }
        h2{
            font-size: 1px larger;
        }
        h5{
            font-size: large;
        }
        .float-left{
            text-align: center;
            margin-left: 100px;
        }
    }

</style>