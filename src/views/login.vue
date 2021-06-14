<template>
<mdb-container class="container animated slideInRight mt-4 justify-content-left text-left">
	<mdb-row>
		<mdb-col><h2 class="cyan lighten-4">LOGIN</h2></mdb-col>
	</mdb-row>
	
	<mdb-row>
		 <mdb-input  type="email"  icon="user" label="email" size="md"  />

	</mdb-row>
	<mdb-row>
		 <mdb-input  type="password" icon="lock" label="password" size="md" />

	</mdb-row>
	<mdb-row>
			<div class="grey-text row justify-content-center">
			

			<div class="col-md-6 d-flex justify-content-center">
          
          <a href="#!">Forgot password?</a>
        </div>
		</div>

      <div class="text-center">
        <p>Not a member yet? <router-link :to="{name:'register'}" >Register Here</router-link></p>
      </div>
	</mdb-row>

	<!-- Material form login -->

	<!-- <form class="justify-content-center">
		<p class="h4 text-center  mb-4 row">Sign in</p>
		<div class="grey-text row justify-content-center" >
			
			<div class="col-10 md-9 lg-5">
				<mdb-input label="Your email" icon="envelope" type="email" />
			</div>
		</div>
		<div class="grey-text row justify-content-center">
			<div class="col-10 md-9 lg-5">
				<mdb-input label="Your password" icon="lock" type="password" />
			</div>

			<div class="col-md-6 d-flex justify-content-center">
          
          <a href="#!">Forgot password?</a>
        </div>
		</div>

		<div class="text-center">
			<mdb-btn>Login</mdb-btn>
		</div>
      <div class="text-center">
        <p>Not a member yet? <router-link :to="{name:'register'}" >Register Here</router-link></p>
      </div>
	</form> -->
	
</mdb-container>
</template>
<script>
import { mdbInput, mdbBtn,mdbRow,mdbCol,mdbContainer } from "mdbvue";
export default {
	name: "login",
	components: {
		mdbInput,	mdbBtn,mdbRow,mdbCol,mdbContainer
	},
};
</script>
