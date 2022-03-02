<template>
  <!-- ознакомтесь С README.md (z xt phz tt gbcfk 3 xfcf) -->
  <div id="app">
    <div class="wrapper">
      <form-header></form-header>
      <b-container class="steps-container">
          <step-0 v-show="currentStep === 0" @next="currentStep++"></step-0>
          <step-1
            v-show="currentStep === 1"
            @next="currentStep++"
            @prev="currentStep--"
          ></step-1>
          <step-2
            v-show="currentStep === 2"
            @next="currentStep++"
            @prev="currentStep--"
          ></step-2>
          <step-3
            v-show="currentStep === 3"
            @next="currentStep++"
            @prev="currentStep--"
          ></step-3>
          <step-4
            v-show="currentStep === 4"
            @next="nextStep5"
            @prev="currentStep--"
          ></step-4>
          <step-5
            v-if="step5"
            v-show="currentStep === 5"
            @next="currentStep++"
            @prev="currentStep--"
          ></step-5>
          <step-6
            v-show="currentStep === 6"
            @next="currentStep++"
            @prev="currentStep--"
          ></step-6>
          <step-7
            v-show="currentStep === 7"
            @next="currentStep++"
            @prev="currentStep--"
          ></step-7>
          <final v-show="currentStep === 8"></final>
      </b-container>

      <form-footer></form-footer>
    </div>
  </div>
</template>

<script>
// шрифты
import "@/assets/fonts.css";

import FormHeader from "./components/form-header.vue";
import FormFooter from "./components/form-footer.vue";
import Step0 from "./steps/step0.vue";
import Step1 from "./steps/step1.vue";
import Step2 from "./steps/step2.vue";
import Step3 from "./steps/step3.vue";
import Step4 from "./steps/step4.vue";
import Step5 from "./steps/step5.vue";
import Step6 from "./steps/step6.vue";
import Final from "./steps/final.vue";
import Step7 from "./steps/step7.vue";

export default {
  components: {
    FormHeader,
    FormFooter,
    Step0,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Final,
    Step7,
  },
  data() {
    return {
      currentStep: 0,
      step5: false,
    };
  },
  methods: {
    nextStep5() {
      this.currentStep++;
      this.step5 = true;
    },
  },
};
</script>

<style lang="scss">
.steps-container {
  padding: 30px 0;
}
// мои дополнения к бутстрапу
.text-opacity {
  color: rgba(0, 0, 0, 0.5) !important;
}
.fz-md-12px {
  @media (max-width: 768px) {
    font-size: 12px;
  }
}
.text-red {
  color: #DE231B !important;
  * {
    color: #DE231B !important;
  }
  
}
.fw-400 {
  font-weight: 400 !important;
}
.me-10px {
  margin-right: 10px;
}
.lh-18px {
  line-height: 18px !important;
}
.mb-md-20px {
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
}
.mb-25-15px {
  margin-bottom: 25px !important;
  @media (max-width: 768px) {
    margin-bottom: 15px !important;
  }
}
.lh-28-18px {
  line-height: 28px !important;
  @media (max-width: 768px) {
    line-height: 18px !important;
  }
}

@media (max-width: 768px) {
  .text-md-opacity {
    color: rgba(0, 0, 0, 0.5);
  }
}
.fz-14-12 {
  @media (min-width: 768px) {
    font-size: 14px !important;
  }
  @media (max-width: 768px) {
    font-size: 12px !important;
  }
}
.fz-14-10 {
  @media (min-width: 768px) {
    font-size: 14px !important;
  }
  @media (max-width: 768px) {
    font-size: 10px !important;
  }
}
.mb-30-20px {
  margin-bottom: 30px !important;
  @media (max-width: 768px) {
    margin-bottom: 20px !important;
  }
}
.mb-30-20-10px {
  margin-bottom: 30px !important;
  @media (max-width: 768px) {
    margin-bottom: 20px !important;
  }
  @media (max-width: 567px) {
    margin-bottom: 10px !important;
  }
}
.mb-40-30px {
  margin-bottom: 40px !important;
  @media (max-width: 768px) {
    margin-bottom: 30px !important;
  }
}
.mb-30-15px {
  margin-bottom: 30px !important;
  @media (max-width: 768px) {
    margin-bottom: 15px !important;
  }
}
.pt-2px {
  padding-top: 2px;
}
.me-5px {
  margin-right: 5px !important;
}

.wrapper {
  background: #EBEBEB ;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.order-6 {
  order: 6 !important;
}
.order-7 {
  order: 7 !important;
}
@media (min-width: 768px) {
  .order-md-6 {
    order: 6 !important;
  }
  .order-md-7 {
    order: 7 !important;
  }
}

.tit-h1 {
  font-family: "Oswald";
  font-weight: 300;
}
.btn-link {
  color: #1d85c9 !important;

  @media (max-width: 567px) {
    text-decoration: none !important;
    cursor: pointer !important;
  }
}
.form-reg {
  @media (min-width: 768px) {
    &__disabled {
      opacity: 0.6;
    }
  }

  padding: 50px 0 80px 0;
  @media (max-width: 567px) {
    padding: 30px 15px 80px 15px;
  }
}
.input-wrapper {
  input {
    width: 100%;
  }
}
.step__row {
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
}
.btn-link {
  display: inline !important;
}
.form-inputs__row {
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
}
</style>
