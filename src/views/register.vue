<template>
    <mdb-container class="container animated slideInRight mt-4">
	<!-- Material form login -->

	<form class="justify-content-center">
		<p class="h4 text-center  mb-4 row">Registration Form</p>
    
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" />
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

   <!-- phone number input -->
  <div class="form-outline mb-4">
    <input type="phone" id="form3Example5" class="form-control" />
    <label class="form-label" for="form3Example5">Phone Number</label>
  </div>

  <!-- Password input -->
 <p class="font-italic">Password should be atleast 8 characters.</p>
  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
  </div>

  <!-- Repeat Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form3Example6" class="form-control" />
    <label class="form-label" for="form3Example6">Repeat-Password</label>
  </div>

<!-- Save button -->
  <button type="save"  class="btn btn-primary btn-pill mb-4"><b-button href="#">Save</b-button></button>
  <mdb-btn color="default">Default</mdb-btn>

 <!-- Save and Continue button -->
  <button type="save and continue"  class="btn btn-success btn-pill mb-4"><b-button><router-link :to="{name:'cattlereg'}" >Save and Continue</router-link></b-button></button>



        </form>
    </mdb-container>
</template>
<script>
import { mdbBtn,mdbContainer } from "mdbvue";
export default {
    name :"register",
    components: {
			mdbBtn,mdbContainer
	},
}
</script>