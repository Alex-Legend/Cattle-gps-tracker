<template>
    <mdb-container class="container animated slideInRight mt-4 pt-5">
	<!-- Material form login -->

	<form class="justify-content-center">
		<p class="h4 text-center  mb-4 row"> Cattle Registration Form</p>
    
  
 <!-- Save and Continue button -->
  <mdb-btn  outline="teal darken-4" size="md" @click="$router.push({name:'cattlereg'})" class="my-0" icon="check">Submit</mdb-btn>



        </form>
    </mdb-container>
</template>
<script>
import { mdbBtn,mdbContainer } from "mdbvue";
export default {
    name :"register",
    components: {
			mdbBtn,
      mdbContainer
	},
}
</script>