<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- User Profile Edit Page section  -->
    <section>
        <!-- Header for the User Profile Edit Page -->
        <HeaderSignout />
        <!-- Div to contain the User Profile Edit main content -->
        <div class="container profileEditContent">
            <!-- Heading Title row -->
            <div class="row">
                <HeadingSection class="offset-l1 offset-s1 col l10 s10" headingText="Edit your User Profile"/>
            </div>
            <!-- Edit First name label and input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 editInfoLabel">
                    <h5>First Name:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="editfirstNameInput" :inputPlaceholder="this.$parent.equipmentSiteUser.nameFirst" @updateInputModel="setProfileUserFirstName"/>
            </div>
            <!-- Edit DC Email label and input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 editInfoLabel">
                    <h5>Last Name:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="editlastNameInput" :inputPlaceholder="this.$parent.equipmentSiteUser.nameLast" @updateInputModel="setProfileUserLastName"/>
            </div>
            <!-- Edit Other Email label and input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 editInfoLabel">
                    <h5>Other Email:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="text" inputName="editOtherEmailInput" :inputPlaceholder="this.$parent.equipmentSiteUser.emailOther" @updateInputModel="setProfileUserOtherEmail"/>
            </div>
            <!-- Current Password label and input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 editInfoLabel">
                    <h5>Current Password:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputType="password" inputName="inputCurrentPasswordInput" inputPlaceholder="Current Password Information..." @updateInputModel="setProfileUserCurrentPassword"/>
            </div>
            <!-- New Password label and input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 editInfoLabel">
                    <h5>New Password:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputId="setPasswordInput" inputType="password" inputName="editPasswordInput" inputPlaceholder="New Password Information..." @updateInputModel="setProfileUserNewPassword"/>
            </div>
            <!-- Confirm edited Password label and input row -->
            <div class="row">
                <div class="offset-l1 offset-s1 col l3 s10 editInfoLabel">
                    <h5>Confirm new edited Password:</h5>
                </div>
                <InputSection class="offset-s1 col l7 s10" inputId="confirmPasswordInput" inputType="password" inputName="confirmEditPasswordInput" inputPlaceholder="Confirm new edited Password Information..." @updateInputModel="setProfileUserConfirmNewPassword"/>
            </div>
            <!-- Confirm profile edits button row -->
            <div class="row">
                <ButtonSection class="offset-l4 offset-s2 col l4 s8" buttonText="Confirm Profile Edits" :buttonAction="confirmProfileEdits"/>
            </div>
            <!-- Cancel edits button row -->
            <div class="row">
                <ButtonSection class="offset-l4 offset-s2 col l4 s8" buttonText="Cancel Edits" :buttonAction="switchToProfileViewPage"/>
            </div>        
        </div>
        <!-- Footer for the User Profile Edit Page -->
        <FooterSignout />
    </section>
</template>

<script>
//import settings to gather components for the User Profile Edit page
import HeaderSignout from "../components/HeaderSignout.vue";
import FooterSignout from "../components/FooterSignout.vue";
import HeadingSection from "../components/HeadingSection.vue";
import ButtonSection from "../components/ButtonSection.vue";
import InputSection from "../components/InputSection.vue";

//export settings for the User Profile Edit Page
export default {
    name: "UserProfileEditPage",
    components: {
        HeaderSignout,
        FooterSignout,
        HeadingSection,
        ButtonSection,
        InputSection
    },
    //data to be used to update the user profile information
    data () {
        return {
            profileUser: {
                profileFirstName: "",
                profileLastName: "",
                profileOtherEmail: "",
                profileCurrentPassword: "",
                profileNewPassword: "",
                profileConfirmNewPassword: ""
            }
        }
    },
    //methods to change pages when buttons are pressed
    methods: {
        //function to switch pages to the profile view page
        switchToProfileViewPage() {
            this.$emit("pageDisplay", {
                page: "profileViewPage",
            });
        },
        //function to confirm the profile edits
        confirmProfileEdits() {
            this.$emit("pageDisplay",  {
                page: "confirmProfileEdits",
                userFirstName: this.profileUser.profileFirstName,
                userLastName: this.profileUser.profileLastName,
                userOtherEmail: this.profileUser.profileOtherEmail,
                userCurrentPassword: this.profileUser.profileCurrentPassword,
                userNewPassword: this.profileUser.profileNewPassword,
                userConfirmNewPassword: this.profileUser.profileConfirmNewPassword
            });
        },
        //function to update the profile user first name
        setProfileUserFirstName(updatedInfo) {
            this.profileUser.profileFirstName = updatedInfo.newInfo;
        },
        //function to update the profile user last name
        setProfileUserLastName(updatedInfo) {
            this.profileUser.profileLastName = updatedInfo.newInfo;
        },
        //function to update the profile user other email
        setProfileUserOtherEmail(updatedInfo) {
            this.profileUser.profileOtherEmail = updatedInfo.newInfo;
        },
        //function to update the profile user current password
        setProfileUserCurrentPassword(updatedInfo) {
            this.profileUser.profileCurrentPassword = updatedInfo.newInfo;
        },
        //function to update the profile user new password
        setProfileUserNewPassword(updatedInfo) {
            this.profileUser.profileNewPassword = updatedInfo.newInfo;
        },
        //function to update the profile user confirm new password
        setProfileUserConfirmNewPassword(updatedInfo) {
            this.profileUser.profileConfirmNewPassword = updatedInfo.newInfo;
        }
    }
}
</script>

<style>
    /* profileEditContent style settings */
    .profileEditContent {
        background-color: #0B8261;
        height: 100%;
        padding-bottom: 3rem;
    }

    /* editInfoLabel stle settings */
    .editInfoLabel {
        text-align: left;
        margin-bottom: 1rem;
        margin-top: -0.25rem;
        color: #fff;
    }
</style>