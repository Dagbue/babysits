<template>
  <div class="alpha">
    <div class="section-3">

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Deposited</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-balance-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

      <div class="vl-2"></div>

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Withdrawn</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

      <div class="vl-2"></div>

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Profits</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

      <div class="vl-2"></div>

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Bonus</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

    </div>

    <div class="section-3-i">

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Ref Bonus</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-balance-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

      <div class="vl-2"></div>

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Balance</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

      <div class="vl-2"></div>

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Daily ROI</p>
          <p class="content-1-text-2">0</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

      <div class="vl-2"></div>

      <div class="section-3-content">
        <div class="content-1">
          <p class="content-1-text-1">Investment Plan</p>
          <p class="content-1-text-2">Not Selected</p>
        </div>
        <div class="content-2">
          <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
        </div>
      </div>

    </div>

    <div class="bit-1">
      <div style="height:669px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;"><div style="height:649px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=10&pref_coin_id=1505&graph=yes" width="100%" height="645px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by GTIL</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoardUserDashBoardView"
}
</script>

<style scoped>
.alpha{
  margin-top: 3%;
}
.section-3{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #F2F4F7;
  border-bottom: 0.5px solid #F2F4F7;
  border-radius: 8px;
  margin-left: 2%;
}

.section-3-i{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #F2F4F7;
  border-top: 0.5px solid #F2F4F7;
  border-radius: 8px;
  margin-left: 2%;
}

.section-3-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 20%;
}

.vl-2{
  border-left: 1.5px solid #E7E8F0;
  height: 50px;
  margin-left: 1%;
  margin-right: 1%;
}

.content-1-text-1{
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #667085;
}

.content-1-text-2{
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #D23535;
}

.bit-1{
  margin-right: 4%;
  margin-left: 2%;
  margin-top: 3%;
}
</style>