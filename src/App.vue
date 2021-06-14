<template>
	<mdb-container id="app" class="pt-5">
		<mdb-navbar expand="xl" position="top"  dark color=" indigo darken-4"  scrolling>
			<!-- Navbar brand -->
			<mdb-navbar-brand href="#/">
				<mdb-btn  size="sm" @click="$router.push({name:'home'})" class="my-0 btn-rounded" icon="home" >Home</mdb-btn>
			</mdb-navbar-brand>
		          					<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline >
      <mdb-btn outline="white" size="sm" @click="$router.push({name:'login'})" class="my-0" >login</mdb-btn>
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
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem,mdbBtn, mdbFormInline, mdbContainer } from "mdbvue";
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
		mdbContainer
	},
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
