<template>
  <step-30-70 class="step step-6" :stepNum="6" :amountSteps="7">
    <template v-slot:button-next>
      <button class="v-button" @click="next">Далее</button>
    </template>
    <template v-slot:button-prev>
      <button class="v-button" @click="prev">Назад</button>
    </template>
    <template v-slot:title>Шестой шаг</template>

    <template v-slot:col1-content>
      <div class="d-flex flex-column">
        <tit-h3 class="order-1 order-md-1 mb-30-20px">
          Выберите диапазон первого пенсионного взноса
        </tit-h3>

        <div class="mb-0 order-3 order-md-2 ranges">
          <label for="range-1" class="col-12 mb-25-15px">
            <v-text class="mb-0">
              <custom-input class="me-sm-2 me-0">
                <input
                  type="radio"
                  checked
                  name="range"
                  id="range-1"
                  @change="conditionArray = conditionsArray1"
                />
              </custom-input>
              от 1 000 до 60 000 ₽
            </v-text>
          </label>
          <label for="range-2" class="col-12 mb-25-15px">
            <v-text class="mb-0">
              <custom-input class="me-sm-2 me-0">
                <input
                  type="radio"
                  name="range"
                  id="range-2"
                  @change="conditionArray = conditionsArray2"
                />
              </custom-input>
              от 60 000 до 120 000 ₽
            </v-text>
          </label>
          <label for="range-3" class="col-12 mb-md-2 mb-0">
            <v-text class="">
              <custom-input class="me-sm-2 me-0">
                <input
                  type="radio"
                  name="range"
                  id="range-3"
                  @change="conditionArray = conditionsArray3"
                />
              </custom-input>
              от 120 000 ₽ и выше
            </v-text>
          </label>
        </div>

        <v-text class="order-2 order-md-3 mb-md-0 text-md-opacity ">
          Точный размер первого взноса определяется в дальнейшем при совершении
          платежа
        </v-text>
      </div>
    </template>
    <template v-slot:col2-content>
      <tit-h3 class="mb-md-0 mb-3"> Условия досрочного расторжения Договора </tit-h3>
      <v-text>
        Коэффициенты, используемые для расчета выкупной суммы при досрочном
        расторжении Договора
      </v-text>

      <div class="conditions-table">
        <b-row class="conditions-table__row m-0">
          <div class="conditions-table__item _text">
            <div><span>Период</span> с момента вступления Договора в силу</div>
          </div>
          <div class="conditions-table__item _text">до 1 года</div>
          <div class="conditions-table__item _text">от 1 до 2 лет</div>
          <div class="conditions-table__item _text">от 2 до 3 лет</div>
          <div class="conditions-table__item _text">от 3 лет</div>
        </b-row>
        <b-row class="conditions-table__row m-0">
          <div class="conditions-table__item _text">
            <div>
              <span> Коэффициент К1, </span>применяемыйк сумме пенсионных
              взносов
            </div>
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[0][0] }}
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[0][1] }}
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[0][2] }}
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[0][3] }}
          </div>
        </b-row>
        <b-row class="conditions-table__row m-0">
          <div class="conditions-table__item _text">
            <div>
              <span> Коэффициент К2, </span>применяемый к инвестиционному доходу
            </div>
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[1][0] }}
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[1][1] }}
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[1][2] }}
          </div>
          <div class="conditions-table__item _num">
            {{ conditionArray[1][3] }}
          </div>
        </b-row>
      </div>
    </template>
  </step-30-70>
</template>

<script>
export default {
  data() {
    return {
      conditionArray: [],
      conditionsArray1: [
        [0.9, 1, 1, 1],
        [0.5, 0.5, 0.5, 1],
      ],
      conditionsArray2: [
        [0.9, 1, 1, 1],
        [0.5, 0.7, 0.9, 1],
      ],
      conditionsArray3: [
        [0.95, 1, 1, 1],
        [0.7, 0.9, 1, 1],
      ],
    };
  },
  beforeMount() {
    this.conditionArray = this.conditionsArray1;
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style lang="scss" >
.step-6 {
  line-height: 18px;
  .form-reg__col {
    @media (max-width:768px) {
      padding-bottom: 30px !important;
    }
  }
}
@media (max-width: 768px) {
  .mb-md-30px {
    * {
      margin-bottom: 0 !important;
    }
    margin-bottom: 30px !important;
  }
}
.mb-20px {
  * {
    margin-bottom: 0 !important;
  }
  margin-bottom: 20px !important;
}
.step-6 .ranges .v-text {
  font-weight: 700;

  @media (max-width: 768px) {
    font-weight: 600;
  }
}
.fw-500 {
  font-weight: 700 !important;
}
.conditions-table {
  display: flex;
  row-gap: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 567px) {
    padding: 0;
  }
  &__row {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
    font-family: "Oswald";
    background: #f6f8f9;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      font-family: "Inter", sans-serif;
    }
  }
  &__item._text {
    width: calc(15% - 10px);
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 768px) {
      width: calc(25% - 10px);
      padding: 10px;
      font-weight: 500;
    }
    @media (max-width: 567px) {
      font-size: 10px;
      width: calc(25% - 5px);
    }
  }
  &__item._text:first-child {
    font-family: "Inter";
    font-size: 12px;
    font-weight: 400;
    padding: 15px;
    width: calc(35% - 10px);
    text-align: left;

    @media (max-width: 768px) {
      padding: 0 0 10px 0;
      display: block;
      background: none;
      width: 100%;
      text-align-last: left;
      span {
        display: block;
        font-size: 14px;
      }
    }
    @media (max-width: 567px) {
      font-size: 10px;
      span {
        display: block;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  &__item._num {
    @media (max-width: 768px) {
      width: calc(25% - 10px);
      padding: 10px;
      line-height: 2.5;
      font-size: 16px;
    }
    width: calc(15% - 10px);
    font-size: 24px;
    color: rgba(0, 135, 212, 0.8);
    font-weight: 500;
    @media (max-width: 567px) {
      width: calc(25% - 5px);
    }
  }
}
</style>