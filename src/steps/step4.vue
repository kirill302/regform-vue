<template>
  <div>
    <v-modal :visible="modalVisible" @hide="modalVisible = false">
      <template v-slot:text>
        Просим Вас обратиться в офис Фонда для оформления Договора. Приносим
        свои извинения за доставленные неудобства.
        <v-link>Контакты и офисы АО «НПФ ГАЗФОНД» (gazfond.ru)</v-link>
      </template>
    </v-modal>

    <step-50-50 class="step step-4" :stepNum="4" :amountSteps="7">
      <template v-slot:button-next>
        <button class="v-button" @click="next" :disabled="q1 || q2 || q3 || q4 || q5">Далее</button>
      </template>
      <template v-slot:button-prev>
        <button class="v-button" @click="prev">Назад</button>
      </template>

      <template v-slot:title>Четвёртый шаг</template>

      <template v-slot:col1-content>
        <div class="questions">
          <div class="questions__item">
            <v-text
              class="d-flex justify-content-between align-items-center mb-1"
            >
              <div class="fw-bold">Вопрос 1</div>
              <div>
                <label for="question1-NO" class="me-md-0 me-2">
                  <custom-input class="ms-2 me-md-2 me-1">
                    <input
                      type="radio"
                      checked
                      name="question1"
                      id="question1-NO"
                      @change="q1 = false"
                    /> </custom-input
                  >Нет
                </label>
                <label for="question1-YES">
                  <custom-input class="ms-3 me-md-2 me-1">
                    <input
                      type="radio"
                      name="question1"
                      id="question1-YES"
                      @change="stepDisabled('q1')"
                    /> </custom-input
                  >Да
                </label>
              </div>
            </v-text>
            <v-text class="questions__text text-md-opacity">
              Имеете ли Вы регистрацию, место жительства или место нахождения в
              государстве (на территории), которое (которая) не выполняет
              рекомендации ФАТФ (Исламская республика Иран, Корейская
              Народно-демократическая республика), либо используете счета в
              банке, зарегистрированном в таком государстве (на такой
              территории)?
            </v-text>
          </div>
          <div class="questions__item">
            <v-text
              class="d-flex justify-content-between align-items-center mb-1"
            >
              <div class="fw-bold">Вопрос 2</div>
              <div>
                <label for="questio2-NO" class="me-md-0 me-2">
                  <custom-input class="ms-2 me-md-2 me-1">
                    <input
                      type="radio"
                      checked
                      name="questio2"
                      id="questio2-NO"
                      @change="q2 = false"
                    /> </custom-input
                  >Нет
                </label>
                <label for="questio2-YES">
                  <custom-input class="ms-3 me-md-2 me-1">
                    <input
                      type="radio"
                      name="questio2"
                      id="questio2-YES"
                      @change="stepDisabled('q2')"
                    /> </custom-input
                  >Да
                </label>
              </div>
            </v-text>
            <v-text class="questions__text text-md-opacity">
              Являетесь ли Вы иностранным публичным должностным лицом,
              должностным лицом публичных международных организаций, лицом,
              занимающим определенные государственные должности в РФ, должности
              в государственных федеральных службах, корпорациях и иных
              организациях, назначение на которые и освобождение от которых
              осуществляются Президентом РФ или Правительством РФ?
            </v-text>
          </div>
        </div>
      </template>
      <template v-slot:col2-content>
        <div class="questions">
          <div class="questions__item">
            <v-text
              class="d-flex justify-content-between align-items-center mb-1"
            >
              <div class="fw-bold">Вопрос 3</div>
              <div>
                <label for="question3-NO" class="me-md-0 me-2">
                  <custom-input class="ms-2 me-md-2 me-1">
                    <input
                      type="radio"
                      checked
                      name="question3"
                      id="question3-NO"
                      @change="q3 = false"
                    /> </custom-input
                  >Нет
                </label>
                <label for="question3-YES">
                  <custom-input class="ms-3 me-md-2 me-1">
                    <input
                      type="radio"
                      name="question3"
                      id="question3-YES"
                      @change="stepDisabled('q3')"
                    /> </custom-input
                  >Да
                </label>
              </div>
            </v-text>
            <v-text class="questions__text text-md-opacity">
              Являетесь ли Вы супругом, близким родственником (по прямой линии
              (родителем, ребенком, дедушкой, внуком), усыновителем,
              усыновленным, полнородным / неполнородным (общий отец / мать)
              братом / сестрой, должностного лица в РФ / иностранного,
              должностного лица в публичных международных организациях или
              действуете в его интересах?
            </v-text>
          </div>
          <div class="questions__item">
            <v-text
              class="d-flex justify-content-between align-items-center mb-1"
            >
              <div class="fw-bold">Вопрос 4</div>
              <div>
                <label for="question4-NO" class="me-md-0 me-2">
                  <custom-input class="ms-2 me-md-2 me-1">
                    <input
                      type="radio"
                      checked
                      name="question4"
                      id="question4-NO"
                      @change="q4 = false"
                    /> </custom-input
                  >Нет
                </label>
                <label for="question4-YES">
                  <custom-input class="ms-3 me-md-2 me-1">
                    <input
                      type="radio"
                      name="question4"
                      id="question4-YES"
                      @change="stepDisabled('q4')"
                    /> </custom-input
                  >Да
                </label>
              </div>
            </v-text>
            <v-text class="questions__text text-md-opacity">
              Действуете ли Вы в интересах третьего лица (выгодоприобретателя) /
              планируете ли Вы совершать операции к выгоде других лиц
              (выгодоприобретателей), либо действовать в интересах третьих лиц?
            </v-text>
          </div>
          <div class="questions__item _last">
            <v-text
              class="d-flex justify-content-between align-items-center mb-1"
            >
              <div class="fw-bold">Вопрос 5</div>
              <div>
                <label for="question5-NO" class="me-md-0 me-2">
                  <custom-input class="ms-2 me-md-2 me-1">
                    <input
                      type="radio"
                      checked
                      name="question5"
                      id="question5-NO"
                      @change="q5 = false"
                    /> </custom-input
                  >Нет
                </label>
                <label for="question5-YES">
                  <custom-input class="ms-3 me-md-2 me-1">
                    <input
                      type="radio"
                      name="question5"
                      id="question5-YES"
                      @change="stepDisabled('q5')"
                    /> </custom-input
                  >Да
                </label>
              </div>
            </v-text>
            <v-text class="questions__text text-md-opacity">
              Есть ли у Вас бенефициарный владелец (лицо, которое имеет
              возможность контролировать Ваши действия)?
            </v-text>
          </div>
        </div>
      </template>
    </step-50-50>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,

      // q - вопрос (1 - 5)
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    };
  },
  methods: {
    stepDisabled(q) {
      this[q] = true
      this.modalVisible = true;
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
.text-md-opacity {
  @media (max-width:768px) {
    opacity: .7;
  }
}
.step-4 {
  @media (max-width: 768px) {
    .form-reg__col {
      box-shadow: none !important;
      background: none;
      padding: 0 !important;
      margin: 0;
    }
    .form-reg__row {
      gap: 0;
    }
  }
}
.questions {
  &__text {
    text-align: justify;
    font-size: 14px;
    line-height: 18px !important;
    margin: 0 !important;
    @media (max-width: 567px) {
      font-size: 10px !important;
      line-height: 15px !important;
    }
  }
  &__item {
    margin-bottom: 25px;
    @media (max-width: 768px) {
      padding: 20px;
      margin-bottom: 20px;
      background: #ffffff;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
  &__item:last-child {
    margin-bottom: 0px;
  }
  &__item._last {
    margin-bottom: 0;
  }
}
</style>