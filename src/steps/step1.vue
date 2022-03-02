<template>
  <form @submit.prevent="">
    <v-modal :visible="modalVisible" @hide="modalVisible = false">
      <template v-slot:title>«Возможно, Вами допущена ошибка»</template>
      <template v-slot:text>
        Пожалуйста, проверьте введенные Вами данные. Если данные введены
        корректно, и проверка персональных данных не проходит, просим обратиться
        в офис Фонда.
        <v-link>Контакты и офисы АО «НПФ ГАЗФОНД» (gazfond.ru)</v-link>
      </template>
    </v-modal>

    <step-30-70 class="step step-1" :stepNum="1" :amountSteps="7">
      <template v-slot:button-next>
        <button
          type="submit"
          class="v-button"
          :disabled="!confirm"
          @click="checkForm"
        >
          Далее
        </button>
      </template>
      <template v-slot:button-prev>
        <button class="v-button" @click="prev">Назад</button>
      </template>

      <template v-slot:title>Первый шаг</template>

      <template v-slot:col1-content>
        <tit-h3 class="mb-4"> Основные данные </tit-h3>
        <div class="d-flex flex-column">
          <div class="form-inputs__row order-md-0 order-1 input-wrapper col-12">
            <v-input
              placeholder="Фамилия"
              :class="
                $v.passport.surname.$invalid && $v.passport.surname.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.surname"
            ></v-input>
          </div>
          <div class="form-inputs__row order-md-1 order-2 input-wrapper col-12">
            <v-input
              placeholder="Имя"
              :class="
                $v.passport.name.$invalid && $v.passport.name.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.name"
            ></v-input>
          </div>
          <div
            class="
              form-inputs__row
              order-md-2 order-3
              row
              align-items-center
              ms-0
              me-0
              col-12
            "
          >
            <v-input
              ref="patronymicInput"
              placeholder="Отчество"
              class="col-md-8 col-9"
              :disabled="patronymicDisabled"
              v-model="passport.patronymic"
              :class="
                $v.passport.patronymic.$invalid && $v.passport.patronymic.$dirty
                  ? 'unvalide'
                  : ''
              "
            ></v-input>
            <label
              for="rg43"
              class="
                col-md-4 col-3
                _no
                d-flex
                m-0
                p-0
                ps-lg-4 ps-md-2
                justify-content-md-start justify-content-end
              "
            >
              <custom-input type="checkbox" class="me-5px">
                <input type="checkbox" id="rg43" @change="patronymicNone" />
              </custom-input>
              <span class="pt-1 text-opacity"> Нет </span>
            </label>
          </div>
          <div class="order-md-3 order-0 d-flex col-12">
            <label
              for="sex-man"
              class="col-md-6 col-sm-4 col-6 d-flex mb-md-0 mb-20px"
            >
              <custom-input class="me-sm-2 me-sm-5px">
                <input
                  type="radio"
                  checked
                  name="sex"
                  id="sex-man"
                  @change="sex = 'man'"
                />
              </custom-input>
              <span
                :class="{ disabled: sex === 'woman' }"
                class="pt-sm-1 pt-sm-6px sex"
              >
                Мужчина
              </span>
            </label>
            <label
              for="sex-woman"
              class="
                col-6
                d-flex
                justify-content-md-start justify-content-end
                pe-md-0 pe-4
              "
            >
              <custom-input class="me-sm-2 me-sm-5px">
                <input
                  type="radio"
                  name="sex"
                  id="sex-woman"
                  @change="sex = 'woman'"
                />
              </custom-input>
              <span
                :class="{ disabled: sex === 'man' }"
                class="pt-sm-1 pt-sm-6px sex"
              >
                Женщина
              </span>
            </label>
          </div>
        </div>
      </template>

      <template v-slot:col2-content>
        <tit-h3 class="mb-4"> Паспортные данные, СНИЛС </tit-h3>
        <b-row class="flex-wrap inputs mb-md-2">
          <div class="col-md-3 col-6 order-0 input-wrapper">
            <v-input
              v-mask="'###-###-###-##'"
              :class="
                $v.passport.snils.$invalid && $v.passport.snils.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.snils"
              placeholder="СНИЛС"
            ></v-input>
          </div>
          <div class="col-md-3 col-6 order-1 input-wrapper">
            <input
              :class="
                $v.passport.dateBorn.$invalid && $v.passport.dateBorn.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.dateBorn"
              class="form-reg__input"
              placeholder="Дата рождения"
              @focus="setTypeDate"
              @blur="dateBorn"
            />
          </div>
          <div class="col-md-6 col-12 order-2 input-wrapper">
            <v-input
              placeholder="Место рождения"
              v-model="passport.birthplace"
              :class="
                $v.passport.birthplace.$invalid && $v.passport.birthplace.$dirty
                  ? 'unvalide'
                  : ''
              "
            ></v-input>
          </div>
          <div class="col-md-3 col-6 order-3 input-wrapper">
            <v-input
              :class="
                $v.passport.series.$invalid && $v.passport.series.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.series"
              v-mask="'## ##'"
              placeholder="Серия паспорта"
            ></v-input>
          </div>
          <div class="col-md-3 col-6 order-4 input-wrapper">
            <v-input
              :class="
                $v.passport.number.$invalid && $v.passport.number.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.number"
              v-mask="'######'"
              placeholder="Номер паспорта"
            ></v-input>
          </div>
          <div class="col-md-3 col-6 order-6 order-md-5 input-wrapper">
            <input
              :class="
                $v.passport.dateIssue.$invalid && $v.passport.dateIssue.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.dateIssue"
              class="form-reg__input"
              placeholder="Дата выдачи"
              @focus="setTypeDate"
              @blur="dateIssue"
            />
            
          </div>
          <div class="col-md-3 col-6 order-7 order-md-6 input-wrapper">
            <v-input
              :class="
                $v.passport.codeDepartement.$invalid &&
                $v.passport.codeDepartement.$dirty
                  ? 'unvalide'
                  : ''
              "
              v-model="passport.codeDepartement"
              v-mask="'###-###'"
              placeholder="Код подразделения"
            ></v-input>
          </div>
          <div
            :class="{ 'order-5': pageWidth < 768 }"
            class="col-12 order-md-7 input-wrapper"
          >
            <v-input
              placeholder="Кем выдан"
              v-model="passport.departement"
              :class="
                $v.passport.departement.$invalid &&
                $v.passport.departement.$dirty
                  ? 'unvalide'
                  : ''
              "
            ></v-input>
          </div>
        </b-row>

        <label for="dfivm4" class="mt-4">
          <custom-input class="me-md-2">
            <input type="checkbox" id="dfivm4" v-model="confirm" :class="!confirm ? 'unvalide' : ''" />
          </custom-input>
          <span class="text-md-opacity fz-14-12 text-opacity" :class="!confirm ? 'text-red' : ''">
            Даю свое согласие на
            <a href="" class="v-link fz-md-12px"
              >обработку персональных данных</a
            >
          </span>
        </label>
      </template>
    </step-30-70>
  </form>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      pageWidth: window.innerWidth,
      modalVisible: true,
      confirm: false,
      patronymicDisabled: false,
      sex: "man",
      passport: {
        snils: "",
        dateBorn: "",
        dateIssue: "",
        series: "",
        number: "",
        codeDepartement: "",
        departement: "",
        name: "",
        surname: "",
        patronymic: "",
        birthplace: "",
      },
    };
  },
  validations: {
    passport: {
      snils: { required, minLength: minLength(14) },
      number: { required, minLength: minLength(6) },
      codeDepartement: { required, minLength: minLength(7) },
      dateBorn: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      dateIssue: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      series: { required, minLength: minLength(5) },
      name: { required },
      surname: { required },
      patronymic: { required },
      birthplace: { required },
      departement: { required },
    },
  },
  methods: {
    checkForm() {
      this.$v.passport.$touch();
      if (this.$v.passport.$error) {
        console.log("err");
      } else {
        this.next();
      }
    },
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
    setTypeDate(e) {
      e.target.setAttribute("type", "date");
    },
    dateBorn(e) {
      const strDate = e.target.value;
      const date = strDate.split("-");
      if (date[0].length > 4) {
        date[0] = date[0].substr(0, 4);
      }
      this.passport.dateBorn = date.reverse().join(".");
      e.target.setAttribute("type", "text");
    },
    dateIssue(e) {
      const strDate = e.target.value;
      const date = strDate.split("-");
      if (date[0].length > 4) {
        date[0] = date[0].substr(0, 4);
      }
      this.passport.dateIssue = date.reverse().join(".");
      e.target.setAttribute("type", "text");
    },
    patronymicNone() {
      this.patronymicDisabled = this.patronymicDisabled ? false : true;

      if (this.patronymicDisabled) {
        this.passport.patronymic = "Нет";
      } else {
        this.passport.patronymic = "";
      }
    },
  },
};
</script>

<style lang="scss" csoped>
.step-1 {
  .form-reg__col {
    @media (max-width: 768px) {
      padding-bottom: 30px !important;
    }
  }
}

.sex {
  font-size: 14px;

  @media (max-width: 567px) {
    font-size: 12px;
  }
}
.sex.disabled {
  color: rgba(0, 0, 0, 0.5);
}
.me-sm-5px {
  @media (max-width: 567px) {
    margin-left: 5px;
  }
  margin-right: 5px;
}
.pt-sm-6px {
  @media (max-width: 567px) {
    padding-top: 6px;
  }
}

.inputs {
  row-gap: 30px;

  @media (max-width: 768px) {
    row-gap: 20px;
  }
}
</style>