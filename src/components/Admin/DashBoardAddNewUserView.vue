<template>
  <div class="back">
    <form class="signUp" @submit.prevent="">
      <div class="wrapper">
        <div class="headline">
<!--          <router-link to="/">-->
<!--            <img src="@/assets/companylogo.svg" alt="logo" class="company-logo">-->
<!--          </router-link>-->
          <h2>
             Add User
          </h2>
<!--          <p>-->
<!--            NB: Investors are not allowed to keep their trade account dormant 2-->
<!--            days after registration to avoid closure of account.-->
<!--          </p>-->
        </div>
        <div class="form">
          <div class="signUp">
            <div class="form-group">
              <input type="text" placeholder="First Name" required name="firstName" />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Last Name" required name="LastName"/>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email" required name="email"/>
            </div>
            <div class="form-group">
              <input type="text" placeholder="PhoneNumber" required name="phoneNumber"/>
            </div>
            <div class="form-group">
              <select  name="country" id="country" required >
                <option selected disabled value="">Choose Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote d&#039;Ivoire">Cote d&#039;Ivoire</option>
                <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="France Metropolitan">France Metropolitan</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People&#039;s Republic of">Korea, Democratic People&#039;s Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao, People&#039;s Democratic Republic">Lao, People&#039;s Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="St. Helena">St. Helena</option>
                <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Yugoslavia">Yugoslavia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" required name="password" />
            </div>
            <div class="form-group">
              <input
                  type="password"
                  placeholder=" Confirm Password"
                  required
                  name="ConfirmPassword"
              />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Referral's Email (Optional)"  name="Referral" />
            </div>

<!--            <div class="form-group-2">-->
<!--              <input-->
<!--                  type="checkbox"-->
<!--                  placeholder="terms"-->
<!--                  id="remember-me"-->
<!--                  class="checkbox"-->
<!--                  name="RememberMe"-->
<!--                  required-->
<!--              />-->
<!--              <label for="remember-me" class="checkbox-text"-->
<!--              >I Agree To Global Trade Investment Limited-->
<!--                <a @click="showDialog" class="terms">Terms And Conditions</a></label-->
<!--              >-->
<!--            </div>-->

            <button  class="btn btn-white btn-animated"
            >Create Account</button
            >
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

  </div>
</template>

<script>
export default {
  name: "DashBoardAddNewUserView",
  data() {
    return {
      dialogIsVisible: false,
    };
  },

  methods: {
    onPostClick() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
  },
}
</script>

<style scoped>
/*form {*/
/*  margin: 0 auto;*/
/*  max-width: 40rem;*/
/*  !*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*!*/
/*box-shadow:  30px 30px 100px #bebebe,*/
/*-50px -50px 100px #ffffff;*/
/*padding: 2rem;*/
/*background-color: #ffffff;*/
/*}*/

/*.alpha{*/
/*background-color: #F6F6F7;*/
/*background-image: url(https://www.interactivebrokers.com/images/web/why-ibkr-global-market-access-background.png), linear-gradient(#F6F6F7 17.14%, #DFE2E7 95.69%);*/
/*background-repeat: no-repeat;*/
/*background-size: 60%, cover;*/
/*background-position: bottom right, top left;*/
/*padding-bottom: 8.5%;*/
/*}*/

.company-logo{
  width: 35%;
  margin-top: 3%;
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

.header-span {
  color: #D23535;
}

.wrapper {
//padding: 50px 25px 0;
  max-width: 768px;
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
  padding-bottom: 20px;
}


.wrapper .headline h2 {
  font-weight: 400;
  font-size: 22px;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: 3%;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
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
  border: 1px solid #e4e8ee;
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
}

.wrapper .form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.btn,
.btn-white,
.btn-animated {
  width: 100%;
  margin: 10px 0 30px;
  line-height: 22px;
  padding: 12px 29px;
  border: none;
  text-align: center;
  border-radius: 5px;
}

.btn:link,
.btn:visited {
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}
.btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 4ms ease-in;
}
.btn:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 4ms ease-in;
}
.btn-white {
  background-color: #D23535;
  color: white;
  font-size: 15px;
}

.form-group-2 {
  padding-top: 15px;
  padding-bottom: 15px;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 15px;
}

.forgot-password {
  padding-left: 26%;
  text-decoration: none;
  color: #D23535;
  font-size: 15px;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 5px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #676767;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 12px;
  color: #676767;
}

.create-acc {
  padding-top: 40px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
}
.create-link {
  padding-left: 10px;
  text-decoration: none;
  color: #D23535;
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
    max-width: 550px;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
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
  .wrapper {
    padding: 10px 25px 0;
  }
  form {
    margin: 1rem;
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: #ffffff;
  }
  .wrapper .headline h1  {
    font-size: 25px;
  }
  .wrapper .headline h2  {
    font-size: 23px;
  }
  .checkbox-text {
    padding-left: 10px;
  }
  .forgot-password {
    padding-left: 20px;
  }
}

</style>