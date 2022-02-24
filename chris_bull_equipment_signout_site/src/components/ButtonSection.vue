<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Buttons for the Equipment Signout site -->
    <button v-on:click="buttonAction">
        {{buttonText}}
    </button>
</template>

<script>
//export settings for the Button component
export default {
    name: "ButtonSection",
    props: {
        buttonText: String,
        signoutSiteRoute: String,
        buttonAction: Function
    }
}
</script>

<style>
    /* button style settings */
    button {
        background-color: #3E2B2F;
        border: none;
        height: 50px;
        color: #fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    /* button hover style settings */
    button:hover {
        color: rgb(170, 170, 170);
        background-color: #5f4b4f;
        cursor: pointer;
    }

    /* equipmentSiteButton style settings */
    .equipmentSiteButton {
        margin-top: 2rem;
        width: 100%;
    }   
</style>