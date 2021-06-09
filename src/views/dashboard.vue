<template>
    <mdb-container class="container-fluid">
        <h1 class="blue lighten-5 red-text text-center">Cattle tracking Map</h1>
       

        <div class="card p-1 blue-grey mt-5">

        <Map />

        <!-- print button -->
 <mdb-btn color="secondary" icon="print">Print</mdb-btn>
        </div>
          
          
    </mdb-container>
</template>
<script>
 import { mdbBtn, mdbContainer } from 'mdbvue';
import Map from "./Map.vue"
export default {
    name :"dashboard",
    components:{
        Map,
        mdbBtn,
        mdbContainer
    },
}
</script>