<template>
  <step-50-50 class="step step-5" :stepNum="5" :amountSteps="7">
    <template v-slot:button-next>
      <button
        class="v-button"
        @click="next"
        :disabled="!(confirmTelCode && confirmEmailCode)"
      >
        Далее
      </button>
    </template>
    <template v-slot:button-prev>
      <button class="v-button" @click="prev">Назад</button>
    </template>

    <template v-slot:title> Пятый шаг </template>

    <template v-slot:col1-content>
      <tit-h3 class="mb-md-2"> Подтвердите номер мобильного телефона </tit-h3>
      <v-text class="mb-0 fz-14-12 text-md-opacity">
        SMS-код для подтверждения Вашего мобильного телефонабыл направлен на
        указанный Вами номер:
      </v-text>

      <div>
        <!-- ИНПУТ ДЛЯ ИЗМЕНИНИЯ ТЕЛЕФОНА -->
        <v-input
          class="update-input col-6 col-lg-7 text-md-opacity mb-1"
          value="+7 (916) 321-45-12"
          :disabled="!upadateTelInput"
          ref="updateTel"
        >
        </v-input>
        <button
          class="v-link d-inline-block col-6 col-lg-5 text-end update-info"
          @click="upadateTelInput = upadateTelInput ? false : true"
        >
          <span v-if="!upadateTelInput">Изменить</span>
          <span v-else>Сохранить</span>
          телефон
        </button>
      </div>
      <b-row class="m-0">
        <v-input
          placeholder="Ввести SMS-код"
          class="col-6 col-lg-7 input-confirmation"
          v-model="telInut"
          ref="telInput"
          :disabled="confirmTelCode"
          @input="trackTelInput"
          v-mask="codeMask"
        >
        </v-input>
        <div class="col-6 col-lg-5 d-flex justify-content-end p-0">
          <button
            class="v-button_gr v-button col-md-11 col-10 confirmation-btn gray"
            :disabled="disabledTelBtn || confirmTelCode"
            @click="confirmTelCode = true"
          >
            <span v-if="confirmTelCode">Подтверждено</span>
            <span v-else-if="!disabledTelBtn">Подтверждаю</span>
            <span v-else>Подтвердить</span>
          </button>
        </div>
      </b-row>
      <v-text class="mb-0 text-md-opacity">
        Выслать новый SMS-код через:
      </v-text>

      <div>
        <v-text v-if="telTimer" class="fw-bold m-0 step__timer"
          >{{ telTimer }} секунд...</v-text
        >

        <button
          v-else
          class="v-link text-start send-code"
          :disabled="upadateTelInput || confirmTelCode"
          @click="sendTelCode"
        >
          Отправить код повторно
        </button>
      </div>
    </template>

    <template v-slot:col2-content>
      <tit-h3 class="mb-md-2"> Подтвердите E-mail адрес </tit-h3>
      <v-text class="mb-0 fz-14-12 text-md-opacity">
        Email-код для подтверждения Вашей электронной почтыбыл направлен на
        указанный Вами E-mail адрес:
      </v-text>

      <div>
        <!-- ИНПУТ ДЛЯ ИЗМЕНИНИЯ EMAIL -->
        <v-input
          class="update-input col-6 col-lg-7 text-md-opacity mb-1"
          value="panov.ivan@mail.ru"
          :disabled="!upadateEmailInput"
          ref="updateTel"
        >
        </v-input>
        <button
          class="v-link d-inline-block col-6 col-lg-5 text-end update-info"
          @click="upadateEmailInput = upadateEmailInput ? false : true"
        >
          <span v-if="!upadateEmailInput">Изменить</span>
          <span v-else>Сохранить</span>
          почту
        </button>
      </div>
      <b-row class="m-0">
        <v-input
          placeholder="Ввести Email-код"
          class="col-6 col-lg-7 input-confirmation"
          v-model="emailInput"
          ref="emailInput"
          :disabled="confirmEmailCode"
          @input="trackEamilInput"
          v-mask="codeMask"
        >
        </v-input>
        <div class="col-6 col-lg-5 d-flex justify-content-end p-0">
          <button
            class="v-button_gr v-button col-md-11 col-10 confirmation-btn gray"
            :disabled="disabledEmailBtn || confirmEmailCode"
            @click="confirmEmailCode = true"
          >
            <span v-if="confirmEmailCode">Подтверждено</span>
            <span v-else-if="!disabledEmailBtn">Подтверждаю</span>
            <span v-else>Подтвердить</span>
          </button>
        </div>
      </b-row>
      <v-text class="mb-0 text-md-opacity">
        Выслать новый Email-код через:
      </v-text>

      <div>
        <v-text v-if="emailTimer" class="fw-bold m-0 step__timer"
          >{{ emailTimer }} секунд...</v-text
        >

        <button
          v-else
          class="v-link text-start send-code"
          @click="sendEmailCode"
          :disabled="upadateEmailInput || confirmEmailCode"
        >
          Отправить код повторно
        </button>
      </div>
    </template>
  </step-50-50>
