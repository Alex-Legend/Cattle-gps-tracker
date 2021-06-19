<template>
	<mdb-container fluid class="pt-5 ">
		<mdb-navbar position="top" color="primary">
			<mdb-navbar-brand to="/">
				<mdb-icon class="white-text" icon="home" />
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline>
						<mdb-btn outline="white" class="" size="sm" @click.native="$router.push({name:'home'})">Log Out</mdb-btn>
					</mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
		<p class="h4 text-center  my-4  blue lighten-5">import components of navbar</p>

		<mdb-row class="justify-content-center mt-5 white">
			<mdb-col col="9">
				<div class="card p-1 blue-grey  ">
					<Map />
				</div>
			</mdb-col>
			<mdb-col col="2" class="card">
				<ul>
					<li>alex is a bith</li>
					<li>alex is a bith</li>
					<li>alex is a bith</li>
					<li>alex is a bith</li>
					<li>alex is a bith</li>
				</ul>
			</mdb-col>
		</mdb-row>

		<mdb-row class="justify-content-center z-depth-1 mt-3">
			<mdb-btn outline="secondary" size="md" class="mt-4" icon="print">Print Map</mdb-btn>
			<mdb-btn outline="teal" size="md" class="mt-4 " @click="$router.push({ name: 'cattlereg' })">Manage Cattle</mdb-btn>
		</mdb-row>
	</mdb-container>
</template>
<script>
import { mdbBtn, mdbContainer, mdbRow,mdbCol, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from "mdbvue";
import Map from "./Map.vue";
export default {
	name: "dashboard",
	components: {
		Map,
		mdbBtn,
		mdbContainer,
		mdbRow,
		mdbCol,
		mdbNavbar,
		mdbNavbarBrand,
		mdbNavbarToggler,
		mdbNavbarNav,
		mdbNavItem,
	},
};
</script>
