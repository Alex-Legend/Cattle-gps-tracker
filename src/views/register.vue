<template>
	<mdb-container fluid class="pt-5">
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
		<!-- <br> -->
		<!-- Material form login -->
				<p class="h4 text-center  my-4  blue lighten-5">User Registration Form</p>
		<mdb-container class="mt-5 card px-5 py-4 justify-content-center">
      <mdb-row class="justify-content-center">
        <mdb-col md="9"><mdb-input type="text" label="First Name" v-model="name" /> </mdb-col>			
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-col md="9"><mdb-input text="text" label="Surname" v-model="surname" /></mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-col md="9" ><mdb-input type="email"  label="Email" v-model="email" /></mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">

        <mdb-col md="9"><mdb-input type="number" label="Phone Number" v-model="phone" /></mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">

        <mdb-col md="9"><mdb-input type="text" label="Physical Address" v-model="physicalAddress" /></mdb-col>
      </mdb-row >

      <mdb-row class="justify-content-center">
        <mdb-col md="9"><mdb-input type="password" label="Password" v-model="password" /></mdb-col>
        <mdb-col md="9"><mdb-input label="Repeat Password" v-model="repeatPassword" /></mdb-col>
			

      </mdb-row>

				<!-- Save button -->
      <mdb-row class="justify-content-center mb-3">
				<mdb-btn outline="primary" size="md" @click="$router.push({ name: 'cattlereg' })" class="my-0" >Continue <mdb-icon icon="arrow-right"></mdb-icon></mdb-btn>
      </mdb-row>
		</mdb-container>


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
import {
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
	mdbIcon,
  mdbRow,
  mdbCol
} from "mdbvue";
export default {
	name: "register",
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
		mdbIcon,
        mdbRow,
        mdbCol
	},
	data() {
		return {
			login: false,
		};
	},
};
</script>
