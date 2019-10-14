<template>
    
    <div class="wrapper">
        <Sidenav />

        <!-- Page Content Holder -->
        <div id="content">
            <Topnav />

            <section class="">
                <div class="container-fluid">
                    <h4 class="mt-0 text-primary">PROJECTS</h4>
                    <div class="">
                        <div class="">
                            <form class="form-inline">
                                <select class="form-control">
                                    <option selected>All</option>
                                    <option>Pending</option>
                                    <option>Active</option>
                                    <option>Completed</option>
                                </select>
                            </form>
                        </div>
                        <div class="table-responsive">
                            <table class="table project-table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Start Date</th>
                                        <th class="text-right" scope="col">Paid</th>
                                        <th class="text-right" scope="col">Due</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Project v-for="(project, id) in projects" :key="id" :project="project" />
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
import Project from '@/components/Project.vue'

export default {
    data(){
        return {
            projects: []
        }
    },
    components: {
        'Sidenav' : Sidenav,
        'Topnav' : Topnav,
        'Project' : Project
    },
    created(){
        this.$store.dispatch('fetchData', {address: `/projects`})
            .then(data => {
                this.projects = data.data;
                // console.log(this.tasks);
            })
            .catch(e => {
                console.log(e);
            });
    }
}
</script>
<style src='@/assets/css/base.css'></style>
