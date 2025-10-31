<template>
  <div class="alpha">

    <form @submit.prevent="sendMessage" style="color: white;" class="section-1-alpha">
      <p class="text-1">Two Factor Authentication Settings

      </p>
      <hr/>
      <div class="section-1-part-1">
        <div>
          <p v-if="this.history.code === ''"  class="text-2">Two Factor Authentication is Turned Off.</p>
          <p v-else class="text-2 on">Two Factor Authentication is Turned On.</p>
        </div>

<!--        <div>-->
<!--          <p  class="text-3">Two Factor Authentication is currently turned off and your Account / Assets are not totally secured.</p>-->
<!--          <p  class="text-3">Two Factor Authentication is currently turned on and your Account / Assets are totally secured.</p>-->
<!--        </div>-->

        <p class="text-4">Turn on Two Factor Authentication  <span style="color: rgb(0, 128, 0);">
          ( Highly Recommended ) </span>  Set Two Factor Authentication</p>
      </div>

      <div class="referral-part">
        <input type="text" required="required" v-model="code"  placeholder="ENTER AUTHENTICATION CODE"  class="link-box"/>
        <button
            class="link-button"
        >Save Code</button>

      </div>

      <div class="lawrence">
        <p style="margin-top: 1%;" class="link-button-2" @click="generateRandomString" >
          Generate Code
        </p>
        <p style="padding-top: 15px; font-size: 17px; padding-left: 10px;">&nbsp; : {{randomString}}</p>
      </div>

    </form>



  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "DashBoardDepositRequestsView",
  data () {
    return {
      code: "",
      randomString: "",
      history: [],
    }
  },

  computed: {

  },

  methods: {
    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    async sendMessage() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      await setDoc(doc(db,"authenticationCode", "code"), {
        code: this.code,
      }, {merge: true})
          .then(() => {
            console.log('saved')
          })
      await this.populate()
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Code Set Successfully!',
      });
    },

    async populate() {
      const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));
      querySnapshot2.forEach((doc) => {
        let data = {
          'code': doc.data().code,
        }
        this.history = data
      })
      this.code = this.history.code
    }

  },

  async created() {
    const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'code': doc.data().code,
      }
      this.history = data
    })

    await this.populate()
  },

  async mounted() {
    const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'code': doc.data().code,
      }
      this.history = data
    })

    await this.populate()
  }
}
</script>

<style scoped>
.alpha{
  display: flex;
  flex-direction: column;
}
.section-1-alpha{
  margin-top: 4%;
  float: left;

  background-color: #818a91;
  padding: 35px 40px;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}
.section-1-part-1{
  display: block;
  text-align: left;
}
.link-box{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px 0 0 5px;
  width: 370px;
  height: 35px;
  color: #000000;
  padding: 5px 20px;
}


.link-button{
  background-color: #D23535;
  border: 1px solid #D23535;
  display: inline-block;
  font-weight: 400;
  width: 130px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  /*background-color: transparent;*/
  /*border: 1px solid transparent;*/
  /*padding: 0.375rem 0.75rem;*/
  font-size: 0.875rem;
  height: 35px;
  line-height: 1.4;
  border-radius: 0 5px 5px 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.link-button-2{
  float: left;
  background-color: #D23535;
  border: 1px solid #D23535;
  /*display: block;*/
  /*margin: auto;*/
  /*display: inline-block;*/
  font-weight: 400;
  width: 155px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 0.875rem;
  height: 35px;
  line-height: 1.4;
  border-radius:  5px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-1{
  text-align: left;
}

.text-2{
  color: #770101;
  background-color: #facccc;
  border-color: #f8b8b8;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}

.on{
  color: #ffffff;
  background-color: rgba(0, 128, 0, 1);
  border-color: rgb(0, 128, 0);
}

.text-3{
  color: #142c78;
  background-color: #d4ddfa;
  border-color: #c3cff8;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}


.referral-part{
  padding-top: 30px;
  display: flex;
}
hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}
.avatar{
  padding-right: 10px;
  width: 13%;
}

label{
  padding-bottom: 5px;
  padding-top: 25px;
}



@media (max-width: 700px) {
  .section-1-alpha{
    margin-top: 5%;
    float: unset;
    background-color: #0f171c;
    padding: 30px 40px;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .referral-part{
    margin-bottom: 3%;
  }
}

@media (max-width: 500px) {
  .section-1-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
    max-width: 500px;
  }
}

</style>