<template>
  <form @submit.prevent="">
    <step-30-70 class="step step-3" :stepNum="3" :amountSteps="7">
      <template v-slot:button-next>
        <button class="v-button" @click="checkForm">Далее</button>
      </template>
      <template v-slot:button-prev>
        <button class="v-button" @click="prev">Назад</button>
      </template>

      <template v-slot:title> Третий шаг </template>

      <template v-slot:col1-content>
        <tit-h3>Контактные данные</tit-h3>

        <div class="input-wrapper form-inputs__row">
          <v-input
            placeholder="Мобильный телефон"
            type="tel"
            v-mask="'+7 (###) ### ##-##'"
            v-model="form.telephone"
            :class="
              $v.form.telephone.$invalid && $v.form.telephone.$dirty
                ? 'unvalide'
                : ''
            "
          ></v-input>
        </div>
        <div class="input-wrapper form-inputs__row">
          <v-input
            placeholder="Домашний телефон (необязательно)"
            type="tel"
            v-mask="'+7 (###) ### ##-##'"
            v-model="form.homeTelephone"
          ></v-input>
        </div>
        <div class="input-wrapper form-inputs__row">
          <v-input
            placeholder="Рабочий телефон (необязательно)"
            type="tel"
            v-mask="'+7 (###) ### ##-##'"
            v-model="form.jobTelephone"
          ></v-input>
        </div>
        <div class="input-wrapper">
          <v-input
            :class="
              $v.form.email.$invalid && $v.form.email.$dirty ? 'unvalide' : ''
            "
            placeholder="Email"
            v-model="form.email"
          ></v-input>
        </div>
      </template>
      <template v-slot:col2-content>
        <tit-h3>Адресные данные</tit-h3>

        <!-- адрес регистрации -->
        <div>
          <div
            class="input-wrapper"
            :class="{
              'mb-30-20px': registerAddresInputsVisible,
              'mb-3': !registerAddresInputsVisible,
            }"
          >
            <!-- ИНПУТ АДРЕС РЕГИСТРАЦИИ -->
            <autocomplete-input
              :placeholder="'Адрес регистрации'"
              :autocompleteArray="autoArray"
              v-model="form.address1.main"
              :class="
                $v.form.address1.main.$invalid && $v.form.address1.main.$dirty
                  ? 'unvalide'
                  : ''
              "
            ></autocomplete-input>
          </div>
          <!-- СКРЫТЫЕ ПОЛЯ АДРЕСА РЕГИСТРАЦИИ -->
          <div
            class="dispaly-flex flex-column"
            v-show="registerAddresInputsVisible "
          >
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Регион" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray1"
                v-model="form.address1.select1"
                :class="
                  $v.form.address1.select1.$dirty &&
                  $v.form.address1.select1.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Район в регионе" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray2"
                v-model="form.address1.select2"
                :class="
                  $v.form.address1.select2.$dirty &&
                  $v.form.address1.select2.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Город" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray3"
                v-model="form.address1.select3"
                :class="
                  $v.form.address1.select3.$dirty &&
                  $v.form.address1.select3.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Налелённый пункт" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray2"
                v-model="form.address1.select4"
                :class="
                  $v.form.address1.select4.$dirty &&
                  $v.form.address1.select4.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Улица" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray1"
                v-model="form.address1.select5"
                :class="
                  $v.form.address1.select5.$dirty &&
                  $v.form.address1.select5.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>

            <div
              class="d-flex flex-wrap justify-content-between form-inputs__row"
            >
              <div class="bottom-inputs">
                <v-input placeholder="Дом" class=""></v-input>
                <v-input placeholder="Корпус" class=""></v-input>
                <v-input placeholder="Квартира" class=""></v-input>
                <v-input
                  placeholder="Индекс"
                  v-mask="'#####'"
                  v-model="form.address1.index"
                  class=""
                ></v-input>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between flex-wrap-reverse mb-3">
            <label for="nyt4" class="col-md-9">
              <v-text
                class="fw-normal mb-md-3 mb-0 d-md-block d-flex gap-1 lh-18px"
              >
                <custom-input class="me-2">
                  <!-- Адрес регистрации совпадает с адресом проживания -->
                  <input
                    type="checkbox"
                    name=""
                    id="nyt4"
                    @change="adders2None"
                  />
                </custom-input>
                <span class="text-opacity fz-md-12px pt-md-0 pt-1">
                  Адрес регистрации совпадает с адресом проживания
                </span>
              </v-text>
            </label>
            <button
              @click="visibleRegisterAddresInputs"
              class="
                v-link
                col-md-3 col-12
                text-end text-decoration-underline
                pb-md-2
              "
            >
              <span v-if="!registerAddresInputsVisible">Изменить</span>
              <span v-else>Скрыть</span>
              поля
            </button>
          </div>
        </div>

        <hr class="" />
        <!-- адрес проживания -->
        <div>
          <div
            class="input-wrapper"
            :class="{
              'mb-30-20px': lifeAddresInputsVisible,
              'mb-3': !lifeAddresInputsVisible,
            }"
          >
            <!-- ИНПУТ АДРЕС ПРОЖИВАНИЯ -->
            <autocomplete-input
              :placeholder="'Адрес проживания'"
              :disabled="address2Disabled"
              :autocompleteArray="autoArray"
              v-model="form.address2.main"
              :class="
                $v.form.address2.main.$invalid && $v.form.address2.main.$dirty
                  ? 'unvalide'
                  : ''
              "
            ></autocomplete-input>
          </div>

          <!-- СКРЫТЫЕ ПОЛЯ АДРЕСА ПРОЖИВАНИЯ -->
          <div
            class="dispaly-flex flex-column"
            v-show="lifeAddresInputsVisible && !address2Disabled"
          >
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Регион" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray1"
                v-model="form.address2.select1"
                :class="
                  $v.form.address2.select1.$dirty &&
                  $v.form.address2.select1.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Район в регионе" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray2"
                v-model="form.address2.select2"
                :class="
                  $v.form.address2.select2.$dirty &&
                  $v.form.address2.select2.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Город" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray2"
                v-model="form.address2.select3"
                :class="
                  $v.form.address2.select3.$dirty &&
                  $v.form.address2.select3.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Налелённый пункт" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray3"
                v-model="form.address2.select4"
                :class="
                  $v.form.address2.select4.$dirty &&
                  $v.form.address2.select4.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>
            <div
              class="
                form-inputs__row
                ms-0
                me-0
                d-flex
                flex-nowrap
                justify-content-between
                gap-3
              "
            >
              <v-input placeholder="Улица" class="col-8"></v-input>
              <v-select
                class="w-100"
                :options="optionArray3"
                v-model="form.address2.select5"
                :class="
                  $v.form.address2.select5.$dirty &&
                  $v.form.address2.select5.$invalid
                    ? 'unvalide'
                    : ''
                "
              >
              </v-select>
            </div>

            <div class="bottom-inputs">
              <v-input placeholder="Дом" class=""></v-input>
              <v-input placeholder="Корпус" class=""></v-input>
              <v-input placeholder="Квартира" class=""></v-input>
              <v-input
                placeholder="Индекс"
                class=""
                v-mask="'######'"
                v-model="form.address2.index"
              ></v-input>
            </div>
          </div>

          <div class="text-end">
            <button
              @click="visibleLifeAddresInputs"
              class="v-link text-decoration-underline"
            >
              <span v-if="!lifeAddresInputsVisible">Изменить</span>
              <span v-else>Скрыть</span>
              поля
            </button>
          </div>
        </div>
      </template>
    </step-30-70>
  </form>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      optionArray1: [
        { text: "область", id: 0 },
        { text: "город", id: 1 },
        { text: "поселок", id: 2 },
      ],
      optionArray2: [
        { text: "город", id: 0 },
        { text: "село", id: 1 },
        { text: "деревня", id: 2 },
      ],
      optionArray3: [
        { text: "поселок", id: 0 },
        { text: "село", id: 1 },
        { text: "город", id: 2 },
      ],
      autoArray: [
        "строка 1",
        "улица пушкина дом колотушкина",
        "улица московская дом 56",
        "улица московская дом 593",
        "строка 3",
      ],
      pageWidth: window.innerWidth,
      registerAddresInputsVisible: false,
      lifeAddresInputsVisible: false,
      address2Disabled: false,
      form: {
        telephone: "",
        homeTelephone: "",
        jobTelephone: "",
        email: "",

        address1: {
          main: "",
          index: "",

          select1: "",
          select2: "",
          select3: "",
          select4: "",
          select5: "",
        },
        address2: {
          main: "",
          index: "",

          select1: "",
          select2: "",
          select3: "",
          select4: "",
          select5: "",
        },
      },
    };
  },
  validations: {
    form: {
      telephone: { required, minLength: minLength(18) },
      email: { required, email },
      address1: {
        main: { required },
        select1: { required, minLength: minLength(2) },
        select2: { required, minLength: minLength(2) },
        select3: { required, minLength: minLength(2) },
        select4: { required, minLength: minLength(2) },
        select5: { required, minLength: minLength(2) },
      },
      address2: {
        main: { required },
        select1: { required, minLength: minLength(2) },
        select2: { required, minLength: minLength(2) },
        select3: { required, minLength: minLength(2) },
        select4: { required, minLength: minLength(2) },
        select5: { required, minLength: minLength(2) },
      },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        this.registerAddresInputsVisible = true;
        if (!this.address2Disabled) {
          this.lifeAddresInputsVisible = true;
        }
      } else {
        this.next();
      }
    },
    visibleRegisterAddresInputs() {
      if (this.registerAddresInputsVisible) {
        this.registerAddresInputsVisible = false;
      } else {
        this.registerAddresInputsVisible = true;
      }
    },
    visibleLifeAddresInputs() {
      if (this.lifeAddresInputsVisible) {
        this.lifeAddresInputsVisible = false;
      } else {
        this.lifeAddresInputsVisible = true;
      }
    },
    adders2None() {
      this.address2Disabled = this.address2Disabled ? false : true;
      if (this.address2Disabled) {
        this.form.address2.main = "совпадает с адресом проживания";
        this.form.address2.select1 = 'placeholder'
        this.form.address2.select2 = 'placeholder'
        this.form.address2.select3 = 'placeholder'
        this.form.address2.select4 = 'placeholder'
        this.form.address2.select5 = 'placeholder'
      } else {
        this.form.address2.main = "";
        this.form.address2.select1 = '—'
        this.form.address2.select2 = '—'
        this.form.address2.select3 = '—'
        this.form.address2.select4 = '—'
        this.form.address2.select5 = '—'
      }
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
.dispaly-flex {
  display: flex;
}
.step-3 {
  .form-reg__col {
    @media (max-width: 768px) {
      padding-bottom: 30px !important;
    }
  }

  .mb-30px {
    margin-bottom: 30px !important;
  }
}
.step-3 .form-reg__row {
  align-items: start;
}
.step-3 hr {
  @media (min-width: 768px) {
    margin-bottom: 28px !important;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px !important;
  }
}
.step-3 .bottom-inputs {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  input {
    width: calc(25% - 10px);
  }

  @media (max-width: 768px) {
    row-gap: 20px;
    & input {
      width: calc(50% - 10px);
    }
  }
}
</style>