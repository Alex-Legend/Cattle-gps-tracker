<template>
	<mdb-container fluid class="bg pt-5 pb-0 ">
		<mdb-navbar  position="top" color="blue-gradient" >
			<mdb-navbar-brand href="#/">
				<h2 class="white-text">EswatiniTracks</h2>
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline>
						<mdb-btn outline="white" class="h-20" size="sm" @click.native="login = true">Log In</mdb-btn>
						<mdb-btn color="white" size="sm" class="my-0" @click="$router.push({ name: 'register' })">register</mdb-btn>
					</mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>

		<view-wrapper>
			<mdb-mask class="d-flex gradient justify-content-center align-items-center ">
				<mdb-container>
					<mdb-row>
						<div class="white-text text-center morpheus-den-gradien thing color-block-5 text-md-left col-md-6 mt-xl-5 mb-5">
							<h1 class="h1-responsive font-weight-bold animated fadeInLeft">Livestock GPS Tracking Website Eswatini</h1>
							<hr class="hr-light animated fadeInLeft" />
							<h6 class="mb-4 animated fadeInLeft">
								This is a website designed for the simplicity of EmaSwati Livestock farmers to monitor their livestock through their mobile phones. Simply register NOW and start
								tracking your Livestock or if you have any queries contact us. We all have to start somewhere somehow.
							</h6>
							<mdb-btn outline="white animated fadeInLeft" icon="envelope" @click.native="contact = true">Contact Us</mdb-btn>

							<mdb-modal :show="contact" @close="contact = false">
								<mdb-modal-header class="text-center">
									<mdb-modal-title tag="h4" bold class="w-100 black-text">Write to us</mdb-modal-title>
								</mdb-modal-header>
								<mdb-modal-body class="mx-3 grey-text">
									<mdb-input label="Your name" icon="user" class="mb-5" />
									<mdb-input label="Your email" icon="envelope" type="email" class="mb-5" />
									<mdb-input label="Subject" icon="tag" class="mb-5" />
									<mdb-textarea icon="pencil-alt" label="Your message" />
									<div class="black-text">
										<p>or simply Whatsapp us on 767767678</p>
									</div>
								</mdb-modal-body>
								<mdb-modal-footer center>
									<mdb-btn @click.native="contact = false" color="indigo darken-2">Send <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
								</mdb-modal-footer>
							</mdb-modal>
						</div>
					</mdb-row>
				</mdb-container>
			</mdb-mask>
		</view-wrapper>

		<mdb-modal :show="login" @close="login = false">
			<mdb-modal-header class="text-center">
				<mdb-modal-title tag="h4" bold class="w-100">Log in</mdb-modal-title>
			</mdb-modal-header>
			<mdb-modal-body class="mx-3 grey-text">
				<mdb-input label="Your email" icon="envelope" type="email" class="mb-5" />
				<mdb-input label="Password" icon="lock" class="mb-5" />
			</mdb-modal-body>
			<mdb-modal-footer center>
				<mdb-btn rounded outline="primary" @click="$router.push({ name: 'dashboard' })">Login</mdb-btn>
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
	mdbRow,
	mdbCol,
	mdbNavbar,
	mdbNavbarToggler,
	mdbNavbarNav,
	mdbNavItem,
	ViewWrapper,
	mdbMask,
	mdbBtn,
	mdbCard,
	mdbCardBody,
	mdbInput,
	mdbIcon,
	mdbNavbarBrand,
	mdbModal,
	mdbModalHeader,
	mdbModalTitle,
	mdbModalBody,
	mdbModalFooter,
	mdbTextarea,
	mdbModalTitile,
	mdbFormInline,
	mdbContainer,
	mdbTab,
	mdbTabItem,
} from "mdbvue";

export default {
	name: "ClassicFormPage",
	components: {
		mdbContainer,
		mdbRow,
		mdbCol,
		mdbNavbar,
		mdbNavItem,
		mdbNavbarNav,
		mdbNavbarToggler,
		ViewWrapper,
		mdbMask,
		mdbBtn,
		mdbCard,
		mdbCardBody,
		mdbInput,
		mdbIcon,
		mdbNavbarBrand,
		mdbModal,
		mdbModalHeader,
		mdbModalTitle,
		mdbModalBody,
		mdbModalFooter,
		mdbTextarea,
		mdbModalTitile,
		mdbFormInline,
		mdbTab,
		mdbTabItem,
	},
	data() {
		return {
			contact: false,
			login: false,
		};
	},
};
</script>

<style scoped>
.bg {
	background-image: url("../assets/homepage.jpg");
	background-size: 100%;
	background-position: 0;
	height: 100vh;
	width: 100vw;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.thing{
	background-color: black;
	opacity: .6;
}
</style>
