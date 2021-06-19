<template>
	<mdb-container Fluid class="pt-5">
		<mdb-navbar position="top" color="primary">
			<mdb-navbar-brand to="/dashboard">
				<mdb-icon class="white-text" icon="arrow-left" />
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline>
						<mdb-btn outline="white" class="" size="sm" @click.native="$router.push({name:'home'})">Log out</mdb-btn>
					</mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
		<p class="h4 text-center  my-4  blue lighten-5">Cattle Registration Form</p>

		<!-- Material form login -->

		<mdb-container class="my-5 card  pt-4 justify-content-center">
			<mdb-row class="justify-content-center">
				<mdb-col md="5"><mdb-input type="number" class="my-0" label="Eartag Number" v-model="currentCow.earTag"/></mdb-col>
				<!-- </mdb-row>
			<mdb-row class="justify-content-center"> -->
				<mdb-col md="5"><mdb-input type="number" class="my-0" label="Dip Tank Number" v-model="currentCow.deepTankNumer"/></mdb-col>
				<mdb-col md="9"><mdb-input type="text" class="mt-0" label="Colour Description" v-model="currentCow.color"/></mdb-col>
			</mdb-row>
			<mdb-row class="justify-content-center"> </mdb-row>
			<mdb-row class="justify-content-center">
				<mdb-col md="9">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text" id="inputGroupFileAddon01">Upload Image</span>
						</div>
						<div class="custom-file">
							<input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
							<label class="custom-file-label" for="inputGroupFile01">Choose file</label>
						</div>
					</div>
				</mdb-col>
			</mdb-row>
			<mdb-row class=" ">
				<mdb-col md="9" class="text-right pt-2">
					<p>GPS Tracking Status</p>
				</mdb-col>
				<mdb-input size="sm" type="checkbox" />
			</mdb-row>
			<mdb-row class="justify-content-right text-center  mb-0">
				<mdb-col>
					<mdb-btn color="blue" @click="addCow" icon="plus"></mdb-btn>
				</mdb-col>
			</mdb-row>
		</mdb-container>

		<mdb-row v-for="cow in cattle" :key="cow.earTag" class="my-2 z-depth-1 py-3 animated slideInDown">
			<mdb-col col="4" md="3" >
				<mdb-icon icon="user-circle" size="5x" />
			</mdb-col>
			<mdb-col col="8" md="9" class="text-left">
        <p class="grey-text h6-responsive m-0 p-0">#{{ cow.earTag}}</p>
        <p class="mdb-color-text m-0 p-0">DIP:{{cow.deepTankNumer}}</p>
        <p class="blue-text p-0 m-0">{{cow.color}}</p>

			</mdb-col>
		</mdb-row>

		<mdb-row class="justify-content-center mb-3">
			<mdb-btn outline="deep-purple accent-4" size="md" @click="$router.push({ name: 'register' })" class="my-0 mt-3" icon="arrow-left">Back</mdb-btn>
			<mdb-btn outline="teal darken-4" size="md" @click="$router.push({ name: 'cattlereg' })" class="my-0 mt-3" icon="check">Submit</mdb-btn>
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
import {
	mdbBtn,
	mdbContainer,
	mdbInput,
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
	mdbModalTitle,
} from "mdbvue";
export default {
	name: "register",
	components: {
		mdbBtn,
		mdbContainer,
		mdbInput,
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
		mdbModalTitle,
	},
	data() {
		return {
			value: "",
			currentCow: {
				ownerId: "",
				earTag: "",
				color: "",
				deepTankNumer: "",
				imageLInk: "",
				isTracking: true,
				positions: [],
			},
			cattle: [],
			login: false,
		};
	},
  methods:{
    addCow(){
      if(this.currentCow.earTag.length === 0){
        // this.$notify.error({message:"fuck you", position:"top right",timeOut:5000 })
        return;
      }
      console.log("adding Cow")
      console.log(this.currentCow)
      this.cattle.push(this.currentCow);

      this.currentCow={ 				ownerId: "",
				earTag: "",
				color: "",
				deepTankNumer: "",
				imageLInk: "",
				isTracking: true,
				positions: [],}
    }
  }
};
</script>
