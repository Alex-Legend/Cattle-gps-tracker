<template>
    <mdb-container Fluid class="pt-5">

      <mdb-navbar position="top" class="blue-gradient color-block-5">
			<mdb-navbar-brand to="/">
			  <mdb-icon class="white-text" icon="home"/>
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline>
						<mdb-btn outline="white" class="" size="sm" @click.native="login = true">Log In</mdb-btn>

					</mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
    <p class="h4 text-center  my-4  blue lighten-5">Cattle Registration Form</p>
      
	<!-- Material form login -->

         <mdb-container class="mt-5 card px-5 py-4 justify-content-center">
           <mdb-row class="justify-content-center">
             <mdb-col md="9"><mdb-input type="text" label="Eartag Number" v-model="value" /></mdb-col>
           </mdb-row>
           <mdb-row class="justify-content-center">
             <mdb-col md="9"><mdb-input type="text" label="Colour Description" v-model="value" /></mdb-col>
           </mdb-row>
            <mdb-row class="justify-content-center">
             <mdb-col md="9"><mdb-input type="text" label="Deep Tank Number" v-model="value" /></mdb-col>
           </mdb-row>
           <mdb-row class="justify-content-center">
             <mdb-col md="9">
                <div class="input-group">
                 <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">Upload Image</span>
                 </div>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                       <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
             </mdb-col>
           </mdb-row>
           <mdb-row class="justify-content-center">
             <mdb-col md="9">
               <div class="mt-3">
            <p> GPS Tracking Status </p>
             <select class="browser-default custom-select mt-0">
              <option selected>select option</option>
               <option value="1">Active</option>
                <option value="2">Disabled</option>
             </select>
           </div>
             </mdb-col>
           </mdb-row>
           
         </mdb-container>
         <mdb-row class="justify-content-center mb-3">
           
            <mdb-btn  outline="deep-purple accent-4" size="md" @click="$router.push({name:'register'})" class="my-0 mt-3" icon="arrow-left">Back</mdb-btn>
            <mdb-btn  outline="teal darken-4" size="md" @click="$router.push({name:'cattlereg'})" class="my-0 mt-3" icon="check">Submit</mdb-btn>
         </mdb-row>
         <mdb-modal :show="login" @close="login = false">
			<mdb-modal-header class="text-center">
				<mdb-modal-title tag="h4" bold class="w-100">Log in</mdb-modal-title>
			</mdb-modal-header>
			<mdb-modal-body class="mx-3 grey-text">
				<mdb-input label="Your email" icon="envelope" type="email" class="mb-5" />
				<mdb-input label="Password" icon="lock" class="mb-5" />
			</mdb-modal-body>
			<mdb-modal-footer center>
				<mdb-btn color="indigo lighten-1" @click="$router.push({ name: 'dashboard' })">Login</mdb-btn>
				<div class="w-100 text-center">
					<p>Not a member Yet? <a href="#/register">Sign Up Here</a></p>
					<p>Forgot <a href="#">Password?</a></p>
				</div>
			</mdb-modal-footer>
		</mdb-modal>
    </mdb-container>
</template>
<script>
import { mdbBtn,mdbContainer, mdbInput, mdbFileInput, mdbNavbar, mdbNavbarBrand, mdbIcon, mdbNavbarToggler, mdbNavbarNav,mdbFormInline, mdbRow, mdbCol, mdbModal, mdbTab, mdbTabItem, mdbModalBody, mdbModalFooter, mdbModalTitle   } from "mdbvue";
export default {
    name :"register",
    components: {
			mdbBtn,
      mdbContainer,
      mdbInput ,
      mdbFileInput,
      mdbNavbar, 
      mdbNavbarBrand, 
      mdbIcon, 
      mdbNavbarToggler, 
      mdbNavbarNav,
      mdbFormInline,
      mdbRow,
      mdbCol,
      mdbModal,
    	mdbTab,
	    mdbTabItem,
	    mdbModalBody,
	    mdbModalFooter,
    	mdbModalTitle
 
	},
    data() {
      return {
        value: '',
        login: false
      };
  }
}
</script>