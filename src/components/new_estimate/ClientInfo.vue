<template>
    <div class="container-fluid">
        <header style="border-bottom: 2px solid rgb(223, 223, 223);">
            <nav style="display: flex; ">
                <a href="#" @click.prevent="previous" class="column-1">
                    <img
                        src="https://res.cloudinary.com/mide358/image/upload/v1570621469/clear_24px_rasbwc.png"
                        alt="navIcon"
                    />
                </a>
                <a href="#" @click.prevent="next" class="column-1">
                    <img
                        src="https://res.cloudinary.com/mide358/image/upload/c_scale,h_27,w_13/v1570621434/Vector_ag4hnv.png"
                        alt="navIcon"
                    />
                </a>
                <div class="column-2">client</div>
                <a href="#" @click.prevent="next" class="column-3">NEXT</a>
            </nav>
        </header>

        <main>
            <h2>Client Information</h2>
            <br>
            <section class="content">
                <h4>Business Information</h4>
                <div class="form-group">
                    <label for="company_name">Company name</label>
                    <input type="text" v-model="form.company_name" name="company_name" id="Cname" placeholder="e.g Sunshine Studio">
                </div>

                
                <h5 v-if="!addAddress"><a href="#" @click.prevent="addAddress = !addAddress">Add address &nbsp; +</a></h5>
                
                <h4 v-if="addAddress">Business Address</h4>
                <div class="form-group" v-if="addAddress">
                    <label for="Str_Num">Street & Number</label>
                    <span>
                        <input type="text" v-model="form.street" name="street" id="street" placeholder="Street">
                        <input type="number" v-model="form.number" name="number" id="number" placeholder="Number">
                    </span>
                        <label for="city_Zcode">City & Zip Code</label>
                    <span>
                        <input type="text" name="city" v-model="form.city" id="city" placeholder="City">
                        <input type="number" name="Zcode" v-model="form.zip" id="Zcode" placeholder="Zip code">
                    </span>

                    <label for="Country_state">Country & State</label>
                    <span>
                    
                    <select  class="country" v-model="form.country">
                        <option value="" selected>Country</option>
                        <option value="USA">USA</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="England">England</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                        <option value="Itali">Itali</option>
                        <option value="SOuth Africa">South Africa</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Finland">Finland</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Japan">Japan</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    <input type="text" name="state" v-model="form.state" id="state" placeholder="state">
                </span>
                </div>

                <br>
                <h4>Contact Information</h4>
                <div class="form-group" v-for="(contact, id) in form.contacts" :key="id">
                    <label :for="'company_name'+id">Contact name</label>
                    <input type="text" :name="'company_name'+id" :id="'company_name'+id" v-model="form.contacts[id].name" placeholder="e.g Ben Davies">
                
                    <label :for="'company_email'+id">Contact email</label>
                    <input type="text" :name="'company_email'+id" :id="'company_email'+id" v-model="form.contacts[id].email" placeholder="e.g Ben Davies">
                </div>
                <h5><a href="#" @click.prevent="addContact">Add other contacts &nbsp; +</a></h5>
            </section>
            <section>
                <button @click.prevent="next">Next</button>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return {
            addAddress: false,
            form:{
                company_name: '',
                street: '',
                number: '',
                city: '',
                zip: '',
                country: '',
                state: '',
                contacts: [
                    {name: '', email: ''}
                ]
            }
        }
    },
    methods:{
        addContact(){
            this.form.contacts.push({name: '', email: ''});
        },

        next(){
            for(let val in this.form){
                if(this.addAddress){
                    if(this.form[val] === '') {
                        alert(val + ' is a required field');
                        return;
                    }
                }else{ 
                    if(this.form.company_name === '') {
                        alert('Company name is a required field');
                        return;
                    }
                }
            }
            this.$store.commit('SET_CLIENT_INFO', this.form);
        },
        previous(){
            this.$store.commit('PREVIOUS_FORM');
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Ubuntu;
    }

    .container-fluid {
        margin: 0;
        padding: 0;
    }

    button:hover{
        opacity: .5;
    }
    .header {
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
        border-bottom: 2px solid #E5E5E5;
    }

    .header_content {
        background-color: white;
        height: 100%;
        float: left;
        padding: 0;
        font-size: 3.0rem;
    }
    .header_content button {
        width: 100%;
        height: 100%;
        background-color: white;
        border: 1px solid #E5E5E5;
        font-weight: lighter;
        color: #E5E5E5;
    }

    .header_control button {
        width: 50%;
        padding: 0;
        font-size: .8em;
    }

    .client {
        font-weight: bold;
        padding-top: 0px;
        color: black;
        border: 1px solid #E5E5E5;
    }

    .next{
        color: white;
        background-color: #E5E5E5;
        width: 100%;
        font-family: ubuntu;
        font-size: 2rem;
    }


    main {
        clear: both;
        width: 80%;
        margin: 0 auto;
        padding: 25px 0;
    }

    main .content {
        border: 1px solid #E5E5E5;
        padding: 20px;
    }

    main .content h4 {
        font-weight: bold;
    }

    .content h5 {
        font-weight: bolder;
    }

    .content h2, h4, h5 {
        margin-bottom: 20px;
    }

    .content .form-group {
        display: grid;
        grid-template-columns: 1fr 2fr;
        box-sizing: border-box;
    }

    
    .content .form-group span {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .form-group label {
        font-weight: lighter;
    }

    .form-group span input {
        width: 80%;
    }

    .form-group input {
        margin-bottom: 15px;
        width: 90%;
        padding: 0 10px;
    }
    
    .country {
        height: 29px;
        overflow: hidden;
        width: 80%;
    } 

    main section:last-child{
        width: 200px;
        margin: 0 auto;         
        margin-top: 30px;        
        font-size: 2rem;
    }

    main  section > button {
        border: none;
        width: 100%;
        padding: 10px 20px;
        margin: 0 auto;
        background-color: #E5E5E5;
        color: white;
    }

    @media screen and (min-width: 900px){
        main {
            width: 60%;
        }
        .content .form-group {
            grid-template-columns: 1fr 3fr;
        }  
        .country {
            height: 29px;
            overflow: hidden;
            width: 80%;
        }
    }

    
</style>