<template>
    <div>
        <!-- Name:          James Chima 
        Slack UserName: @jamis -->
        <div class="container-fluid">
            <div class="row">
                <div class="close-button text-center">
                    <span>
                        <i class="fa fa-times"></i>
                    </span>
                </div>

                <div class="back-button">
                    <span>
                        <i class="fa fa-chevron-left"></i>
                    </span>
                </div>

                <div class="header">
                    <p class="text-center">Create Estimate</p>
                </div>

                <div class="next-button">
                    <p class="text-center">NEXT</p>
                </div>
            </div>
        </div>
        <!--@Ezeko -->
        <div id="word">
            <h1>Evaluation</h1>
            <h5>Please Input the required fields in the form below</h5>
            <br>
        </div>
        <div class="container">

            <div id="glac">
                {{$store.state.estimateForm.project.title | capsfirst}}
                <hr />
            </div>
            <hr />
            <div id="bill">
                <h3>Billing</h3>
                <div>
                    <p>How long (in hours) will it take you to complete this project?</p>
                    <input type="number" v-model="estimate.time" name="estTime" placeholder="Hours" />
                </div>
                <br />
                <div>
                    <p>How much (in hours) do you charge per hour?</p>
                    <input type="text" v-model="estimate.price_per_hour" name="estPrice" placeholder="NGN 0.00" />
                </div>
                <br />
                <div class="date">
                    <p>Project starts/ends</p>
                    <i class="fa fa-calendar"></i>
                    <input type="text" onfocus="(this.type='date')" v-model="estimate.start" name="estStartDate" placeholder=" Set start date" />
                    <i class="fa fa-calendar"></i>
                    <input type="text" onfocus="(this.type='date')" v-model="estimate.end" name="estEndDate" placeholder="Set end date" />
                </div>
            </div>

            <!-- GitHub username: Tana00; Slack username: @Felicia11 -->
            <hr />
            <h3>Expenses</h3>
            <div>
                <p id="cost">
                    How much would it cost you to power your devices or equipment for this project?
                </p>
                <input type="text" name="est1" v-model="estimate.equipment_cost" id="est1" placeholder="NGN 0.00" />
            </div>
            <br />

            <div>
                <p id="sub">Are you subcontracting to anyone?</p>
                <input type="text" name="est2" v-model="estimate.sub_contractors" id="est2" placeholder="E.g. Illustrator, Consulting..." />
            </div>
            <br />

            <div>
                <p id="pay">How much would they be paid?</p>
                <input type="text" v-model="estimate.sub_contractors_cost" name="est3" id="est3" placeholder="NGN 0.00" />
            </div>
            <!-- Slack Display Name: Akosworldwide, GitHub Username: Akosworldwide -->

            <br>
            <h3>Expertise</h3>

            <div>
                <p id="proj">How many similar projects have
                    <br>you done before?</p>
                <input type="number" v-model="estimate.similar_projects" name="exp1" id="exp1">
            </div>

            <br>

            <div>
                <p id="rate">Out of 5 how would you rate your
                    <br>experience level in executing this
                    <br>project?
                </p>
                <input type="number" v-model="estimate.rating" name="exp2" id="exp2"> /5
            </div>
            <hr />
            <!-- Name:          Mary Jonah  
            Slack UserName: @Mary_Jonah -->
            <div id="currency">
                Currency:
                <select v-model="estimate.currency_id">
                    <option v-for="(currency, id) in currencies" :key="id" :value="currency.id">{{currency.code}}</option>
                </select>

            </div>
        </div>
        <div class="footer-next">
            <button @click.prevent="next">NEXT</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            estimate: {
                time: '9',
                price_per_hour: '100',
                start: '2019-10-10',
                end: '2019-10-10',
                equipment_cost: '100',
                sub_contractors: 'test',
                sub_contractors_cost: '100',
                similar_projects: '1',
                rating: '3',
                currency_id: 'NGN',
                project_id: null
            },
            currencies: []
        }
    },
    created(){
      // console.log(this.$store.state.estimateForm.project.project_id);
      this.estimate.project_id = this.$store.state.estimateForm.project.project_id;

      this.$store.dispatch('fetchData', {address: `/data/currencies`})
            .then(data => {
                this.currencies = data.data.data;
                console.log(this.currencies);
            })
            .catch(e => {
                console.log(e);
            });
    },
    methods: {
        next(){
            for(let val in this.estimate){
                if(this.estimate[val] === '') {
                    alert(val + ' is a required field');
                    return;
                }
            }
            this.$store.dispatch('postData', {address: '/estimates', data: { ...this.estimate}})
              .then( data => {
                  let estimate = data.data.data;
                  this.$store.commit('SELECT_CLIENT', this.estimate);
              })
              .catch(e => {

              });
            
        }
    }
}
</script>

