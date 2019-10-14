<template>
    
    <div class="contaner">

            <header style="border-bottom: 2px solid rgb(223, 223, 223);">
                <nav style="display: flex; ">
                    <a href="#"  @click.prevent="$router.push('/')" class="column-1">
                        <img
                            src="https://res.cloudinary.com/mide358/image/upload/v1570621469/clear_24px_rasbwc.png"
                            alt="navIcon"
                        />
                    </a>
                    <a href="#" @click.prevent="previous" class="column-1">
                        <img
                            src="https://res.cloudinary.com/mide358/image/upload/c_scale,h_27,w_13/v1570621434/Vector_ag4hnv.png"
                            alt="navIcon"
                        />
                    </a>
                    <div class="column-2">client</div>
                    <a href="#" @click.prevent="next" class="column-3">NEXT</a>
                </nav>
            </header>

        <h1 class="">What project are you estimating?</h1>
        <div class="row ml-auto mr-auto box justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">A previously created project</h5>
                        <p style="padding-bottom: 10px;" class="card-text">Find estimate for a previously created project, by doing so the
                            estimate
                            gets populated with some of the data. 
                        </p>
                        <div class="contents dropdown">
                            <select v-model="project.old" class="dropbtn" name="" id="projectSelect">
                                <option selected value="">{{ previous.length > 0 ? 'Select Project' : 'No projects to select'}}</option>
                                <option v-for="(proj, id) in previous" :key="id" :value="id">{{proj.title}}</option>
                            </select>  
                            <!-- <i class="fa fa-caret-down"></i> -->                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">A new project</h5>
                        <p class="card-text">Create a new estimate and set up a new project based on the
                            information.
                        </p>
                        <input type="text" v-model="project.new" name="Project Name" id="name" placeholder="Project Name">
                    </div>
                </div>
            </div>
        </div>

        <button type="button" class="btn dark" @click.prevent="next">NEXT</button>
    </div>

</template>
<script>
export default {
    data(){
        return {
            project: {
                new: '',
                old: '',
                id: null
            },
            previous: []
        }
    },
    methods: {
        next(){
            let type = this.project.new !== '' ? 'new' : 'old';
            let title = this.project.new === '' ? this.project.old : this.project.new;
            if(this.project.new === ''  && this.project.old === '') {
                alert('Please select a project of specify new project title')
            }else {
                if(type == 'new'){
                    this.$store.dispatch('postData', {address: '/projects', data: { title: title}})
                        .then( data => {
                            this.project.id = data.data.data.id;
                            this.$store.commit('SELECT_PROJECT', this.project);
                        })
                        .catch(e => {
    
                        });
                }else{
                    this.project.old = this.previous[title]['title'];
                    this.project.id = this.previous[title]['id'];

                    this.$store.commit('SELECT_PROJECT', this.project);
                }
            }
        }
    },
    created(){
        this.$store.dispatch('fetchData', {address: `/projects/names`})
            .then(data => {
                this.previous = data.data;
            })
            .catch(e => {
                console.log(e)
            });
    }
}
</script>

<style scoped>
    body {
        font-family: 'Roboto', sans-serif;
        overflow: auto;
    }

    h1 {
        margin-top: 5%;
        margin-left: 18%;
        color: #262626;
    }

    h5 {
        font-weight: bold;
        color: #262626;
    }

    p {
        padding-bottom: 40px;
    }

    .box {
        margin-top: 5%;

    }

    .card-body:hover {
        border: 2px solid #0ABAB5;
        box-sizing: border-box;
    }

    .btn-on {
        width: 100%;
        background: gray;
        border: 1px solid rgba(145, 145, 145, 0.4);
        box-sizing: border-box;

        text-align: left;
        color: #091429;
        height: 50px;
    }

    .btn-on:hover {
        color: #E4E4E4;
        background: #0ABAB5 !important;
    }

    .dark {
        margin-top: 40px;
        margin-left: 40%;
        width: 20%;
        height: 60px;
        border: 1px solid gray;
        background: #0ABAB5 !important;
        color: white;
        
    }

    .dark:hover {

        background: #0ABAB5!important;
        color: white;
    }

    #name {
        padding: 10px;
        width: 100%;
        height: 50px;
        font-size: 20px;
        border: 1px solid rgba(145, 145, 145, 0.4);
    }

    #container {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;

    }

    #container div {
        border: 1px solid black;
        height: 50px;
    }

    #container p {
        justify-content: center;
        margin-top: 15px;
        font-style: normal;
        font-weight: bold;


        color: #323A43;
    }

    #ext {
        justify-content: center;
        border: none;
        background: gray !important;
        color: white;
        width: 100%;
        height: 50px;
    }


    #ext:hover {

        background:  #091429 !important;

    }

    #cnc {
        cursor: pointer;
    }
    
    .dropbtn, .project {
        /* margin-top: 37px; */
        width: 100%;
        height: 50px;
        padding: 10px;
        border: 1px solid rgba(145, 145, 145, 0.4);
        /* box-sizing: border-box; */
    }
    option, select {
        font-size: 20px;
        background: rgba(207, 204, 204, 0.4);
    }
</style>