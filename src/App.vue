<template>
	<mdb-container id="app" class="pt-5">
		<mdb-navbar expand="xl" position="top"  class="blue-gradient color-block-5"  scrolling>
			<!-- Navbar brand -->
			<mdb-navbar-brand href="#/">
				<mdb-btn  color="blue lighten-1" size="sm" @click="$router.push({name:'home'})" class="my-0 btn-rounded" icon="home" >Home</mdb-btn>
			</mdb-navbar-brand>
		          					<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline >
      <mdb-btn outline="white" class="h-20" size="sm" @click.native="login=true">Log In</mdb-btn>
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
      <mdb-btn color="white" size="sm" class="my-0" @click="$router.push({name:'register'})">register</mdb-btn>
    </mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
<br>

		<router-view class=""/>


	</mdb-container>
</template>

<script>

import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbBtn, mdbFormInline, mdbContainer, mdbModal, mdbTab, mdbTabItem, mdbModalBody, mdbInput, mdbModalFooter, mdbModalTitle, mdbIcon } from "mdbvue";
export default {
	name: "app",
	components: {
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
};

</script>

 

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
	font-family: "Roboto", Helvetica, Arial, sans-serif;
}
body {
color: #2e2e2e;
}
.text-poppy-red {
	color: #ef5350 !important;
}
.btn-poppy-red {
	background-color: #ef5350 !important;
}
.bg-poppy-red {
	background-color: #ef5350 !important;
}
</style>
