<template>
    
    <div class="wrapper">
        <Sidenav />

        <!-- Page Content Holder -->
        <div id="content">
            <Topnav />

            <section class="">
                <div class="container-fluid">
                    <div class="">
                        <h1 style="margin-top: 15px;">Tasks</h1>
                        <div style=" background-color: #091429;">
                            <ul class="navi-ul">
                                <li class="navi-links"><a href="#">Overview</a></li>
                                <li class="navi-links"><a href="#">Collaborators</a></li>
                                <li class="navi-links navi-active"><a href="#">Task</a></li>
                                <li class="navi-links"><a href="#">Documents</a></li>
                            </ul>
                        </div>
                        <div class="table-responsive">
                            <table class="table project-table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Project</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Progress</th>
                                        <th class="text-left" scope="col">Status</th>
                                        <th class="text-left" scope="col">Team</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Task v-for="(task,id) in tasks"  :key="id" :task="task"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div> 
    <!-- <button class="btn btn-secondary text-white rounded-circle" id="add-something">
        <i class="fas fa-plus"></i>
    </button> -->

</template>
<script>
import Sidenav from '@/components/SideNav.vue'
import Topnav from '@/components/TopNav.vue'
import Task from '@/components/Task.vue'

export default {
    data(){
        return {
            tasks: []
        }
    },
    components: {
        'Sidenav' : Sidenav,
        'Topnav' : Topnav,
        'Task' : Task
    },
    created(){
        this.$store.dispatch('fetchData', {address: `/tasks`})
            .then(data => {
                this.tasks = data.data.data;
                // console.log(this.tasks);
            })
            .catch(e => {
                console.log(e);
            });
    }
}
</script>

