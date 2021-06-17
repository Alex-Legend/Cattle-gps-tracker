<template>
    <mdb-container class="container-fluid mt-5">
        <h1 class="blue lighten-5 black-text text-center">Cattle Tracking Map</h1>
       

        <div class="card p-1 blue-grey mt-5 w-100">

        <Map />

        </div>
         <mdb-container>  
             <div>
                   <mdb-btn  outline="secondary" size="md" class="mt-4" icon="print">Print Map</mdb-btn>
                    <mdb-btn  outline="teal" size="md" class="mt-4 "  @click="$router.push({name:'cattlereg'})">Manage Cattle</mdb-btn>
             </div>
        </mdb-container> 
          
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