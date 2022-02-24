<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- User Profile View Page section -->
    <section>
        <!-- Header for the User Profile View Page -->
        <HeaderSignout />
        <!-- Div to contain the User Profile View page main content -->
        <div class="container profileViewContent">
            <!-- Profile Heading row -->
            <div class="row">
                <HeadingSection class="offset-l1 offset-s1 col l10 s10" headingText="Your User Profile"/>
            </div>
            <!-- Equipment Signout Site Account Information row -->
            <div class="row">
                <!-- Username information -->
                <div class="offset-l1 offset-s1 col l4 s10 profileInfo">
                    <h4>Username:  </h4><h6>{{this.$parent.equipmentSiteUser.nameFirst + ` ` + this.$parent.equipmentSiteUser.nameLast}}</h6>
                </div>
                <!-- DC student ID information -->
                <div class="offset-l2 offset-s1 col l4 s10 profileInfo">
                    <h4>Student ID:  </h4><h6>{{this.$parent.currentId}}</h6>
                </div>
                <!-- DC Email information -->
                <div class="offset-l1 offset-s1 col l4 s10 profileInfo">
                    <h4>DC Email:  </h4><h6>{{this.$parent.equipmentSiteUser.emailDc}}</h6>
                </div>
                <!-- DC Program information -->
                <div class="offset-l2 offset-s1 col l4 s10 profileInfo">
                    <h4>DC Program:  </h4><h6>{{this.$parent.equipmentSiteUser.dcProgramName}}</h6>
                </div>
                <!-- Other Email information -->
                <div class="offset-l1 offset-s1 col l4 s10 profileInfo">
                    <h4>Other Email:  </h4><h6>{{this.$parent.equipmentSiteUser.emailOther}}</h6>
                </div>
                <!-- DC Program Year information -->
                <div class="offset-l2 offset-s1 col l4 s10 profileInfo">
                    <h4>DC Program Year:  </h4><h6>Year {{this.$parent.equipmentSiteUser.dcProgramYear}}</h6>
                </div>
            </div>
            <!-- Edit profile button row -->
            <div class="row">
                <ButtonSection id="editProfileButton" class="offset-l4 offset-s2 col l4 s8" buttonText="Edit Profile" :buttonAction="switchToProfileEditPage"/>
            </div>
            <!-- Return to Equipment Page button row -->
            <div class="row">
                <ButtonSection class="offset-l4 offset-s2 col l4 s8" buttonText="Return to Equipment Page" :buttonAction="switchToEquipmentPage"/>
            </div>        
        </div>
        <!-- Footer for the User Profile View Page -->
        <FooterSignout />
    </section>
</template>

<script>
//import settings to gather components for the User Profile View page
import HeaderSignout from "../components/HeaderSignout.vue";
import FooterSignout from "../components/FooterSignout.vue";
import HeadingSection from "../components/HeadingSection.vue";
import ButtonSection from "../components/ButtonSection.vue";

//export settings for the User Profile View page
export default {
    name: "UserProfileViewPage",
    components: {
        HeaderSignout,
        FooterSignout,
        HeadingSection,
        ButtonSection
    },
    //methods to change pages when buttons are pressed
    methods: {
        //function to switch to the profile edit page
        switchToProfileEditPage() {
            this.$emit("pageDisplay", {
                page: "profileEditPage",
            });
        },
        //function to switch to the equipment page
        switchToEquipmentPage() {
            this.$emit("pageDisplay", {
                page: "equipmentPage",
            });
        },
    }
}
</script>

<style>
    /* profileViewContent style settings */
    .profileViewContent {
        background-color: #0B8261;
        height: 100%;
        padding-bottom: 3rem;
    }

    /* profileInfo style settings */
    .profileInfo {
        color: #fff;
        text-align: center;
    }

    /* editProfileButton style settings */
    #editProfileButton {
        margin-top: 2rem;
    }
</style>