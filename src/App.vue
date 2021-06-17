<template>
	<mdb-container id="app" class="pt-5">
	
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
