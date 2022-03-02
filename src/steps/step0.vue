<template>
  <form action="" @submit.prevent>
    <step-30-70 class="step step-0" :stepNum="0">
      <template v-slot:button-prev>
        <button class="v-button" @click="next" :disabled="!agreeCheckBox">
          Далее
        </button>
      </template>

      <template v-slot:title>Оформление Договора</template>
      <template v-slot:col1-content>
        <tit-h3 class="mb-30-20px"> Документы / телефон </tit-h3>
        <v-text class="mb-30-20px">
          Для оформления Договора Вам понадобятся мобильный телефон и всего
          несколько документов:
        </v-text>
        <v-text class="fw-bold mb-30px">
          <custom-input class="me-sm-2 me-0">
            <input type="radio" checked />
          </custom-input>
          Паспорт гражданина РФ
        </v-text>
        <v-text class="fw-bold mb-30px">
          <custom-input class="me-md-2 me-0">
            <input type="radio" checked />
          </custom-input>
          СНИЛС
        </v-text>
        <v-text class="fw-bold mb-30px">
          <custom-input class="me-md-2 me-0">
            <input type="radio" checked />
          </custom-input>
          ИНН
        </v-text>
      </template>
      <template v-slot:col2-content>
        <tit-h3 class="mb-30-20px"> Условия оформления Договора </tit-h3>
        <v-text class="mb-30-20px">
          Договор негосударственного пенсионного обеспечения (далее — Договор)
          будет оформлен непосредственно на сайте. Вам не потребуется лично
          приходить в офис Фонда. Факт оформления Договора будет подтвержден
          Вашей простой электронной подписью (далее — ПЭП)
        </v-text>
        <label for="rt3vct5" class="mb-30-20px">
          <v-text class="m-0 d-md-block d-flex gap-3">
            <custom-input type="checkbox" class="me-sm-3 me-0" >
              <input v-model="agreeCheckBox" type="checkbox" id="rt3vct5" :class="!agreeCheckBox ? 'unvalide' : ''"/>
            </custom-input>
            <span class="text-md-opacity pt-md-0 pt-1" :class="!agreeCheckBox ? 'text-red' : ''">
              Даю свое согласие на присоединение к
              <a class="v-link" href="https://gazfond.ru/" target="_blank"
                >Соглашению о ПЭП</a
              >
            </span>
          </v-text>
        </label>

        <v-text>
          Оформить Договор онлайн Вы можете в любой момент, если являетесь
          совершеннолетним гражданином Российской Федерации, не являетесь
          резидентом иностранного государства и хотите оформить Договор в свою
          пользу.
        </v-text>
      </template>
    </step-30-70>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pageWidth: window.innerWidth,
      agreeCheckBox: false,
    };
  },
  methods: {
    next() {
      this.$emit("next");
    },
  },
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  .text-md-opacity {
    color: rgba(0, 0, 0, 0.5);
  }
}
.step-0 {
  @media (max-width: 768px) {
    .form-reg__row {
      background-color: #fff !important;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      gap: 0;
    }
    .form-reg__col {
      box-shadow: none !important;
      padding-bottom: 0 !important;
    }
  }
  @media (min-width: 768px) {
    .mb-30px {
      margin-bottom: 30px !important;
    }
  }
}
</style>
