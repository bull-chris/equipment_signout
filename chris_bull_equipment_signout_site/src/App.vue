<template>
  <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

  <!-- Div to hold the vue content for the Equipment Signout Site -->
  <div id="equipmentSignoutSiteContent">
    <!-- Router view to display current page content -->
    <router-view @pageDisplay=switchToPage />
  </div>
</template>

<script>
//import settings for the Equipment Signout Site
import materializePackage from 'materialize-css';

//export settings for the Equipment Signout Site
export default {
  mounted () {
    materializePackage.AutoInit()
  },
  //methods for the equipment signout vue app to use
  methods: {
    //switchToPage function to handle changing pages for buttons
    switchToPage(routePath) {
      switch (routePath.page) {
        //case for signing user in with sign in information
        case "signUserIn":
          this.signInUser(routePath.userId, routePath.userPass);
          break;
        //case for signing out
        case "signInPage":
          this.$router.push("/");
          break;
        //case for going to the equipment page
        case "equipmentPage":
          this.$router.push("/equipment-signout");
          break;
        //case for going to the profile view page
        case "profileViewPage":
          this.$router.push("/equipment-signout/userprofile/view");
          break;
        //case for going to the profile edit page
        case "profileEditPage":
          this.$router.push("/equipment-signout/userprofile/edit");
          break;
        //case for going to the account creation page
        case "accountCreationPage":
          this.$router.push("/equipment-signout/accountcreation");
          break;
        //case for going to the checkout cart page
        case "checkoutCartPage":
          this.$router.push("/equipment-signout/checkoutequipment");
          break;
        //case for sending equipment to the checkout cart
        case "sendEquipmentToCart":
          this.userSelectedList.push(routePath.equipment);
          this.amountSelected = this.userSelectedList.length;
          break;
        //case for checking out the equipment
        case "equipmentCheckout":
          this.checkoutEquipment();
          break;
        //case for confirming the profile edits
        case "confirmProfileEdits":
          this.editEquipmentProfie(routePath.userFirstName, routePath.userLastName, routePath.userOtherEmail, routePath.userCurrentPassword, routePath.userNewPassword, routePath.userConfirmNewPassword);
          break;
        //case for confirming the account creation
        case "confirmAccountCreation":
          this.createProfile(routePath.userStudentId, routePath.userFirstName, routePath.userLastName, routePath.userOtherEmail, routePath.userDcEmail, routePath.userPassword);
          break;
      }
    },
    //method to send the sign in data to the signout database and sign in the user
    signInUser(idToSend, passwordToSend) {

      //make a request to the equipment signout database
      const servicesRequest = {
        url: "https://staging.chrisbull-webdevelopment.ca/signout/services/login.php",
        method: "POST",
        data: {
          student_id: idToSend, //pass idToSend for student_id
          password: passwordToSend, //pass passwordToSend for password
        },
      };

      //use axios to get the data from the servicesRequest
      this.$axios(servicesRequest)
        .then((equipmentInfo) => {
          //check for errors with the data
          switch (equipmentInfo.data.error.id) {
            //if no errors, assign equipmentSiteUser with the user profile data
            case 0:
              this.currentId = idToSend;
              this.currentPassword = passwordToSend;
              this.equipmentSiteUser.nameFirst = equipmentInfo.data.borrower.first_name;
              this.equipmentSiteUser.nameLast = equipmentInfo.data.borrower.last_name;
              this.equipmentSiteUser.siteId = equipmentInfo.data.borrower.borrower_id;
              this.equipmentSiteUser.emailDc = equipmentInfo.data.borrower.dc_email;
              this.equipmentSiteUser.emailOther = equipmentInfo.data.borrower.other_email;
              this.equipmentSiteUser.dcProgramName = equipmentInfo.data.borrower.program_name;
              this.equipmentSiteUser.dcProgramYear = equipmentInfo.data.borrower.program_year;

              //call the gatherEquipment function to get the equipment data since the user has signed in
              this.gatherEquipment(idToSend);
              this.$router.push("/equipment-signout");
              break;
            //if there was an error signing in
            case 1:
              alert("An incorrect ID or Password were entered, please try again.");
              break;
            //default error message for other errors
            default:
              alert("There was an error signing in, please try again.");
              break;
          }
        }).catch((errorText) => {
          //if the servicesRequest failed, send an error message to the console
          console.error("Failure at signInUser(). " + errorText);
        });
    },
    //method to gather the equipment to display to the user
    gatherEquipment(userId) {

      //make a request to the equipment signout database
      const servicesRequest = {
        url: "https://staging.chrisbull-webdevelopment.ca/signout/services/get_assets.php",
        method: "POST",
        data: {
          student_id: userId //pass userId for student_id
        },
      };

      //use axios to get the data from the servicesRequest
      this.$axios(servicesRequest)
        .then((equipmentInfo) => {
          //check for errors with the data
          switch (equipmentInfo.data.error.id) {
            //if no errors, assign equipmentTypes with the categories data
            case 0:
              this.equipmentTypes = equipmentInfo.data.categories;
              break;
            //display error message otherwise
            default:
              alert("There was an error getting the data, please try again.");
              break;
          }
        }).catch((errorText) => {
          //if the servicesRequest failed, send an error message to the console
          console.error("Failure at gatherEquipment(). " + errorText);
        });
    },
    //method to checkout the user selected equipment
    checkoutEquipment() {

      //create a variable to hold all the equipment chosen for checkout
      let allEquipment = "";

      //loop through each equipment in the user selected equipment list
      this.userSelectedList.forEach((theEquipment) => {
        //if allEquipment is currently empty
        if (allEquipment == "") {
          //add the first equipment to allEquipment
          allEquipment = theEquipment.asset_description;
        }
        else {
          //add additional equipment with a | in between entries
          allEquipment += "|" + theEquipment.asset_description;
        }
      });

      //make a request to the equipment signout database
      const servicesRequest = {
        url: "https://staging.chrisbull-webdevelopment.ca/signout/services/add_assets_logged_out.php",
        method: "POST",
        data: {
          student_id: this.equipmentSiteUser.siteId, //pass equipmentSiteUser siteId for student_id
          assets: allEquipment //pass allEquipment for assets
        },
      };

      //use axios to get the data from the servicesRequest
      this.$axios(servicesRequest)
        .then((equipmentInfo) => {
          //check for errors with the data
          switch (equipmentInfo.data.error.id) {
            //if no errors, reset the user selected list and amount of equipment selected
            case 0:
              this.userSelectedList = [];
              this.amountSelected = 0;
              //display alert saying equipment was checked out, then sign user out
              alert("Your Equipment has been checked out! You will now be logged out. Please note: Your equipment will be held for 1 minute before returning to the database.");
              this.$router.push("/");
              break;
            //display error message otherwise
            default:
              alert("There was an error checking out equipment, please try again.");
              break;
          }
        }).catch((errorText) => {
          //if the servicesRequest failed, send an error message to the console
          console.error("Failure at checkoutEquipment(). " + errorText);
        });
    },
    //method to confirm the equipment user's profile information edits
    editEquipmentProfie(profileFirstName, profileLastName, profileOtherEmail, profileCurrentPassword, profileNewPassword, profileConfirmNewPassword) {

      //check if the new password fields match each other
      if (profileConfirmNewPassword == profileNewPassword) {
        //make a request to the equipment signout database
        const servicesRequest = {
          url: "https://staging.chrisbull-webdevelopment.ca/signout/services/update_borrower.php",
          method: "POST",
          data: {
            name_last: profileLastName, //pass profileLastName for name_last
            name_first: profileFirstName, //pass profileFirstName for name_first
            borrower_id: this.equipmentSiteUser.siteId, //pass equipmentSiteUser siteId  for borrower_id
            email_other: profileOtherEmail, //pass profileOtherEmail for email_other
            password_old: profileCurrentPassword, //pass profileCurrentPassword for password_old
            password_new: profileNewPassword //pass profileNewPassword for password_new
          },
        };

        //use axios to get the data from the servicesRequest
      this.$axios(servicesRequest)
        .then((equipmentInfo) => {
          //check for errors with the data
          switch (equipmentInfo.data.error.id) {
            //if no errors, go to the profile page to see new updated info
            case 0:
              //if a new password was created
              if (profileNewPassword != "") {
                //sign the user in with the new password to display the updated profile information
                this.signInUser(this.currentId, profileNewPassword);
              }
              else {
                //sign the user in with the current password to display the updated profile information
                this.signInUser(this.currentId, this.currentPassword);
              }
              break;
            //display error message regarding current password entry not matching the set current password
            case -10:
              alert(equipmentInfo.data.error.message);
              break;
            //display error message regarding no new password being entered
            case -12:
              alert(equipmentInfo.data.error.message);
              break;
            //display error message otherwise
            default:
              alert("There was an error updating your profile, please try again.");
              break;
          }
        }).catch((errorText) => {
          //if the servicesRequest failed, send an error message to the console
          console.error("Failure at checkoutEquipment(). " + errorText);
        });
      }
      else {
        //display alert that password fields do not match
        alert("Edit failed. The new password and confirm new password fields do not match.")
      }
    },
    //method to create a user profile
    createProfile(profileStudentId, profileFirstName, profileLastName, profileOtherEmail, profileDcEmail, profilePassword) {
      //make a request to the equipment signout database
      const servicesRequest = {
        url: "https://staging.chrisbull-webdevelopment.ca/signout/services/create_borrower.php",
        method: "POST",
        data: {
          name_last: profileLastName, //pass profileLastName for name_last
          name_first: profileFirstName, //pass profileFirstName for name_first
          student_id: profileStudentId, //pass profileStudentId for student_id
          email_dc: profileDcEmail, //pass profileDcEmail for email_dc
          email_other: profileOtherEmail, //pass profileOtherEmail for email_other
          password: profilePassword, //pass profilePassword for password
        },
      };

      //use axios to get the data from the servicesRequest
    this.$axios(servicesRequest)
      .then((equipmentInfo) => {
        //check for errors with the data
        switch (equipmentInfo.data.error.id) {
          //if no errors, go to the home page
          case 0:
            this.$router.push("/");
            break;
          //display error message regarding failure to create account
          case -1:
            alert(equipmentInfo.data.error.message);
            break;
          //display error message otherwise
          default:
            alert("There was an error creating your profile, please try again.");
            break;
        }
      }).catch((errorText) => {
        //if the servicesRequest failed, send an error message to the console
        console.error("Failure at createProfile(). " + errorText);
      });
    }
  },
  //data to be used by the equipment signout vue app
  data() {
    //assign default values for variables to hold signout database info in the future
    return {
      equipmentSiteUser: {
        nameFirst: "",
        nameLast: "",
        siteId: "",
        emailDc: "",
        emailOther: "",
        dcProgramName: "",
        dcProgramYear: ""
      },
      currentId: "",
      currentPassword: "",
      equipmentTypes: {},
      userSelectedList: [],
      amountSelected: 0
    }
  },
}
</script>


<style>
  /* equipmentSignoutSiteContent style settings */
  #equipmentSignoutSiteContent {
    font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #fff;
    background-color: #3E2B2F;
  }

  /* equipmentDynamicProductionSiteNav style settings */
  #equipmentDynamicProductionSiteNav {
    padding: 7.5px 15px;
    text-align: right;
    background-color: rgb(121, 121, 121);
  }

  /* equipmentDynamicProductionSiteNav a tag style settings */
  #equipmentDynamicProductionSiteNav a {
    color: #000;
  }

  /* equipmentDynamicProductionSiteNav a tag hover style settings */
  #equipmentDynamicProductionSiteNav a:hover {
    color: rgb(63, 63, 63);
  }

  /* equipmentDynamicProductionSiteNav active page style settings */
  #equipmentDynamicProductionSiteNav a.router-link-exact-active {
    color: #fff;
  }
</style>
