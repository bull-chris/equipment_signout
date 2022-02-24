<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Account Creation Page section  -->
    <section>
        <!-- Header for the Account Creation page -->
        <HeaderSignout />
        <!-- Div to contain the Account Creation page main content -->
        <div class="container accountCreationContent">
            <!-- Heading Title Row -->
            <div class="row">
                <HeadingSection class="offset-l1 offset-s1 col l10 s10" headingText="MAD Equipment Account Creation"/>
            </div>
            <!-- Subheading row -->
            <div class="row">
                <div class="col l1 s1"></div>
                <SubHeadingSection class="col l10 s10" subHeadingText="Create your new account below" />
            </div>
            <!-- User ID label and creation input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 createInfoLabel">
                    <h5>Student ID:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="createUserIdInput" inputPlaceholder="Enter User ID..." @updateInputModel="setProfileUserId"/>
            </div>
            <!-- User first name label and creation input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 createInfoLabel">
                    <h5>First Name:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="createUserFirstNameInput" inputPlaceholder="Enter first name..." @updateInputModel="setProfileUserFirstName"/>
            </div>
            <!-- User last name label and creation input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 createInfoLabel">
                    <h5>Last Name:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="createUserLastNameInput" inputPlaceholder="Enter last name..." @updateInputModel="setProfileUserLastName"/>
            </div>
            <!-- DC email label and creation input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 createInfoLabel">
                    <h5>DC Email:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="createDcEmailInput" inputPlaceholder="Enter DC email..." @updateInputModel="setProfileUserDcEmail"/>
            </div>
            <!-- Other email label and creation input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 createInfoLabel">
                    <h5>Other Email:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="createOtherEmailInput" inputPlaceholder="Enter Other Email..." @updateInputModel="setProfileUserOtherEmail"/>
            </div>
            <!-- Password label and creation input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 createInfoLabel">
                    <h5>Password:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="password" inputName="createPasswordInput" inputPlaceholder="Create Password..." @updateInputModel="setProfileUserPassword"/>
            </div>
            <!-- Confirm account setup button row -->
            <div class="row">
                <ButtonSection id="confirmAccountButton" class="offset-l4 offset-s2 col l4 s8" buttonText="Confirm Account Setup" :buttonAction="confirmProfileDetails"/>
            </div>
            <!-- Cancel account setup button row -->
            <div class="row">
                <ButtonSection class="offset-l4 offset-s2 col l4 s8" buttonText="Cancel Account Setup" :buttonAction="switchToSignInPage"/>
            </div>        
        </div>
        <!-- Footer for the Account Creation page -->
        <FooterSignout />
    </section>
</template>

<script>
//import settings to gather components for the Account Creation page
import HeaderSignout from "../components/HeaderSignout.vue";
import FooterSignout from "../components/FooterSignout.vue";
import HeadingSection from "../components/HeadingSection.vue";
import SubHeadingSection from "../components/SubHeadingSection.vue";
import ButtonSection from "../components/ButtonSection.vue";
import InputSection from "../components/InputSection.vue";

//export settings for the Account Creation Page
export default {
    name: "AccountCreationPage",
    components: {
        HeaderSignout,
        FooterSignout,
        HeadingSection,
        SubHeadingSection,
        ButtonSection,
        InputSection
    },
    //data to be used to create the user profile
    data () {
        return {
            profileUser: {
                profileId: "",
                profileFirstName: "",
                profileLastName: "",
                profileOtherEmail: "",
                profileDcEmail: "",
                password: ""
            }
        }
    },
    //methods to change pages when buttons are pressed
    methods: {
        //function to switch pages to the sign in page
        switchToSignInPage() {
            this.$emit("pageDisplay", {
                page: "signInPage",
            });
        },
        //function to confirm the account details
        confirmProfileDetails() {
            this.$emit("pageDisplay",  {
                page: "confirmAccountCreation",
                userStudentId: this.profileUser.profileId,
                userFirstName: this.profileUser.profileFirstName,
                userLastName: this.profileUser.profileLastName,
                userOtherEmail: this.profileUser.profileOtherEmail,
                userDcEmail: this.profileUser.profileDcEmail,
                userPassword: this.profileUser.password
            });
        },
        //function to create the profile student id
        setProfileUserId(updatedInfo) {
            this.profileUser.profileId = updatedInfo.newInfo;
        },
        //function to create the profile user first name
        setProfileUserFirstName(updatedInfo) {
            this.profileUser.profileFirstName = updatedInfo.newInfo;
        },
        //function to create the profile user last name
        setProfileUserLastName(updatedInfo) {
            this.profileUser.profileLastName = updatedInfo.newInfo;
        },
        //function to create the profile user other email
        setProfileUserOtherEmail(updatedInfo) {
            this.profileUser.profileOtherEmail = updatedInfo.newInfo;
        },
        //function to create the profile user dc email
        setProfileUserDcEmail(updatedInfo) {
            this.profileUser.profileDcEmail = updatedInfo.newInfo;
        },
        //function to create the profile user password
        setProfileUserPassword(updatedInfo) {
            this.profileUser.password = updatedInfo.newInfo;
        }
    }
}
</script>

<style>
    /* accountCreationContent style settings */
    .accountCreationContent {
        background-color: #0B8261;
        height: 100%;
        padding-bottom: 3rem;
    }

    /* createInfoLabel style settings */
    .createInfoLabel {
        text-align: left;
        margin-bottom: 1rem;
        margin-top: -0.25rem;
        color: #fff;
    }

    /* confirmAccountButton style settings */
    #confirmAccountButton {
        margin-top: 2rem;
    }

</style>