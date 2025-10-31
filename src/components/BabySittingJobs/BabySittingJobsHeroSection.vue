<template>
  <div class="alpha">
    <p class="header">Find a babysitting job</p>
    <p class="sub-header">Babysitting job wanted? Find the perfect babysitting job quickly and <br class="breaker"/> easily via Babysits.</p>

    <div class="section-alpha">

      <div class="section-2">

        <img src="@/assets/barry_search.webp" alt="image" class="image" />

      </div>


      <div class="section-1">

        <div class="text-part">
          <div class="lawrence">
            <div class="circle-step-number">1</div>
            <p class="text-1">Search</p>
          </div>
          <p class="text-2">Filter based on your needs and review detailed profiles.</p>
        </div>

        <div class="text-part">
          <div class="lawrence">
            <div class="circle-step-number">2</div>
            <p class="text-1">Connect</p>
          </div>
          <p class="text-2">Send messages, screen members and have an introductory meeting.</p>
        </div>

        <div class="text-part">
          <div class="lawrence">
            <div class="circle-step-number">3</div>
            <p class="text-1">Book</p>
          </div>
          <p class="text-2">Book a babysitting appointment, pay or get paid and download receipts for expenses.</p>
        </div>
      </div>
    </div>

    <p class="section-4-button">Sign up for free</p>
  </div>
</template>

<script>
export default {
  name: "BabySittingJobsHeroSection"
}
</script>

<style scoped>
.lawrence{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 8px;
}

.alpha{
  padding-top: 5%;
}

.section-1{
  width: 65%;
}

.section-2{
  width: 35%;
}


.header{
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem !important;
  color: #f8fbfb;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 1.3px;
}
.sub-header{
  font-size: 1.3rem;
  text-align: center;
  color: #f8fbfb;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}


.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 3%;
}

.image{
  width: 60%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: #407980;
  border-radius: 50%;
  padding: 20px;
}

.circle-step-number {
  background-color: #407980;
  color: #f8fbfb;
  flex: 0 0 3.5rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50% !important;
  transition: background-color .5s linear;
  display: flex; /* Add flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.text-part{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
}

.text-1{
  font-size: 26px;
  line-height: 20px;
  font-weight: 6000;
  white-space: pre-line;
  color: #f8fbfb;
}

.text-2{
  margin: 0;
  color: #f8fbfb;
  font-size: 16px;
  white-space: pre-line;
  line-height: 1.2;
  padding-left: 7%;
  font-weight: 300;
}

.section-4-button{
  text-align: center;
  border: 1px solid #389ba7;
  display: flex;
  justify-content: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding:  0.475rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #389ba7;
  border-radius: 1rem;
  color: #f8fbfb;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.section-4-button:hover{
  background-color: #4ca5b0;
  border: 1px solid #4ca5b0;
  color: #fff;
}

@media (max-width: 700px) {
  .alpha{
    padding-top: 10%;
    padding-bottom: unset;
  }
  .section-header{
    font-size: 16px;
    margin-left: 8%;
    margin-right: 8%;
  }
  .section-header-1{
    font-size: 28px;
  }
  .section-alpha{
    display: flex;
    flex-direction: column-reverse;
  }
  .section-1{
    width: 100%;
    margin-bottom: 10px;
  }

  .section-2{
    width: 100%;
    margin-bottom: 5%;
  }

  .text-1{
    font-size: 22px;
    line-height: 24px;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
    padding-left: 10%;
  }
  .image{
    width: 50%;
  }
}


@media (max-width: 500px) {
  .alpha{
    padding-bottom: unset;
  }

  .image{
    margin-bottom: -19px;
  }

  .lawrence{
    margin-bottom: 5px;
  }

  .breaker{
    display: none;
  }

  .header{
    width: 80%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .sub-header{
    width: 85%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .section-4-button{
    margin-top: 5%;
  }

}
</style>