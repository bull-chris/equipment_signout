<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Checkout cart page section -->
    <section>
        <!-- Header for the Checkout cart page -->
        <HeaderSignout />
        <!-- Div to contain the Checkout cart page main content -->
        <div class="container checkoutContent">
            <!-- Heading Title row -->
            <div class="row">
                <HeadingSection class="offset-l1 offset-s1 col l10 s10" headingText="MAD Equipment Cart Checkout"/>
            </div>
            <!-- Subheading Title row -->
            <div class="row">
                <div class="col l1 s1"></div>
                <SubHeadingSection class="col l10 s10" subHeadingText="Your Selected Equipment" />
            </div>
            <!-- User selected equipment list row -->
            <div class="row">
                <!-- Div to show the list if equipment is selected -->
                <div v-if="this.$parent.userSelectedList.length > 0" class="offset-l1 offset-s1 col l10 s10 equipmentSelectedList">
                    <ul>
                        <!-- Loop through each selected equipment in the user list to display -->
                        <li v-for="(cartEquipment, currentIndex) in this.$parent.userSelectedList" :key="currentIndex">
                            <h5 class="selectedEquipment">{{ cartEquipment.asset_description }}<span class="removeCartEquipment" @click="removeEquipmentFromCheckout(cartEquipment, currentIndex)">Remove Selection</span></h5>
                        </li>
                    </ul>
                </div>
                <!-- Div to show no equipment selected heading -->
                <div v-else class="offset-l1 offset-s1 col l10 s10 equipmentSelectedList">
                    <h5 id="noEquipmentDisplay">You haven't selected any Equipment!</h5>
                </div>
            </div>
            <!-- Confirm selected equipment button row -->
            <div v-if="this.$parent.userSelectedList.length > 0" class="row">
                <ButtonSection class="offset-l4 offset-s2 col l4 s8" buttonText="Checkout Selected Equipment" :buttonAction="checkoutChosenEquipment"/>
            </div>
            <!-- Return to Equipment page button row -->
            <div class="row">
                <ButtonSection class="offset-l4 offset-s2 col l4 s8" buttonText="Return to Equipment Page" :buttonAction="switchToEquipmentPage"/>
            </div>     
        </div>
        <!-- Footer for the Checkout cart page -->
        <FooterSignout />
    </section>
</template>

<script>
//import settings to gather components for the Checkout cart page
import HeaderSignout from "../components/HeaderSignout.vue";
import FooterSignout from "../components/FooterSignout.vue";
import HeadingSection from "../components/HeadingSection.vue";
import SubHeadingSection from "../components/SubHeadingSection.vue";
import ButtonSection from "../components/ButtonSection.vue";

//export settings for the Checkout cart page
export default {
    name: "CheckoutCartPage",
    components: {
        HeaderSignout,
        FooterSignout,
        HeadingSection,
        SubHeadingSection,
        ButtonSection
    },
    //methods to change pages when buttons are pressed
    methods: {
        //function to switch pages to the equipment page
        switchToEquipmentPage() {
            this.$emit("pageDisplay", {
                page: "equipmentPage",
            });
        },
        //function to checkout the chosen equipment
        checkoutChosenEquipment() {
            this.$emit("pageDisplay", {
                page: "equipmentCheckout",
            });
        },
        //function to remove the equipment from the checkout list
        removeEquipmentFromCheckout(equipmentToRemove, equipmentIndex) {
            equipmentToRemove.assets_available = true;
            this.$parent.userSelectedList.splice(equipmentIndex, 1);
            this.$parent.amountSelected -= 1;
        }
    }
    
}
</script>

<style>
    /* checkoutContent style settings */
    .checkoutContent {
        background-color: #0B8261;
        height: 100%;
        padding-bottom: 3rem;
    }

    /* equipmentSelectedList style settings */
    .equipmentSelectedList {
        background-color: #fff;
        height: auto;
        margin-bottom: 2rem;
    }

    /* selectedEquipment style settings */
    .selectedEquipment {
        color: #0B8261;
    }

    /* noEquipmentDisplay style settings */
    #noEquipmentDisplay {
        color: #0B8261;
        text-align: center;
    }

    /* span style settings */
    span {
        float: right;
        text-decoration: underline;
        cursor: pointer;
    }

    /* style settings for mobile */
    @media screen and (max-width: 540px) {
        /* selectedEquipment style settings */
        .selectedEquipment {
            font-size: 10px;
            line-height: 2.5;
        }
    }
</style>