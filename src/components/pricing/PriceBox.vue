<template>
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="pricecol p-2 pt-4">
            <p class="pricetext">{{plan.name}}</p>
            <div class="price">
                <h5 class="pricenumber">{{plan.price}}<p>/mo</p>
                </h5>
            </div>
            <ul class="pricelist pt-3">
                <p class="m-0" style="font-size: 12px" v-if="plan.name !== 'Starter'">{{plan.addText}}</p>
                <li v-for="(feature, id) in plan.features" :key="id">
                    <span>
                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 13.1003 0.988061 15.07 1.86572" stroke="#091429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 3.00574L11 13.0157L8 10.0157" stroke="#091429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    {{feature}}
                </li>
            </ul>
            <div class="price-button p-3">
                <router-link class="btn btn-primary btn-block" to="/register">Sign up for free</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceBox",
    props: {
        plan: Object
    }
}
</script>

<style scoped>
    .pricing-header {
        background: #091429
    }

    .pricing-header .nav-link {
        font-size: 15px;
        color: aliceblue;
    }

    .navbar-collapse {
        justify-content: flex-end
    }

    .pricing {
        width: 100%;
        padding: 70px;
    }


    .pricing .title-header {
        text-align: center
    }

    .pricing .title-header h1 {
        font-size: 65px;
        padding-left: 160px;
        padding-right: 160px;
    }

    .pricecol {
        height: 450px;
        border: 1px solid rgb(197, 132, 132);
        position: relative;
    }

    .pricetext {
        text-align: center;
        font-size: 30px;

    }

    .pricenumber {
        text-align: center;
        font-size: 48px;

    }

    .price-button {
        width: 100%;
        position: absolute;
        bottom: 2%;
        left: 0;
    }

    .pricelist {
        list-style: none;
        text-align: left;
    }

    .pricelist li {
        margin: 5px auto;
    }

    .pricelist li span {
        margin: auto 5px
    }

    .price-button a {
        background: #0ABAB5;
        color: #fff;
        border: none
    }


    .price-button a:hover {
        background: rgb(9, 155, 150);
    }

    .pricenumber::before {
        font-size: 17px;
        content: '\0024';
        position: relative;
        left: -2px;
        top: -25px
    }

    .pricenumber {
        position: relative;
    }

    .pricenumber p {
        font-size: 17px;
        display: inline;
    }
</style>