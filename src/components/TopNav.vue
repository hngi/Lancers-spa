<template>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="navbar-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <form class="form-inline my-2 ml-4">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text border-right-0 bg-white" id="basic-addon1"><i class="fas fa-search"></i></span>
                    </div>
                    <input class="form-control border border-left-0" type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
                </div>
            </form>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link p-3" href="#"><img src="https://lancer-app.000webhostapp.com/images/svg/help.svg" height="25" width="auto"> <span class="d-lg-none d-xl-none"> You need help?</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link border-left p-3" href="#"><img src="https://lancer-app.000webhostapp.com/images/svg/alarm-clock.svg" height="25" width="auto"> <span class="d-lg-none d-xl-none"> Reminder</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link border-left p-3" href="#"><img src="https://lancer-app.000webhostapp.com/images/svg/notification.svg" height="25" width="auto"> <span class="d-lg-none d-xl-none"> Notification</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link border-left p-3" href="#"><span class="border rounded-circle p-1 font-weight-bold">AU</span> <span class="d-lg-none d-xl-none"> Hello John</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link p-3" href="#" @click.prevent="logout"><i class="fas fa-sign-out-alt"></i> <span class="d-lg-none d-xl-none"> Logout</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data(){
      return {
          newNotifications: false,
      }
  },

  methods: {      
    logout(){
        this.$store.dispatch('logout');
    },
  },

  computed:{
    profile(){
        return this.$store.getters.getProfile;
    },

    rootURL(){
        return this.$store.getters.getFileRoot;
    },
  }
};
</script>