<style src='@/assets/css/base.css'></style>
<style type="text/css">
    /*Main page style by message*/

    @import url(http://fonts.googleapis.com/css?family=Open+Sans);

    :root {
        --primary-color: #091429;
        --secondary-color: #0ABAB5;
        --dark-color: #262626;
        --light-color: #B1B1B1;
    }

    .woman1 {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
    }

    .woman2 {
        position: absolute;
        top: 0px;
        left: 10px;
        border-radius: 50%;
    }

    .woman3 {
        position: absolute;
        top: 0px;
        right: 500px;
        left: 20px;
        border-radius: 50%;
    }

    /****************************/
    /*------- main styles ------*/
    /****************************/

    .navi-ul {
        display: flex;
        align-items: center;
    }

    .navi-ul li {
        list-style: none;
        color: white;
        margin: 10px;
    }

    .navi-active {
        color: #0ABAB5 !important;
    }

    .text-primary {
        color: var(--primary-color) !important;
    }

    .text-secondary {
        color: var(--secondary-color) !important;
    }

    .text-dark {
        color: var(--dark-color) !important;
    }

    .text-light {
        color: var(--light-color) !important;
    }

    .bg-primary {
        background-color: var(--primary-color) !important;
    }

    .bg-secondary {
        background-color: var(--secondary-color) !important;
    }

    .bg-light {
        background-color: var(--light-color) !important;
    }

    .bg-dark {
        background-color: var(--dark-color) !important;
    }

    .btn {
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

    .btn-primary {
        background-color: var(--primary-color) !important;
    }

    .btn-secondary {
        background-color: var(--secondary-color) !important;
    }

    .btn-primary-outline {
        background-color: transparent !important;
        color: var(--primary-color) !important;
        border: 1px solid var(--primary-color) !important;
    }

    .btn-secondary-outline {
        background-color: transparent !important;
        color: var(--secondary-color) !important;
        border: 2px solid var(--secondary-color) !important;
    }

    .btn-primary:hover,
    .btn-secondary:hover,
    .btn-primary-outline:hover,
    .btn-secondary-secondary:hover {
        border-color: inherit !important;
        opacity: 0.8 !important;
    }

    /*------Nav bar---------*/
    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }

    .navbar {
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 10px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
    }

    .navbar-nav .nav-item .nav-link:hover {
        transition: 0.25s;
        background-color: #ecf3ff;
    }

    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0;
    }

    
    /* ---------------------------------------------------
        SIDEBAR STYLE
    ----------------------------------------------------- */
    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
        perspective: 1500px;
    }

    #sidebar {
        min-width: 250px;
        max-width: 250px;
        background: var(--primary-color);
        color: #fff;
        transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
        transform-origin: bottom left;
    }

    #sidebar.active {
        margin-left: -250px;
        transform: rotateY(100deg);
    }

    #sidebar .sidebar-header {
        padding: 20px;
        background: var(--primary-color);
    }

    #sidebar ul.components {
        padding: 20px 0;
        border-bottom: 1px solid var(--primary-color);
    }

    #sidebar ul p {
        color: #fff;
        padding: 10px;
    }

    #sidebar ul li a {
        padding: 10px;
        font-size: 1em;
        font-weight: 600;
        display: block;
        transition: 0.4;
    }

    #sidebar ul li a:hover {
        color: #ffffff;
        background: rgba(19, 41, 82, 1);
    }

    #sidebar ul li a img {
        margin-top: -4px !important;
        margin-left: 4px;
        margin-right: 4px;
    }

    #sidebar.active ul li a span {
        vertical-align: text-bottom !important;
    }

    #sidebar ul li.active>a,
    a[aria-expanded="true"] {
        color: #fff;
        background: rgba(19, 41, 82, 1);
    }

    a[data-toggle="collapse"] {
        position: relative;
    }

    .dropdown-toggle::after {
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }

    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: rgba(19, 41, 82, 1);
        ;
    }

    ul.CTAs {
        padding: 20px;
    }

    ul.CTAs a {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    a.download {
        background: #fff;
        color: #7386D5;
    }

    a.article,
    a.article:hover {
        background: rgba(19, 41, 82, 1) !important;
        color: #fff !important;
    }

    /* ---------------------------------------------------
        CONTENT STYLE
    ----------------------------------------------------- */
    #content {
        width: 100%;
        min-height: 100vh;
        transition: all 0.3s;
    }

    #sidebarCollapse {
        width: 40px;
        height: 40px;
        background: #f5f5f5;
        cursor: pointer;
    }

    #sidebarCollapse span {
        width: 80%;
        height: 2px;
        margin: 0 auto;
        display: block;
        background: #555;
        transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
        transition-delay: 0.2s;
    }

    #sidebarCollapse span:first-of-type {
        transform: rotate(45deg) translate(2px, 2px);
    }

    #sidebarCollapse span:nth-of-type(2) {
        opacity: 0;
    }

    #sidebarCollapse span:last-of-type {
        transform: rotate(-45deg) translate(1px, -1px);
    }

    #sidebarCollapse.active span {
        transform: none;
        opacity: 1;
        margin: 5px auto;
    }

    /* ---------------------------------------------------
        MEDIAQUERIES
    ----------------------------------------------------- */
    @media (max-width: 768px) {
        #sidebar {
            margin-left: -250px;
            transform: rotateY(90deg);
        }

        #sidebar.active {
            margin-left: 0;
            transform: none;
        }

        #sidebarCollapse span:first-of-type,
        #sidebarCollapse span:nth-of-type(2),
        #sidebarCollapse span:last-of-type {
            transform: none;
            opacity: 1;
            margin: 5px auto;
        }

        #sidebarCollapse.active span {
            margin: 0 auto;
        }

        #sidebarCollapse.active span:first-of-type {
            transform: rotate(45deg) translate(2px, 2px);
        }

        #sidebarCollapse.active span:nth-of-type(2) {
            opacity: 0;
        }

        #sidebarCollapse.active span:last-of-type {
            transform: rotate(-45deg) translate(1px, -1px);
        }
    }

    /* ---------------------------------------------------
        Table
    ----------------------------------------------------- */
    table.project-table {
        border-collapse: separate;
        border-spacing: 0 1em;
    }

    table.project-table tbody tr {
        padding-bottom: 10px !important;
    }

    table.project-table tbody tr td span.text-small {
        font-size: 8px;
    }

    table.project-table tbody tr td,
    table.project-table thead tr th {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .dropleft .dropdown-toggle::before {
        display: none;
    }

    /*------------floating button---------*/
    #add-something {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 12;
    }
</style>