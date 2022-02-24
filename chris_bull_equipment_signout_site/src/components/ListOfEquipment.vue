<template>
    <!-- Chris Bull - DC Equipment Signout Dynamic Site Assignment -->

    <!-- Div to contain the list of equipment available for the Equipment Signout site -->
    <div>
        <!-- Unordered list to contain the equipment -->
        <ul>
            <!-- Loop through each equipment in each equipment type -->
            <li v-for="(equipment, currentIndex) in this.totalEquipment" :key="currentIndex">
                <!-- assign id of equipmentAvailable if there are more than 0 of an equipment available -->
                <h5 v-if="equipment.assets_available == true" class="equipmentAvailable" @click="equipmentToCheckoutCart(equipment)" :class="equipment.asset_class">{{ equipment.asset_description }} [{{ equipment.assets_count_available }}]</h5> 
                <!-- assign id of equipmentNone if there is no more of that equipment available -->
                <h5 v-else class="equipmentNone">{{ equipment.asset_description }} [{{ equipment.assets_count_available }}]</h5>  
            </li>
        </ul>
    </div>

</template>

<script>
//export settings for the listOfEquipment component
export default {
    name: "ListOfEquipment",
    props: {
        totalEquipment: Array,
        equipmentSelected: Boolean
    },
    //methods to pass information from the list of equipment component
    methods: {
        //function to send the chosen equipment up to equipment page
        equipmentToCheckoutCart(chosenEquipment) {
            chosenEquipment.assets_available = false;
            this.$emit("equipmentToCheckoutCart", {
                equipment: chosenEquipment
            });
        }
    }
}
</script>

<style>
    /* equipmentAvailable style settings */
    .equipmentAvailable {
        cursor: pointer;
    }

    /* equipmentNone style settings */
    .equipmentNone {
        text-decoration: line-through;
        color: #3E2B2F;
        opacity: 0.75;
    }

    /* style settings for mobile */
    @media screen and (max-width: 540px) {
        /* equipmentAvailable and equipmentNone style settings */
        .equipmentAvailable, .equipmentNone {
            font-size: 10px;
            line-height: 2.5;
        }
    }
</style>