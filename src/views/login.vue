<template>
<div class="container">
	<!-- Material form login -->

	<form class="justify-content-center">
		<p class="h4 text-center  mb-4 row">Sign in</p>
		<div class="grey-text row justify-content-center" >
			<!-- <div class="sm-6 lg-5"> -->
			<div class="col-10 md-9 lg-5">
				<mdb-input label="Your email" icon="envelope" type="email" />
			</div>
		</div>
		<div class="grey-text row justify-content-center">
			<div class="col-10 md-9 lg-5">
				<mdb-input label="Your password" icon="lock" type="password" />
			</div>

			<div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
		</div>

		<div class="text-center">
			<mdb-btn>Login</mdb-btn>
		</div>
		 <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member yet? <a href="">Register here</a></p>
      </div>
	</form>
	<!-- Material form login -->
</div>
</template>
<script>
import { mdbInput, mdbBtn } from "mdbvue";
export default {
	name: "login",
	components: {
		mdbInput,
		mdbBtn,
	},
};
</script>
