<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Main Equipment Page Section  -->
    <section>
        <!-- Header for the Equipment Page -->
        <HeaderSignout />
        <!-- Div to contain the Equipment Page main content -->
        <div class="container equipmentContent">
            <!-- Heading Title row -->
            <div class="row">
                <HeadingSection class="offset-l1 offset-s1 col l10 s10" headingText="Welcome to MAD Equipment Signout"/>
            </div>
            <!-- User Profile name and ID information, view profile button, and sign out button row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l4 s10 userProfileText">
                    <h5>Signed in as: {{this.$parent.equipmentSiteUser.nameFirst}}</h5>
                </div>
                <ButtonSection class="offset-l1 offset-s1 col l2 s4" buttonText="Profile" :buttonAction="switchToProfileViewPage"/>
                <ButtonSection class="offset-l1 offset-s2 col l2 s4" buttonText="Sign out" :buttonAction="switchToSignInPage"/>
            </div>
            <!-- Equipment Selection Tabs row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l10 s10 equipmentSelectionTabs">
                    <!-- Tabs for the equipment from the database -->
                    <Tabs :theme="equipmentSelectionStyle">
                        <!-- Tab items for each equipment type -->
                        <TabItem v-for="(equipmentTab, currentIndex) in this.$parent.equipmentTypes" :key="currentIndex">
                            <template #name> {{ equipmentTab.name }}</template>
                            <!-- Equipment Available Subheading row -->
                            <div class="row">
                                <div class="col l1 s1"></div>
                                <SubHeadingSection id="equipmentTitle" class="col l10 s10" :subHeadingText="equipmentTab.name + ` Available`" />
                            </div>
                            <!-- Equipment Available list -->
                            <div class="tab">
                                <ListOfEquipment :totalEquipment="equipmentTab.assets" @equipmentToCheckoutCart="sendEquipmentToCheckoutCart" />
                            </div>
                        </TabItem>
                    </Tabs>
                </div>
            </div>
            <!-- Number of user selected equipment row -->
            <div class="row">
                <div class="offset-l4 offset-s2 col l4 s8 totalSelectedNumber">
                    <h5>Total Equipment Selected: {{this.$parent.amountSelected}} </h5>
                </div>
            </div>
            <!-- Checkout Equipment and view cart button row -->
            <div class="row">
                <ButtonSection id="checkoutCartButton" class="offset-l4 offset-s2 col l4 s8" buttonText="Go to Cart Checkout" :buttonAction="switchToCheckoutCartPage"/>
            </div>       
        </div>
        <!-- Footer for the Equipment Page -->
        <FooterSignout />
    </section>
</template>

<script>
//import settings to gather components for the Main Equipment page
import HeaderSignout from "../components/HeaderSignout.vue";
import FooterSignout from "../components/FooterSignout.vue";
import HeadingSection from "../components/HeadingSection.vue";
import SubHeadingSection from "../components/SubHeadingSection.vue";
import ButtonSection from "../components/ButtonSection.vue";
import { Tabs, TabItem } from "vue-material-tabs";
import ListOfEquipment from "../components/ListOfEquipment.vue";

//export settings for the Main Equipment page
export default {
    name: "MainEquipmentPage",
    components: {
        HeaderSignout,
        FooterSignout,
        HeadingSection,
        SubHeadingSection,
        ButtonSection,
        Tabs,
        TabItem,
        ListOfEquipment
    },
    //data to be used as the theme for tabs
    data: () => ({
        equipmentSelectionStyle: {
            slider: "#fff",
            arrow: "#fff",
            navActiveItem: "#0B8261",
            navItem: "#0B8261",
            nav: "#fff"
            
        }
    }),
    //methods to change pages when buttons are pressed
    methods: {
        //function to switch pages to the checkout cart page
        switchToCheckoutCartPage() {
            this.$emit("pageDisplay", {
                page: "checkoutCartPage",
            });
        },
        //function to switch pages to the profile view page
        switchToProfileViewPage() {
            this.$emit("pageDisplay", {
                page: "profileViewPage",
            });
        },
        //function to switch pages to the sign in page
        switchToSignInPage() {
            this.$emit("pageDisplay", {
                page: "signInPage",
            });
        },
        //function to send equipment to the checkout cart
        sendEquipmentToCheckoutCart(chosenEquipment) {
            this.$emit("pageDisplay", {
                page: "sendEquipmentToCart",
                equipment: chosenEquipment.equipment
            });
        }
    }
}
</script>

<style>
    /* equipmentContent style settings */
    .equipmentContent {
        background-color: #0B8261;
        height: 100%;
        padding-bottom: 3rem;
    }

    /* userProfileText style settings */
    .userProfileText {
        margin-bottom: 20px;
    }

    /* tab nav style settings */
    .tab__nav {
        background-color: #fff;
        line-height: 1.5;
    }

    /* tabs style settings */
    /* Reference: https://www.w3schools.com/css/css_important.asp */
    /* Referenced above link for information on usage of !important */
    .tabs, .vmt__tab-item {
        background: transparent !important;
    }

    /*tabs tab style settings */
    .tabs .tab {
        text-align: left;
    }

    /* equipmentSelectionTabs style settings */
    .equipmentSelectionTabs {
        height: auto;
    }

    /* equipmentTitle style settings */
    #equipmentTitle {
        margin-top: 2rem;
        text-align: center;
    }

    /* totalSelectedNumber style settings */
    .totalSelectedNumber {
        margin-top: 1rem;
        text-align: center;
        color: #fff;
    }

    /* checkoutCartButton style settings */
    #checkoutCartButton {
        margin-top: 1rem;
    }
</style>