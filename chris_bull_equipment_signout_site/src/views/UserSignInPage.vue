<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- User Sign In Page section  -->
    <section>
        <!-- Header for the User Sign In page -->
        <HeaderSignout />
        <!-- Div to contain the User Sign In page main content -->
        <div class="container signInContent">
            <!-- Heading Title row -->
            <div class="row">
                <HeadingSection class="offset-l1 offset-s1 col l10 s10" headingText="MAD Equipment Portal"/>
            </div>
            <!-- Subheading Title row -->
            <div class="row">
                <div class="col l1 s1"></div>
                <SubHeadingSection class="col l10 s10" subHeadingText="Sign in to access the Equipment Portal"/>
            </div>
            <!-- Sign In information row  -->
            <div class="row">
                <!-- User sign in interaction column -->
                <div class="offset-l1 offset-s1 col l4 s10">
                    <div class="subtitleText">User ID:</div>
                    <InputSection inputType="text" inputName="userIdInput" inputValue="123" inputPlaceholder=" Enter User ID..." @updateInputModel="updateUserId"/>
                    <div class="subtitleText">Password:</div>
                    <InputSection inputType="password" inputName="passwordInput" inputValue="password" inputPlaceholder=" Enter User Password..." @updateInputModel="updateUserPass"/>
                    <ButtonSection class="offset-l2 offset-s2 col l14 s8" id="signInButton" buttonText="Sign In" :buttonAction="accountSignIn"/>
                </div>
                <!-- User forgotten password and new account creation column -->
                <div class="offset-l2 offset-s1 col l4 s10">
                    <div class="subtitleText">No account?</div>
                    <div class="instructionText">
                        Click <router-link to="/equipment-signout/accountcreation">here</router-link> to initialize your account.
                    </div>
                    <div class="subtitleText">Forgot your Password?</div>
                    <div class="instructionText">Click <a>here</a> to reset your password.</div>
                </div>
            </div>
        </div>
        <!-- Footer for User Sign In Page -->
        <FooterSignout />
    </section>
</template>

<script>
//import settings to gather components for the User Sign In page
import HeaderSignout from "../components/HeaderSignout.vue";
import FooterSignout from "../components/FooterSignout.vue";
import HeadingSection from "../components/HeadingSection.vue";
import SubHeadingSection from "../components/SubHeadingSection.vue";
import ButtonSection from "../components/ButtonSection.vue";
import InputSection from "../components/InputSection.vue";

//export settings for the User Sign In Page
export default {
    name: "UserSignInPage",
    components: {
        HeaderSignout,
        FooterSignout,
        HeadingSection,
        SubHeadingSection,
        ButtonSection,
        InputSection
    },
    //data to be passed as the user sign in information 
    data() {
        return {
            equipmentUser: {
                userId: "123",
                userPass: "password",
            },
        }
    },
    //methods to change pages when buttons are pressed
    methods: {
        //function to sign the user in
        accountSignIn() {
            this.$emit("pageDisplay", {
                page: "signUserIn",
                userId: this.equipmentUser.userId,
                userPass: this.equipmentUser.userPass
            });
        },
        //function to update the userId
        updateUserId(updatedInfo) {
            this.equipmentUser.userId = updatedInfo.newInfo;
        },
        //function to update the userPass
        updateUserPass(updatedInfo) {
            this.equipmentUser.userPass = updatedInfo.newInfo;
        }
    }
}
</script>

<style>
    /* signInContent style settings */
    .signInContent {
        background-color: #0B8261;
        height: 100%;
        padding-bottom: 3rem;
    }

    /* signInPortalHeading style settings */
    .signInPortalHeading {
        height: 75px;
        margin: 4rem 0rem;
    }

    /* signInSubHeading style settings */
    .signInSubHeading {
        height: 40px;
        margin: 3rem 0rem 4rem 0rem;
    }

    /* signInButton style settings */
    #signInButton {
        margin-top: 2rem;
    }

    /* subtitleText style settings */
    .subtitleText {
        margin: 0.5rem 0rem;
        font-size: 24px;
        color: #fff;
    }

    /* instructionText style settings */
    .instructionText {
        text-align: left;
        font-size: 20px;
        padding-bottom: 1rem;
        color: #fff;
    }

    /* instructionText a tag style settings */
    .instructionText a {
        color: #fff;
        text-decoration: underline;
    }

    /* style settings for mobile */
    @media screen and (max-width: 540px) {
        /* signInButton style settings */
        #signInButton {
            margin-bottom: 2rem;
        }
    }
</style>