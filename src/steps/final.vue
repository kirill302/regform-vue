<template>
  <step-100
      class="step step-7.1"
    >
    <template v-slot:title>
      Оплата взноса
    </template>
      <template v-slot:content>
        <div class="step-final">
          <tit-h3 class="mb-30-15px"> Поздравляем Вас с оформлением пенсионного Договора! </tit-h3>
          <v-text>
            Договор и Согласие на обработку персональных данных направлены Вам
            на Ваш E-mail.
          </v-text>

          <v-text>
            Договор вступит в силу после поступления первого пенсионного взноса
            в размере не менее установленного Договором.
          </v-text>

          <v-text class="mb-40-30px">
            Для внесения первого пенсионного взноса перейдите на платежную
            страницу Банка, нажав на кнопку «Оплатить».
          </v-text>

          <div class="text-md-start text-end">
            <button class="v-button pe-5 ps-5 gray">Оплатить</button>
          </div>
          
        </div>
      </template>
    </step-100>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.step-final {
  
  height: 100%;
  padding-right: 50%;
  background: url("~@/assets/images/final.svg") no-repeat right;
  background-position: 85%;
  @media (max-width:1400px) {
    background-position: 91%;
  }
  @media (max-width:1200px) {
    background-position: 95%;
  }
  @media (max-width:992px) {
    background-position: 93%;
  }
  background-size: contain;

  @media (max-width:999px) {
    background-size: 40%;
  }

  @media (max-width:768px) {
    background: none;
    padding-right: 0;
  }
}
</style>