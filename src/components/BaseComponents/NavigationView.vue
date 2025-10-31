<template>
  <div v-if="!$route.meta.hideNavigation" >

    <div class="separate">

      <div class="style-4">

        <img alt="company logo" src="@/assets/logo.svg" class="logo" @click="home" />

        <ul class="menu-4" v-show="!mobile">

          <li class="link">
            <div class="dropdown-navigation" @click="toggleDropdown">
              <router-link to="/babysitters">Babysitters</router-link>
            </div>
          </li>

          <li class="link">
            <div class="dropdown-navigation" @click="toggleDropdown">
              <router-link to="/babysitting-jobs">Babysitting jobs</router-link>
            </div>
          </li>

          <li class="link">
            <div class="dropdown-navigation">
              <router-link to="/how-it-works">How it works</router-link>
            </div>
          </li>
        </ul>

        <div class="btn-group">
          <p @click="login" class="auth-2">Log in</p>
          <p @click="register" class="auth">Sign up</p>
        </div>

      </div>

      <div class="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <img alt="company logo" src="@/assets/logo.svg" class="logo2" @click="home" />

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/babysitters"><p @click="toggleMobileNav2" class="title-content-para">Babysitters</p></router-link>
                </div>
              </div>

            </label>


            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/babysitting-jobs"><p @click="toggleMobileNav2" class="title-content-para">Babysitting jobs</p></router-link>
                </div>
              </div>

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/how-it-works"><p @click="toggleMobileNav2" class="title-content-para">How it works</p></router-link>
                </div>
              </div>

            </label>

<!--            <label class="accordion-wrapper">-->
<!--              <input type="checkbox" class="accordion" hidden />-->
<!--              <div class="title">-->
<!--                <div class="title-content">-->
<!--                  <router-link to="/login"><p @click="toggleMobileNav2" class="title-content-para">Log in</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--            </label>-->

<!--            <label class="accordion-wrapper">-->
<!--              <input type="checkbox" class="accordion" hidden />-->
<!--              <div class="title">-->
<!--                <div class="title-content">-->
<!--                  <router-link to="/register"><p @click="toggleMobileNav2" class="title-content-para">Sign up</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--            </label>-->


          </ul>

        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "NavigationView",
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
      showDropdown: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    home(){
      this.mobileNav = false;
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    login(){
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
    register(){
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
}
</script>

<style scoped>
.bxl-whatsapp{
  color: #ffffff;
}

.bx-menu{
  font-size: 30px;
  cursor: pointer;
  transition: .8s ease all;
  color: #f8fbfb;
  margin-left: 10px;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 9%;
}

.style-4 {
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-top: 1%;
  padding-bottom: 1.5%;
}

.link {
  display: inline-block;
  list-style: outside none none;
  margin: 0 0.8em;
  overflow: hidden;
  font-size: 15px;
  align-items: center;
  align-content: center;
  font-weight: 500;
  letter-spacing: 0.1px;
}


.bxs-chevron-down{
  color: #1F1F2A;
  font-size: 15px;
}

.bxs-chevron-right{
  color: #1F1F2A;
  font-size: 15px;
}



.menu-4{
  display: flex;
  align-content: center;
  align-items: center;
}

.auth{
  background: #389ba7;
  border: 1px solid #389ba7;
  color: #f8fbfb;
  padding: 0.4em 20px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  font-weight: 300;
}
.auth:hover{
  background: #4ca5b0;
  border: 1px solid #4ca5b0;
  color: #ffffff;
}

.auth-2{
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: underline;
  color: #f2f5f7;
  font-weight: 300;
}


.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 240px;
  height: 100%;
  background-color: #323940;
  font-size: 20px;
  /*text-align: left;*/
  /*padding-left: 20px;*/
}

.logo2{
  width: 80%;
  margin-top: 7%;
}

.dropdown-nav li {
  /*margin-top: 12%;*/
  overflow: hidden;
  list-style: none;
  height: 100%;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  /*color: #2e8cec;*/
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  /*background-color: #D23535;*/
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #f2f5f7;
  white-space: nowrap;
}



.separate{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: rgb(77,86,94);
  padding: 1.5% 2% 1% 2%;
}

.btn-group{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 10px;
}



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

a {
  display: block;
  color: #f2f5f7;
  text-align: center;
  text-decoration: none;
}

.dropdown-navigation {
  display: inline-block;
  color: #f2f5f7;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
}

.dropdown-navigation:hover .dropdown-content {
  display: block;
}

.dropdown-navigation-2:hover .dropdown-content {
  display: block;
}


.accordion-wrapper {
  display: block;
  /*box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);*/
  /*max-width: 500px;*/
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
}

.accordion + .title {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  /*justify-content: space-between;*/
  padding: 10px 20px;
  /*background: #1565C0;*/
  /*border: 1px solid #EAECF0;*/
  /*padding-top: 10px;*/
  /*padding-left: 7.5px;*/
  /*padding-bottom: 9px;*/
  border-radius: 5px;
  /*background-color: #FFFFFF;*/
}

.accordion ~ .title strong {
  line-height: 24px;
}

.accordion ~ .title .side-icon {
  display: block;
  padding-top: 3px;
}

.accordion:checked ~ .title .side-icon {
  display: none;
}

.accordion ~ .title .down-icon {
  display: none;
  padding-top: 3px;
}

.accordion:checked ~ .title .down-icon {
  display: block;
}

.accordion ~ .content {
  display: none;
  padding: 2px;
  cursor: pointer;
  /*background-color: #FFFFFF;*/
  /*border: 1px solid #EAECF0;*/
  border-radius: 5px;
}

.accordion:checked ~ .content {
  display: block;
}

.content-inner{
  display: flex;
  align-items: center;
  align-content: center;
}

.content-inner p{
  padding-left: 2%;
  color: #ffffff;
}

.title-content{
  display: flex;
  align-content: center;
  align-items: center;
}



.title-content-para{
  padding-left: 5px;
  padding-right: 8px;
  font-size: 17px;
  color: #ffffff;
}

.content-2{
  padding-left: 10px;
}


.title{
  display: flex;
  align-content: center;
  align-items: center;
}


@media (min-width: 1286px) {

}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
  }
  .logo {
    width: 30%;
    margin-left: unset;
    padding-left: unset;
  }
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
  }
  .logo {
    min-width: 40%;
    margin-left: 5px;
    margin-top: 8px;
    padding-left: unset;
  }

  .dropdown-nav{
    padding-right: unset;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }

}

</style>