</template>

<script>
export default {
  data() {
    return {
      upadateTelInput: false,
      upadateEmailInput: false,
      pageWidth: window.innerWidth,

      againTelCode: false,
      againEmailCode: false,

      disabledTelBtn: true,
      disabledEmailBtn: true,

      confirmTelCode: false,
      confirmEmailCode: false,

      telCode: "1234",
      telInut: "",

      emailCode: "1234",
      emailInput: "",

      codeMask: "####",

      telTimer: 3,
      emailTimer: 3,
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
    startEmailTimer() {
      let timer = setInterval(() => {
        if (this.emailTimer > 0) {
          this.emailTimer--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
    sendTelCode() {
      this.againTelCode = true;
      this.telTimer = 3;
      this.startTelTimer();

      // отправляем код и присваиваем его в переменную telCode
    },
    sendEmailCode() {
      this.againEmailCode = true;
      this.emailTimer = 3;
      this.startEmailTimer();

      // отправляем код и присваиваем его в переменную emailCode
    },
    trackTelInput() {
      const input = this.$refs.telInput.$el;
      if (this.telInut.length === this.codeMask.length) {
        if (this.telInut === this.telCode) {
          this.disabledTelBtn = false;
          input.classList.remove("unvalide");
          input.placeholder = "Ввести SMS-код";
        } else {
          this.disabledTelBtn = true;
          this.telInut = "";
          input.classList.add("unvalide");
          input.blur();
          input.placeholder = "Введен некорректный SMS-код";
        }
      } else {
        this.disabledTelBtn = true;
      }
    },
    trackEamilInput() {
      const input = this.$refs.emailInput.$el;
      if (this.emailInput.length === this.codeMask.length) {
        if (this.emailInput === this.telCode) {
          this.disabledEmailBtn = false;
          input.classList.remove("unvalide");
          input.placeholder = "Ввести Email-код";
        } else {
          this.disabledEmailBtn = true;
          this.emailInput = "";
          input.classList.add("unvalide");
          input.blur();
          input.placeholder = "Введен некорректный Email-код";
        }
      } else {
        this.disabledEmailBtn = true;
      }
    },
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
  mounted() {
    this.startTelTimer();
    this.startEmailTimer();
  },
};
</script>

<style lang="scss">
.update-info,
.send-code {
  font-size: 14px;
  text-decoration: underline !important;
  @media (max-width: 567px) {
    font-size: 12px;
  }
}
.update-info {
  color: rgba(0, 135, 212, 0.8) !important;
  &:hover {
    color: rgb(0, 127, 201) !important;
  }
  @media (max-width: 768px) {
    color: #c4c4c4 !important;
    &:hover {
      color: #9e9b9b !important;
    }
  }
}
.send-code {
  color: #c4c4c4 !important;
  &:disabled:hover {
    color: #c4c4c4 !important;
  }
  &:hover {
    color: #9e9b9b !important;
  }
  @media (max-width: 768px) {
    color: rgba(0, 135, 212, 0.8) !important;
    &:hover {
      color: rgb(0, 127, 201) !important;
    }
    &:disabled:hover {
      color: rgba(0, 135, 212, 0.8) !important;
    }
  }
}
.update-info {
  @media (max-width: 768px) {
    color: rgba(0, 0, 0, 0.5) !important;
  }
}
.step__timer {
  @media (max-width: 768px) {
    color: rgba(0, 0, 0, 0.5) !important;
  }
}

.step-5 {
  .form-reg__col {
    @media (max-width: 768px) {
      padding-bottom: 30px !important;
    }
  }

  .tit-h3 {
    margin: 0;
  }
  .confirmation-btn {
    padding: 0;
  }
  .update-input:disabled {
    opacity: 1;
    background: none;
    border: solid 1px rgba(0, 0, 0, 0);
    font-size: 14px;
    line-height: 18px;
    padding-left: 0;
    font-weight: 700;
    font-family: "Inter";
    color: rgba(0, 0, 0, 0.7);

    @media (max-width: 567px) {
      font-size: 12px;
    }
  }
  .update-input {
    transition: 0.1s;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    font-family: "Inter";
    color: rgba(0, 0, 0, 0.7);
    @media (max-width: 567px) {
      font-size: 12px;
    }
  }
  .input-confirmation.unvalide {
    background: #f6f8f9;
    border: 1px solid #c4c4c4;
  }

  .input-confirmation.unvalide::placeholder {
    color: #de231b;
    font-weight: 500;
  }
}
</style>