<style scoped>
    /* Name: James Chima 
    Slack UserName: @jamis */
    body {
        overflow-x: hidden !important;}
    body .container-fluid {
        background-color: #ffffff;
        border: 1px  gray;
        height: 4rem;
    }

    .close-button {
      background-color: #ffffff;
      height: 4rem;
      border-right: 0.15rem solid #e4e4e4;
      border-bottom: 0.15rem solid #e4e4e4;
      width: 7%;
    }

    .close-button span i {
      font-size: 2rem;
      color: #e4e4e4;
      margin-top: 15px;
    }

    .back-button {
      background-color: #ffffff;
      height: 4rem;
      border-right: 0.15rem solid #e4e4e4;
      border-bottom: 0.15rem solid #e4e4e4;
      width: 7%;
    }

    .back-button span i {
      font-size: 2rem;
      color: #e4e4e4;
      margin-top: 15px;
      margin-left: 30px;
    }

    .header {
      background-color: #ffffff;
      border-bottom: 0.15rem solid #e4e4e4;
      height: 4rem;
      width: 66%;
      
    }

    .next-button {
      background-color: #e4e4e4;
      height: 4rem;
      border-right: 1px solid #e4e4e4;
      border-bottom: 0.15rem solid #e4e4e4;
      width: 20%;
    }

    .header p {
      margin-top: 15px;
      font-size: 20px;
      position: absolute;
      left: 30%;
    }
    
    .next-button p {
      margin-top: 15px;
      font-size: 15px;
      color: #beaeae;
      margin-left: 15%;
    }
    @media (min-width:600px){
    .next-button p {
      margin-top: 15px;
      font-size: 20px;
      color: #ffffff;
    }
    }

    @media screen and (max-width: 768px) {
        .back-button span i {
        font-size: 2rem;
        color: #e4e4e4;
        margin-top: 15px;
        margin-left: 15px;
        }

        .close-button span i {
        font-size: 2rem;
        color: #e4e4e4;
        margin-top: 15px;
        }
    }

    @media screen and (max-width: 425px) {
        .back-button span i {
        font-size: 1rem;
        color: #e4e4e4;
        margin-top: 20px;
        margin-left: 5px;
        
        }
        
        .close-button span i {
        font-size: 1rem;
        color: #e4e4e4;
        margin-top: 20px;
        }
    }
    .container {
      width: 90%;
      margin: auto;
      border: 2px solid #91919187;
      padding: 0 2em;
      font-family: "Ubuntu", sans-serif;
    }
    /* display for tablets and bigger screens*/
    @media (min-width:720px){
    .container {
      width: 85%;
      margin: auto;
      border: 2px solid #91919187;
      padding: 0 2em;
      font-family: "Ubuntu", sans-serif;
    }
    }
    /*Desktop and bigger screens*/
    @media (min-width: 1000px){
      .container{
        width: 77%;
      }
    }
    @media (min-width:1200px){
      .container {
      width: 60%;
      margin: auto;
      border: 2px solid #91919187;
      padding: 0 2em;
      font-family: "Ubuntu", sans-serif;
    }
    }
    h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
    }
    p {
      display: inline-block;
      width: 44%;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      margin-right: 2em;
    }
    #est1,
    #est3 {
      width: 8em;
    }
    #est2 {
      width: 15em;
    }
    #exp1 {
      width: 8em;
    }
    #exp2 {
      width: 4em;
    }
    input[type="text"] {
      border: 1px solid #919191;
      padding: 0.5em 0;
    }
    ::placeholder {
      padding: 0.78em;
      font-size: 10px;
      line-height: 18px;
      color: #919191;
    }
    hr {
      margin-top: 1.5em;
      border: 1px solid #91919187;
    }
/* @Ezeko*/
    
    .date>input{
      border: none;
      text-decoration: underline;
      font-display: bold;
      font-size: 10px;
      width:30%;
      margin: 1%;

    }
    .date>input::placeholder{
      text-decoration-line: underline;
      color: #000000;
    }
    @media (max-width: 500px){
      .date>i{
        position: relative;

        top: 2%;
        margin-left:2%;
      }
      body{
        width:94.5%;
      }
      .container-fluid{
        width: 104.2%;
      }
      #cost,#sub,#pay,#proj,#rate{
          width: 80%;
      }
      .date>p, #bill>div>p{
        width: 80%;
        }
      h5{
        font-size: 11px;
      }
    }
    #word{
      line-height: 0;
      position: relative;
      left: 5%;
    }
    @media (min-width:720px){
      #est2 {
      width: 22em;
    }
      .date>input{
      border: none;
      text-decoration: underline;
      font-display: bold;
      font-size: 14px;
      width:18%;
      margin: 1%;

    }
      #word{
      line-height: 0;
      position: relative;
      left: 3%;
    }
    ::placeholder {
      padding: 0.78em;
      font-size: 18px;
      line-height: 21px;
      color: #919191;
    }
    }
    @media (min-width:1000px){
      #word{
      line-height: 0;
      position: relative;
      left: 12%;
    }
    }
    @media (min-width: 1200px){
    #word{
      line-height: 0;
      position: relative;
      left: 20%;
      margin-top:3%;
      margin-bottom: 2%;
    }
    }
    #word>h5{
      font-weight: lighter;
    }
    #glac{
      position: relative;
      top:10%;
      left: 5%;
      bottom: 0;
      right:2%;
      line-height: 0;
      margin-top: 5%;
    }
    #glac>hr{
      margin-right: 8%;
    }
    input[name='estTime'], input[name='estPrice']{
      width: 35%;
    }
    @media (min-width:720px){
      input[name='estTime'], input[name='estPrice']{
      width: 20%;
    }
    }
    @media (min-width: 1000px){
    input[name='estTime'], input[name='estPrice']{
      width: 15%;
    }
    }
    /* Mary Jonah*/
    select{
        width: 120px;
        position: relative;
        left: 1%;
        right: 68.61%;
        margin-bottom: 3%;
        }
    option{
        text-decoration: underline;
    }
    select option:hover {
        background-color: #eee;
    }
    a {
        display: block;
        position: relative;
        left: 38.06%;
        right: 38.89%;
        margin: 2%;
        width: 150px;
        height: 25%;
        background: #d3d3d3;
        padding: 20px;
        text-align: center;
        color: white;
        text-decoration: none;
        margin-left: 30px;
        font-size: 115%;
    }

    .footer-next {
        width: 200px;
        margin: 0 auto;
    }

    .footer-next button {
        width: 100%;
        height: 100%;
        font-size: 1.5em;
        border: none;
        color: white;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 10px 50px;
    }
</style>