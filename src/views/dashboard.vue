<template>
    <div class="container-fluid">
        <h1 class="blue lighten-5 red-text text-center">The dashboad</h1>
       

        <div class="card p-1 blue-grey mt-5">

        <Map />
        </div>
          
          
    </div>
</template>
<script>
import Map from "./Map.vue"
export default {
    name :"dashboard",
    components:{
        Map
    }
}
</script>