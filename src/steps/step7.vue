<template>
  <div
    class="step step-7"
    :class="{
      'visible-1': visibleBlock === 1,
      'visible-2': visibleBlock === 2,
    }"
  >
    <step-50-50 :stepNum="7" :amountSteps="7">
      <template v-slot:button-prev>
        <button
          class="v-button _dec"
          @click="prev"
          :disabled="visibleBlock === 2"
        >
          назад
        </button>
      </template>

      <template v-slot:title> Седьмой шаг </template>

      <template v-slot:col1-content>
        <div>
          <tit-h3>Ознакомление с документами</tit-h3>
          <v-text class="text-md-opacity lh-18px mb-15px">
            Проверьте корректность указанных личных сведений, а также
            ознакомьтесь с <v-link class="fw-400">текстом Договора</v-link> и другими
            документами Фонда:
          </v-text>

          <ul class="mb-15px step7__list">
            <v-link class="v-link">
              <li class="mb-md-2 mb-1">Ключевым информационным документом;</li>
            </v-link>
            <v-link class="v-link">
              <li class="mb-md-2 mb-1">Пенсионными правилами;</li>
            </v-link>
            <v-link class="v-link">
              <li class="">Уставом Фонда.</li>
            </v-link>
          </ul>

          <label for="confirmation" class="d-flex mb-xxl-0 mb-lg-2 mb-md-20px">
            <custom-input class="pb-1 confirmation-check me-md-4 me-3">
              <input
                type="checkbox"
                name=""
                id="confirmation"
                v-model="confirm"
                :class="!confirm ? 'unvalide' : ''"
              />
            </custom-input>
            <span class="pt-1 pt-md-0 fz-14-10 mb-30-15px" :class="!confirm ? 'text-red' : ''">
              Подтверждаю, что данные, приведенные мной, являются полными и
              достоверными. С документами ознакомлен (а) и принимаю условия
              Договора НПО.
            </span>
          </label>
          <div class="text-end">
            <button
              class="ps-3 pe-3 add v-button gray"
              @click="sendCode"
              :disabled="visibleBlock === 2 || !confirm"
            >
              <span v-if="visibleBlock === 1">Выслать SMS-код</span>
              <span v-if="visibleBlock === 2">SMS-код выслан</span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:col2-content>
        <div>
          <tit-h3> Подтверждение данных </tit-h3>
          <v-text class="mb-4">
            SMS-код для подтверждения предоставленных данныхи подтверждения
            ознакомления с документами будет направленна Ваш номер мобильного
            телефона
          </v-text>

          <b-row class="me-0 ms-0 mb-4">
            <v-input
              placeholder="Ввести SMS-код "
              class="col-lg-7 col-6 input-confirmation"
              v-model="telInput"
              ref="telInput"
              @input="trackTelInput"
              v-mask="codeMask"
            >
            </v-input>
            <div class="col-lg-5 col-6 d-flex justify-content-end p-0">
              <button
                class="_add col-md-11 col-11 confirmation-btn v-button gray"
                :disabled="visibleBlock === 1 || disabledTelBtn"
                @click="next"
              >
                <span>Подтвердить</span>
              </button>
            </div>
          </b-row>
          <v-text class="mb-4">
            Если Вы не получили SMS-код Вы можете запросить его повторно через:
          </v-text>
          <v-text v-if="telTimer > 0" class="fw-bold m-0"
            >{{ telTimer }} секунд</v-text
          >
          <button v-else class="v-link text-start" @click="sendCode">
            Отправить код повторно
          </button>
        </div>
      </template>
    </step-50-50>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleBlock: 1,
      pageWidth: window.innerWidth,
      telTimer: 60,
      confirm: false,

      telInput: "",

      againTelCode: false,
      disabledTelBtn: true,
      telCode: "1234",
      codeMask: "####",
    };
  },
  methods: {
    startTelTimer() {
      let timer = setInterval(() => {
        if (this.telTimer > 0) {
          this.telTimer--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
    sendCode() {
      this.visibleBlock = 2;
      this.telTimer = 3;
      this.startTelTimer();
    },
    trackTelInput() {
      const input = this.$refs.telInput.$el;
      if (this.telInput.length === this.codeMask.length) {
        if (this.telInput === this.telCode) {
          this.disabledTelBtn = false;
          input.classList.remove("unvalide");
        } else {
          this.disabledTelBtn = true;
          this.telInput = "";
          input.classList.add("unvalide");
          input.blur();
          input.placeholder = "Введен некорректный SMS-код";
        }
      } else {
        this.disabledTelBtn = true;
      }
    },
    prev() {
      this.$emit("prev");
    },
    next() {
      this.$emit("next");
    },
  },
};
</script>

<style lang="scss">
.step-7 {
  .input-confirmation.unvalide {
    background: #f6f8f9;
    border: 1px solid #c4c4c4;
  }

  .input-confirmation.unvalide::placeholder {
    color: #de231b;
    font-weight: 500;
  }
  .v-link {
    text-decoration: underline !important;
  }

  .form-reg__col {
    @media (max-width: 768px) {
      padding-bottom: 30px !important;
    }
  }
}
.confirmation-check {
  @media (max-width: 567px) {
    top: 0 !important;
  }
}
.fz-md-10px {
  @media (max-width: 768px) {
    font-size: 10px;
  }
}
.step-7 {
  .confirmation-btn {
    padding: 0;
  }
}
@media (min-width: 768px) {
  .step-7.visible-1 {
    .from-reg__col2 {
      position: relative;
      opacity: 0.7;
      &:after {
        content: "";
        z-index: 2;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .from-reg__col1 {
      opacity: 1;
      &:after {
        display: none;
      }
    }
  }
  .step-7.visible-2 {
    .from-reg__col2 {
      opacity: 1;
      &:after {
        display: none;
      }
    }
    .from-reg__col1 {
      position: relative;
      opacity: 0.7;
      &:after {
        content: "";
        z-index: 2;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  .step-7.visible-1 {
    .from-reg__col2 {
      display: none !important;
    }
    .from-reg__col1 {
      display: block !important;
    }
  }
  .step-7.visible-2 {
    .from-reg__col2 {
      display: block !important;
    }
    .from-reg__col1 {
      display: none !important;
    }
  }
}
</style>