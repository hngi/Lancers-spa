<template>
    
    <div class="wrapper">
        <Sidenav />

        <!-- Page Content Holder -->
        <div id="content">
            <Topnav />

            <div class="container">
                <button class='create-invoice' @click.prevent="this.$router.push('/project/create')">Create invoice</button>
                <h3>Estimates helps you place value to your work and time!</h3>
                <p>Create an estimate and easily convert it to an invoice and send to your client.</p>
            </div> 
        </div>

    </div> 
    <!-- <button class="btn btn-secondary text-white rounded-circle" id="add-something">
        <i class="fas fa-plus"></i>
    </button> -->

</template>
<script>
import Sidenav from '@/components/SideNav.vue'
import Topnav from '@/components/TopNav.vue'
import Project from '@/components/Project.vue'

export default {
    data(){
        return {
            
        }
    },
    components: {
        'Sidenav' : Sidenav,
        'Topnav' : Topnav,
        'Project' : Project
    }
}
</script>
<style scoped src='@/assets/css/base.css'></style>
<style scoped>
    .create-invoice {
        width: 13rem;
        height: 3.5rem;
        background: #0ABAB5;
        color: white;
        border: none;
        font-size: 16px;
        text-align: center;
        margin-left: 0px;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .container {
        width: 100%;
        padding-right: 20px;
        padding-left: 20px;
        margin: 0px;
    }
</style>