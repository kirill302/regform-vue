<template>
  <form @submit.prevent="">
    <v-modal :visible="modalVisible" @hide="modalVisible = false">
      <template v-slot:title>«Отсутствие ИНН Российской Федерации»</template>
      <template v-slot:text
        >Оформление договора онлайн возможно только налоговыми резидентами РФ и
        только при наличии идентификационного номера налогоплательщика (ИНН),
        выданного в соответствии с законодательством РФ. Просим обратиться в
        офис Фонда.
        <v-link>Контакты и офисы АО «НПФ ГАЗФОНД» (gazfond.ru)</v-link>
      </template>
    </v-modal>
    <step-50-50 class="step step-2" :stepNum="2" :amountSteps="7">
      <template v-slot:button-next>
        <button class="v-button" :disabled="notInn || !confirm" @click="checkForm">Далее</button>
      </template>
      <template v-slot:button-prev>
        <button class="v-button" @click="prev">Назад</button>
      </template>
      <template v-slot:title>Второй шаг</template>

      <template v-slot:col1-content>
        <div class="">
          <tit-h3 v-if="pageWidth > 768"
            >Информация об ИНН Российской Федерации</tit-h3
          >
          <tit-h3 v-else>Информация об ИНН РФ</tit-h3>

          <label for="innRFY" class="mb-30-20px">
            <v-text class="m-0 fw-md-bold fw-400 text-start">
              <custom-input class="me-md-2 me-1">
                <input
                  type="radio"
                  checked
                  name="innRF"
                  id="innRFY"
                  @change="notInn = false"
                />
              </custom-input>

              <span v-if="pageWidth > 768"
                >Являюсь налоговым резидентом Российской Федерации</span
              >
              <span v-else>Являюсь налоговым резидентом РФ</span>
            </v-text>
          </label>

          <div class="d-flex flex-wrap mb-3 align-items-end">
            <div class="input-wrapper mb-md-2 md-1 col-md-12 col-6">
              <v-input
                v-model="Inn"
                v-mask="'############'"
                :disabled="notInn"
                :class="{ unvalide: $v.Inn.$invalid && $v.Inn.$dirty }"
                :placeholder="INNplaceholder"
              ></v-input>
            </div>
            <div class="text-end mb-2 mb-md-4 col-md-12 col-6">
              <v-link> Узнайте свой ИНН </v-link>
            </div>
          </div>

          <v-text>
            <label class="v-text d-md-block d-flex gap-2">
              <custom-input class="me-2">
                <input type="checkbox" v-model="confirm" :class="!confirm ? 'unvalide' : ''"/>
              </custom-input>
              <span class="text-md-opacity pt-md-0 pt-1 lh-18px" :class="!confirm ? 'text-red' : ''">
                Подтверждаю, что не являюсь резидентом иного государства
              </span>
            </label>
          </v-text>
        </div>
      </template>
      <template v-slot:col2-content>
        <div class="form-reg__disabled">
          <tit-h3 class="mb-30-20px"
            ><span v-if="pageWidth > 768"
              >Отсутствие ИНН Российской Федерации</span
            >
            <span v-else>Отсутствие ИНН РФ</span>
          </tit-h3>
          <tit-h3></tit-h3>

          <label for="innRFN" class="d-flex gap-2">
            <custom-input class="">
              <input type="radio" name="innRF" id="innRFN" @change="noInn" />
            </custom-input>
            <v-text class="mt-1 text-opacity lh-18px pt-md-0 pt-2px">
              Предоставить ИНН не имею возможности
            </v-text>
          </label>
        </div>
      </template>
    </step-50-50>
  </form>
</template>

<script>
import {
  required,
  minLength
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      pageWidth: window.innerWidth,
      modalVisible: false,
      INNplaceholder:
        window.innerWidth > 768
          ? "Идентификационный номер налогоплательщика (ИНН)"
          : "ИНН",
      notInn: false,
      confirm: false,
      Inn: "",
    };
  },
  validations: {
    Inn: {
      required,
      minLength: minLength(12)
    },
  },
  methods: {
    checkForm() {
      this.$v.Inn.$touch();
      if (this.$v.Inn.$error) {
        console.log("err");
      } else {
        this.next();
      }
    },
    noInn() {
      this.modalVisible = true;
      this.notInn = true;
    },
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style lang="scss">
.step-2 {
  line-height: 18px;
  .form-reg__col {
    @media (max-width: 768px) {
      padding-bottom: 10px !important;
    }
  }
}
</style>