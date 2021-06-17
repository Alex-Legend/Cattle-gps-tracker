<template>
    <mdb-container fluid class="container animated slideInRight " >
        	<mdb-navbar  position="top" color="blue" >
			<!-- Navbar brand -->
			<mdb-navbar-brand href="#/">
				<mdb-btn  color="blue lighten-1" size="sm" @click="$router.push({name:'home'})" class="my-0 btn-rounded" icon="home" >Home</mdb-btn>
			</mdb-navbar-brand>
		          					<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline >
      <mdb-btn outline="white" class="h-20" size="sm" @click.native="login=true">Log In</mdb-btn>

      <mdb-btn color="white" size="sm" class="my-0" @click="$router.push({name:'register'})">register</mdb-btn>
    </mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
        <!-- <br> -->
	<!-- Material form login -->
<mdb-container>
	<form class="justify-content-center mt-5">
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
            <mdb-modal :show="login" @close="login = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Log in</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Password" icon="lock" class="mb-5"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="indigo lighten-1" @click="$router.push({name:'dashboard'})">Login</mdb-btn>
		<div class="w-100 text-center" >
          <p>Not a member Yet? <a href="#/register">Sign Up Here</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
      </mdb-modal-footer>
    </mdb-modal>
    </mdb-container>
</template>
<script>
import { mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbBtn,
         mdbFormInline, mdbModal, mdbTab, mdbTabItem, mdbModalBody, mdbInput, mdbModalFooter, mdbModalTitle, mdbIcon } from "mdbvue";
export default {
    name :"register",
    components: {
            mdbContainer,
            mdbNavbar,
		mdbNavbarBrand,
		mdbNavbarToggler,
		mdbNavbarNav,
		mdbNavItem,
		mdbBtn, 
		mdbFormInline,
		mdbModal, 
		mdbTab, 
		mdbTabItem, 
		mdbModalBody, 
		mdbInput,
		mdbModalFooter, 
		mdbModalTitle, 
		mdbIcon
	},
    data() {
      return {
        login: false
      }
    }
}
</script>