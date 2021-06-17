<template>
  <mdb-container fluid class="classic-form-page bg animated slideInRight mt-0 pt-5">
    <!-- <mdb-navbar style="margin-top: 60px" :color="'primary'" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdbNavbarBrand href="#"><strong>MDB</strong></mdbNavbarBrand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed active>Home</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
          </mdb-navbar-nav>
          <form>
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
          </form>
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar> -->

    <view-wrapper>
      <mdb-mask class="d-flex gradient justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center morpheus-den-gradient color-block-5 text-md-left col-md-6 mt-xl-5 mb-5">
              <h1 class="h1-responsive font-weight-bold animated fadeInLeft">Livestock GPS Tracking Website Eswatini </h1>
              <hr class="hr-light animated fadeInLeft"/>
              <h6 class="mb-4 animated fadeInLeft">This is a website designed for the simplicity of EmaSwati Livestock farmers to monitor their livestock through their mobile phones. 
                                                    Simply register NOW and start tracking your Livestock or if you have any queries contact us. We all have to start somewhere somehow. </h6>
              <mdb-btn outline="white animated fadeInLeft" icon="envelope" @click.native="contact = true">Contact Us</mdb-btn>

    <mdb-modal :show="contact" @close="contact = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100 black-text">Write to us</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input label="Your name" icon="user" class="mb-5"/>
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Subject" icon="tag" class="mb-5"/>
        <mdb-textarea icon="pencil-alt" label="Your message"/>
        <div class="black-text">
        <p >or simply Whatsapp us on i67767678</p>
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
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, ViewWrapper, mdbMask, mdbBtn, mdbCard, mdbCardBody, mdbInput, mdbIcon, mdbNavbarBrand,
  mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTextarea,  mdbModalTitile } from 'mdbvue';
  export default {
    name: 'ClassicFormPage',
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
       mdbModalTitile
    },
    data() {
      return {
        contact: false
      };
    }
  };
</script>

<style>
 body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("C:/Users/LEGEND/Documents/project/Cattle-gps-tracker/img/homepage.jpg");

    /* Full height and width */
    height: 100%;
    width: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>