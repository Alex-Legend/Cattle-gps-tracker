<template>
    <mdb-container class="container animated slideInRight mt-4 pt-5">
	<!-- Material form login -->

	<form class="justify-content-center">
		<p class="h4 text-center  mb-4 row">User Registration Form</p>
    
  <!-- 2 column grid layout with text inputs for the first and last names -->
 <mdb-input label="First Name" v-model="value" />
 <mdb-input label="Surname" v-model="value" />
 <mdb-input label="Email" v-model="value" />
 <mdb-input label="Phone Number" v-model="value" />
 <mdb-input label="Physical Address" v-model="value" />
 <mdb-input label="Password" v-model="value" />
 <mdb-input label="Repeat Password" v-model="value" />
 
<!-- Save button -->
  <mdb-btn light color=" blue lighten-1" size="md"  >Save</mdb-btn>

 <!-- Save and Continue button -->
  <mdb-btn  outline="indigo" size="md" @click="$router.push({name:'cattlereg'})" class="my-0" >Save and Continue</mdb-btn>



        </form>
    </mdb-container>
</template>
<script>
import { mdbBtn,mdbContainer, mdbInput } from "mdbvue";
export default {
    name :"register",
    components: {
			mdbBtn,
      mdbContainer,
      mdbInput
	},
}
</script>