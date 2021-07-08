<template>
    <mdb-container Fluid class="pt-5">
        <mdb-navbar position="top" class="blue-gradient color-block-5">
			<mdb-navbar-brand to="/">
			  <mdb-icon class="white-text" icon="home"/>
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav right>
					<mdb-form-inline>
						<mdb-btn outline="white" size="sm" @click.native="login = false">Log Out</mdb-btn>

					</mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>
    <p class="h4 text-center  my-4  blue lighten-5">include help and logout but as icons</p>
       

        <div class="card p-1 blue-grey mt-5 w-100">

        <Map />

        </div>
         <mdb-container>  
             <div>
                   <mdb-btn  outline="secondary" size="md" class="mt-4" icon="print">Print Map</mdb-btn>
                    <mdb-btn  outline="teal" size="md" class="mt-4 "  @click="$router.push({name:'cattlereg'})">Manage Cattle</mdb-btn>
             </div>
        </mdb-container> 
          
    </mdb-container>
</template>
<script>
 import { mdbBtn, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbIcon, mdbNavbarToggler,mdbNavbarNav, mdbFormInline } from 'mdbvue';
import Map from "./Map.vue"
export default {
    name :"dashboard",
    components:{
        Map,
        mdbBtn,
        mdbContainer,
        mdbNavbar,
        mdbNavbarBrand, 
        mdbIcon, 
        mdbNavbarToggler,
        mdbNavbarNav, 
        mdbFormInline
    },
    data() {
		return {
			login: true,
		};
    },
}
</script>