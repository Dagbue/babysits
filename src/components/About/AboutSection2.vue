<template>
    <div class="section-7-alpha">

      <div class="section-7-content">
        <div class="section-7-part-2">
          <p class="section-7-part-2-text-1">Childcare is always within reach with our app</p>
          <p class="section-7-part-2-text-2">Quickly view the babysitting jobs and available babysitters or nannies in your area via our app!</p>

          <div class="section-7-btn-group">
            <p class="section-7-button">App Store</p>
            <p class="section-7-button">Google Play</p>
          </div>
        </div>
        <div class="section-7-part-1">
          <img src="@/assets/app.webp" alt="image" class="section-7-part-7-image">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AboutSection2"
}
</script>



<style scoped>
.section-7-alpha{
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.section-7-content{
  color: #f8fbfb;
  display: flex;
  justify-content: center;
  gap: 10%;
}

.section-7-part-7-image{
  width: 90%;
}

.section-7-part-2-text-1{
  font-size: 1.5rem;
  line-height: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
}

.section-7-part-2-text-2{
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
  text-align: center;
}

.section-7-btn-group{
  display: flex;
  justify-content: center;
  gap: 5px;
}

.section-7-button{
  text-align: center;
  border: 1px solid #389ba7;
  width: 140px;
  padding:  0.475rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #389ba7;
  border-radius: 1rem;
  color: #fff;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}


.section-7-button:hover{
  background-color: #4ca5b0;
  border: 1px solid #4ca5b0;
  color: #fff;
}

.section-7-part-2{
  margin-left: 7.5rem;
  margin-top: 5rem;
}

@media (max-width: 750px) {

  .section-7-content{
    display: block;
  }

  .section-7-part-2{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }

  .section-7-part-7-image{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>