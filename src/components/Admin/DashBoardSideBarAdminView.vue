<template>
  <div class="outer">

    <div class="sidebar" v-show="!mobile">

      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" class="afo-logo" />
      </div>

      <ul class="nav-list" >


        <router-link to="/list-of-users">
          <li>
            <a class="hover">
              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">List Of Applications</span>
            </a>
          </li>
        </router-link>

        <router-link to="/list-of-login">
          <li>
            <a class="hover">
              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">Login Results</span>
            </a>
          </li>
        </router-link>


      </ul>

      <!--      <div class="logout links-name">-->
      <!--&lt;!&ndash;        <img src="@/assets/Avatar.svg" alt="logo"  />&ndash;&gt;-->
      <!--        <div class="links-name-separate">-->
      <!--          <span class="links-name">LogOut</span>-->
      <!--&lt;!&ndash;          <span class="links-name">Lawrence</span>&ndash;&gt;-->
      <!--        </div>-->
      <!--        <img src="@/assets/log-out.svg" alt="logo"   />-->
      <!--      </div>-->


    </div>



    <div  class="dropdown-nav-2" v-show="mobileNav" >

      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" class="afo-logo" />
      </div>

<!--      <div class="icon-2">-->
<!--        <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>-->
<!--      </div>-->

<!--      <i class='bx bx-user'></i>-->
            <ul>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bxs-home'></i>
                  <router-link to="/list-of-users" class="">DashBoard</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bxs-user'></i>
                  <router-link to="/investments-list" class="">Account</router-link>
                </a>
              </li>
              <li @click="toggleMobileNav2">
                <a>
                  <i class='bx bx-support' ></i>
                  <router-link to="/deposit-requests" class="">Generate Code</router-link>
                </a>
              </li>
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bx-line-chart' ></i>-->
<!--                  <router-link to="/roihistory" class="">ROI History</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bxs-briefcase' ></i>-->
<!--                  <router-link to="/transactionhistory" class="">Transaction History</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bx-credit-card' ></i>-->
<!--                  <router-link to="/pacakages" class="">Deposit</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bxs-wallet' ></i>-->
<!--                  <router-link to="/withdrawal" class="">Withdrawal</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bxs-grid-alt' ></i>-->
<!--                  <router-link to="/subscription-trade" class="">Subscription Trade</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bxs-package' ></i>-->
<!--                  <router-link to="/pacakages" class="">Packages</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bx-recycle' ></i>-->
<!--                  <router-link to="/refer-users" class="">Refer Users</router-link>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li @click="toggleMobileNav2">-->
<!--                <a>-->
<!--                  <i class='bx bxs-cog' ></i>-->
<!--                  <router-link to="/account-settings" class="">Account Settings</router-link>-->
<!--                </a>-->
<!--              </li>-->

<!--              <button @click="handleClick" class="logout">Logout</button>-->
            </ul>
    </div>


    <dash-content>
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <div class="icon">
              <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </dash-content>


    <!--    <div v-if="!user" class="final">-->
    <!--      <router-link to="/login" class="back-login">Go Back To The Login Page</router-link>-->
    <!--      <router-link to="/" class="back-home">Go Back To The Home Page</router-link>-->
    <!--    </div>-->
  </div>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent.vue";

export default {
  name: "DashBoardSideBarAdminView",
  components: {DashContent},
  // setup() {
  //   const store = useStore()
  //   const handleClick = async () => {
  //     await store.dispatch('logout')
  //   }
  //   router.push('/dash-home')
  //   return { handleClick,
  //     user: computed(() => store.state.user),
  //     authIsReady: computed(() => store.state.authIsReady)}
  // },
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
.outer{
  display: flex;
}
.afo-logo{
  width: 85%;
}
body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}
.logo{
  display: flex;
  margin: 13% auto;
}
.logo p {
  color: #000;
  font-size: 20px;
  margin-left: 10%;
  padding-top: 3px;
}
.logo select{
  font-size: 15px;
  margin-left: 8%;
  padding: 5px 15px;
  border-radius: 5px;
  color: #F04438;
  border: 1px solid #E8E8E8;
}
.sidebar{
  top: 0;
  left: 0;
  height: 100vh;
  width: 235px;
  /*background-image: url('~@/assets/sidebarimage.svg');*/
  background-color: #0f171c;
  padding: 6px 20px 37px;
}
.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 5px 4px;
  list-style: none;
  line-height: 25px;
}
.sidebar ul li a{
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  font-size: 16px;
  padding-top: 3px;
}
.hover:hover{
  background: rgba(255, 255, 255, 0.2);
  /*border: 1px solid rgba(255, 255, 255, 0.05);*/
  backdrop-filter: blur(3.5px);
  padding: 8px;
  border-radius: 4px;
}
.link-img{
  margin-right: 5%;
  width: 12%;
}
.links-name{
  font-size: 16px;
  color: #ffffff;
}
.wallets{
  font-size: 15.5px;
}
.feature-card-1 p {
  font-size: 17px;
}
.feature-card-2 p{
  font-size: 17px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.13);
  border-radius: 3px;
  padding: 2.5px 8px;
  margin-right: 8px;
}
.feature-card-3 img{
  margin-right: 7px;
}
.feature-card-3 p{
  padding-top: 2px;
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 2%;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  padding-top: 15px;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.dropdown-nav{
  background-color: #175CD3;
  height: 100vh;
  list-style: none;
}
.logout{
  display: flex;
  justify-content: center;
  margin-top: 110%;
  margin-right: 25%;
}

.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 10px;
}

.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  color: #000;
  padding-top: 15px;
}

.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(360deg);
}

.links-name-separate{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.links-name-separate span{
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 0;
}


.dropdown-nav-2{
  display: flex;
  align-content: center;
  align-items: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 7%;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #0f171c;
  font-size: 17px;
  text-align: center;
}

.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
}

.dropdown-nav-2 ul {
  padding-top: 10px;
}

.dropdown-nav-2 a {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  align-content: center;
  align-items: center;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav-2 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
}

.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #C30000;
}

.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
  margin-left: 60%;
}
.icon-active{
  transform: rotate(180deg);
}

@media (max-width: 990px) {
  i{
    font-size: 20px;
    padding-right: 5px;
  }

}

@media (max-width: 550px) {
}

</style>