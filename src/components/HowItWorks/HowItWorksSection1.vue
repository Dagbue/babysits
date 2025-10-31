<template>
  <div class="alpha">
    <p class="header">How It Works</p>
    <div class="section-1">


      <section>
        <details>
          <summary>
            How many babysitters are available on Babysits?
          </summary>
          <p>
            Babysits has 11,984 active babysitters who are happy to babysit for your family.
          </p>
        </details>
        <details>
          <summary>
            What is the average hourly rate for a babysitter?
          </summary>
          <p>
            On Babysits, the average babysitting rate is $16.87 per hour. This may depend on the location, amount of experience, and other factors.
          </p>
        </details>

        <details>
          <summary>
            How many years of work experience does the average babysitter have?
          </summary>
          <p>
            Babysitters on Babysits have an average of 3.2 years of work experience with children.
          </p>
        </details>
        <details>
          <summary>
            What is the average age of a babysitter?
          </summary>
          <p>
            The average age of a babysitter on Babysits is 22 years.


          </p>
        </details>



      </section>

    </div>


  </div>
</template>

<script>
export default {
  name: "HowItWorksSection1"
}
</script>


<style scoped>
.alpha{
  background-color: #4d565e;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
  margin-top: 6%;
}
.section-1{
  display: flex;
  justify-content: space-evenly;
}
.header{
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  font-size: 23px;
  line-height: 1.26;
  margin: 0;
  color: #f8fbfb;
  text-align: center;
  margin-bottom: 3%;
}
.lawrence{
  padding-left: 5%;
}
.lawrence li{
  padding-bottom: 2px;
}
section {
  width: 60%;
  /*margin: auto;*/
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 900;
  list-style: none;
  /*padding-top: 18px;*/
  /*padding-bottom: 10px;*/
  text-transform: uppercase;
  color: #f8fbfb;
}

details summary:after {
  content: "+";
  color: #f8fbfb;
  position: absolute;
  font-size: 1.7rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: bold;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 17px;
  margin: 0 0 1rem;
  padding-top: 1rem;
  color: #f8fbfb;
}
details {
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);*/
  position: relative;
  padding: 15px;
  margin-bottom: 2%;
  /*border-radius: 5px;*/
  border-bottom: solid 0.125rem #e7eaf0;
}
@media (max-width: 700px){
  .section-1{
    display: block;
    width: 100%;
    padding-top: 10%;
  }
  .header{
    width: 100%;
    text-align: center;
  }
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 82%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>