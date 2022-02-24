<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Header for the Equipment Signout site -->
    <header id="signoutSiteHeader">
        <!-- Div to contain the Durham College Logo -->
        <div id="headerLogo">
            <img src="../assets/durham_college_full_logo.png" alt="Durham College Full Logo"/>
        </div>
        <!-- Div to contain the Header Title -->
        <div id="headerTitle">
            <h1>Media, Art, and Design</h1>
        </div>
    </header>
</template>

<script>
//export settings for the Header component
export default {
    name: "HeaderSignout",
}
</script>

<style>
    /* signoutSiteHeader style settings */
    #signoutSiteHeader {
        display: flex;
        padding: 0px;
        margin-bottom: 5rem;
        text-align: center;
    }

    /* headerLogo style settings */
    #headerLogo {
        width: 30%;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 5px;
        background-color: rgb(255, 255, 255);
    }

    /* headerTitle style settings */
    #headerTitle {
        text-align: left;
        width: 70%;
        background-color: #0B8261;
        padding-left: 5%;
        font-size: 55px;
        color: #fff;
    }

    /* headerTitle h1 style settings */
    #headerTitle h1 {
        margin-top: 1.5rem;
    }

    /* style settings for mobile */
    @media screen and (max-width: 540px) {
        /* signoutSiteHeader style settings */
        #signoutSiteHeader {
            display: block;
            margin-top: 0px;
        }
        /* headerLogo and headerTitle style settings */
        #headerLogo, #headerTitle {
            width: 100%;
            text-align: center;
            padding: 1rem 0rem;
        }

        /* headerTitle h1 style settings */
        #headerTitle h1 {
            font-size: 30px;
        }
    }
</style>