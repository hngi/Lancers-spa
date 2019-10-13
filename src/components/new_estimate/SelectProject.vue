<template>
    
    <div class="contaner">

        <div id="container">

            <div>
                <p class="nav" id="cnc"> x </p>
            </div>
            <div>
                <p class="nav" id="cre">Create Estimate</p>
            </div>
            <div>
                <input class="nav" id="ext" type="button" @click.prevent="next" value="NEXT">
            </div>

        </div>

        <h1 class="">What project are you estimating?</h1>
        <div class="row ml-auto mr-auto box justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">A previously created project</h5>
                        <p class="card-text">Find estimate for a previously created project, by doing so the
                            estimate
                            gets populated with some of the data. 
                        </p>
                        <div class="contents dropdown">
                            <select v-model="project.old" class="dropbtn" name="" id="projectSelect">
                                <option selected value="">Select Project</option>
                                <option>Glacier Fintech App</option>
                                <option> AB Technology Solutions Branding</option>
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
            }
        }
    },
    methods: {
        next(){
            if(this.project.new === ''  && this.project.old === '') alert('Please select a project of specify new project title')
            else this.$store.commit('SELECT_PROJECT', this.project);
        }
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