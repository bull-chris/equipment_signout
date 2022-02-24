<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Div to contain inputs for the Equipment Signout site -->
    <div class="signoutSiteInput">
    <!-- Text input section -->
        <input v-bind:id="inputId" v-bind:type="inputType" v-bind:value="inputValue" v-bind:name="inputName" v-bind:placeholder="inputPlaceholder" v-model="inputModel" @input="setInputModel(inputModel)">
    </div>
</template>

<script>
//export settings for the Input component
export default {
    name: "InputSection",
    props: {
        inputId: String,
        inputType: String,
        inputName: String,
        inputPlaceholder: String,
        inputValue: String
    },
    data() {
        return {
            inputModel: this.inputValue
        }
    },
    methods: {
        setInputModel(theInputModel) {
            this.$emit("updateInputModel", {
                newInfo: theInputModel
            });
        }
    }
}
</script>

<style>
    /* signoutSiteInput style settings */
    .signoutSiteInput {
        background-color: #fff;
        text-align: left;
        height: 50px;
    }

    /* placeholder style settings */
    /* Reference: https://www.w3schools.com/howto/howto_css_placeholder.asp */
    /* Referenced above link for information on accessing input placeholder value */
    input::placeholder {
        color: rgb(77, 77, 77);
        opacity: 1;
    }
</style>