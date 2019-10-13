<template>
    <guest-layout>
        <section class="pricing">
            <div class="container">
                <div class="title-header">
                    <h1>Choose a plan that works for you</h1>
                </div>
                <div class="row mt-5 pt-5">
                    <price-box v-for="(plan, id) in planList" :key="id" :plan="plan"></price-box>
                </div>
            </div>
        </section>
        <article>
            <div class="enter-div">
                <h4 id="enter-line">Enterprise ready tools</h4>
                <h6>with dedicated support and quick and consistent deolverance of new features, you can trust your<br>
                    process in our able hands</h6>
                <br>
                <button type="button" class="btn">Contact Sales</button>
            </div>
        </article>
    </guest-layout>
</template>

<script>
import guestLayout from "@/layouts/Guest.vue"
import priceBox from "@/components/pricing/PriceBox.vue"
export default {
    name: "Landing",
    components:{
        guestLayout,
        priceBox
    },
    data: function(){
        return {
            planList: [
                {
                    name: "Starter",
                    price: "0.00",
                    features: [
                        "Three active projects",
                        "Two collaborators per project",
                        "One of each generatable document"
                    ]
                },
                {
                    name: "Pro",
                    price: "24.99",
                    addText: "All of starter features and",
                    features: [
                        "Unlimited active projects",
                        "Five collaborators per project",
                        "Three of each generatable document"
                    ]
                },
                {
                    name: "Pro plus",
                    price: "79.99",
                    addText: "All of starter and pro features",
                    features: [
                        "Unlimited collaborators",
                        "Unlimited document generation",
                        "Dedicated support",
                        "Beta access to test new features"
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
article {
    background-color:#091429;
    padding: 25px;
}

footer {
    background-color: white;
    padding: 25px;
}

.enter-div {
    text-align: center;
    color: white;
    font-weight: normal;
    font-style: normal;
    
}

#enter-line {
    line-height: 65px;
}

#lancer {

font-style: normal;
font-weight: normal;
font-family: 'Pacifico', cursive;
font-size: 20px;
}

#btn-sub {
    background: #0ABAB5;
    border-radius: 4px;
    color: #FFFFFF;
}

#email-input {
background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 2px;
color: black;
}

.btn {
background: #091429;
border: 1px solid #0ABAB5 ;
color: #0ABAB5;
box-sizing: border-box;
border-radius: 6px;
}

.link {
    color: black;
}


@media only screen and (max-width: 600px) {
    .pricing .title-header h1{
        padding: 0;
        font-size: 35px
    }
    .pricing{
        padding: 20px;
    }

    

    .pricecol{
        margin: 20px auto
    }
  }
  </style>