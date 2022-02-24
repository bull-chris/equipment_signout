<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Div to contain the Headings for the Equipment Signout site -->
    <div id="equipmentHeading">
        <h1>{{ headingText }}</h1>
    </div>
</template>

<script>
//export settings for the heading component
export default {
    name: "HeadingSection",
    props: {
        headingText: String
    }
}
</script>

<style scoped>
    /* equipmentHeading style settings */
    #equipmentHeading {
        text-align: center;
        color: white;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    /* h1 style settings */
    h1 {
        margin: 0px;
    }

    /* style settings for mobile */
    @media screen and (max-width: 540px) {
        /* h1 style settings */
        h1 {
            font-size: 40px;
        }
    }
</style>