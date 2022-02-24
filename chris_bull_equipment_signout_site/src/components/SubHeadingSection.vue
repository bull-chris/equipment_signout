<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Div to contain the SubHeadings for the Equipment Signout site -->
    <div id="equipmentSubHeading">
        <h2>{{ subHeadingText }}</h2>
    </div>
</template>

<script>
//export settings for the subheading component
export default {
    name: "SubHeadingSection",
    props: {
        subHeadingText: String
    }
}
</script>

<style scoped>
    /* equipmentSubHeading style settings */
    #equipmentSubHeading {
        text-align: center;
        color: #fff;
        margin-bottom: 2rem;
    }

    /* h2 style settings */
    h2 {    
        font-size: 40px;
        margin: 0px;
    }

    /* style settings for mobile */
    @media screen and (max-width: 540px) {
        /* h2 style settings */
        h2 {
            font-size: 20px;
        }
    }
</style>