<template>
    <mdb-container class="container animated slideInRight mt-4 pt-5 w-40%">
        <mdb-row>
	<!-- Material form login -->

	<form class="justify-content-center">
		<p class="h4 text-center  mb-4 row"> Cattle Registration Form</p>
        <mdb-input label="Eartag Number" v-model="value" />
            <mdb-input label="Colour Description" v-model="value" />
        <mdb-input label="Deep Tank Number" v-model="value" />
       <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroupFileAddon01">Upload Image</span>
    </div>
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
      <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
    </div>
  </div>
  <div class="mt-3">
  <p> GPS Tracking Status </p>
    <select class="browser-default custom-select mt-0">
    <option selected>select option</option>
    <option value="1">Active</option>
    <option value="2">Disabled</option>
  </select>
  </div>
        </form>
          </mdb-row>

  <mdb-btn light color="indigo lighten-4" size="md" class="mt-4" >Save</mdb-btn>
           <!-- Save and Continue button -->
  <mdb-btn  outline="teal darken-4" size="md" @click="$router.push({name:'cattlereg'})" class="my-0 mt-3" icon="check">Submit</mdb-btn>
    </mdb-container>
</template>
<script>
import { mdbBtn,mdbContainer, mdbInput, mdbFileInput   } from "mdbvue";
export default {
    name :"register",
    components: {
			mdbBtn,
      mdbContainer,
      mdbInput ,
      mdbFileInput 
	},
    data() {
      return {
        value: ''
      };
  }
}
</script>