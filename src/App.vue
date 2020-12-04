<template>
	<div id="app" class="pt-5">
		<mdb-navbar expand="sm" position="top" dark color="blue accent-4">
			<!-- Navbar brand -->
			<mdb-navbar-brand href="#">
				Tracker
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav>
					<mdb-nav-item href="#" active>Home</mdb-nav-item>
					<mdb-nav-item href="#/dashboard" active>Map</mdb-nav-item>
					<mdb-nav-item href="#/login">Login</mdb-nav-item>
					<mdb-nav-item href="#/register">Register</mdb-nav-item>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
<br>
		<router-view />
	</div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from "mdbvue";
export default {
	name: "app",
	components: {
		mdbNavbar,
		mdbNavbarBrand,
		mdbNavbarToggler,
		mdbNavbarNav,
		mdbNavItem,
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
