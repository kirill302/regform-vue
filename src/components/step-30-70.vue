<template>
  <div class="step">
    <b-form-group>
      <div class="d-flex justify-content-between align-items-center step__row">
        <tit-h2 class="step__title">
          <!-- ------------------------ -->
          <slot name="title"></slot>
          <!-- ------------------------ -->
        </tit-h2>
        <div
          :class="{
            'justify-content-between': !!stepNum && !!amountSteps,
            'justify-content-end': !stepNum,
          }"
          class="col-md-6 step__header align-items-center"
        >
          <tit-h2 v-if="this.stepNum && this.amountSteps">
            <span class="fw-bold">{{ this.stepNum }}</span
            > / <span class="fw-normal">{{ this.amountSteps }}</span>
          </tit-h2>
          <div class="d-flex align-items-center gap-4">
            <slot name="button-prev"> </slot>
            <slot name="button-next"> </slot>
          </div>
        </div>
      </div>
      <div>
        <b-row class="justify-content-between form-reg__row">
          <b-col class="form-reg__col from-reg__col1 col-md-4 col-12">
            <!-- ------------------------ -->
            <slot name="col1-content"></slot>
            <!-- ------------------------ -->
          </b-col>
          <b-col class="form-reg__col from-reg__col2">
            <!-- ------------------------ -->
            <slot name="col2-content"></slot>
            <!-- ------------------------ -->
          </b-col>
        </b-row>
      </div>
      <b-row class="bottom__row m-0 justify-content-end">
        <div
          class="m-0 step__footer"
          :class="{
            'justify-content-between': !!stepNum && !!amountSteps,
            'justify-content-end': !stepNum,
          }"
        >
          <!-- ------------------------ -->
          <div class="">
            <slot name="button-prev"> </slot>
          </div>

          <!-- ------------------------ -->
          <div
            v-if="this.stepNum && this.amountSteps"
            class="tit-h2 d-flex align-items-center text-md-opacity"

          >
            <span class="fw-bold">{{ this.stepNum }}</span
            >&zwnj; / &zwnj;<span class="fw-normal">{{ this.amountSteps }}</span>
          </div>
          <!-- ------------------------ -->
          <div>
            <slot name="button-next"> </slot>
          </div>

          <!-- ------------------------ -->
        </div>
      </b-row>
    </b-form-group>
  </div>
</template>

<script>
import TitH2 from "@/components/tit-h2.vue";
export default {
  name: "step-30-70",
  props: {
    stepNum: Number,
    amountSteps: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TitH2,
  },
  data() {
    return {
      pageWidth: window.innerWidth,
    };
  },
};
</script>

<style lang="scss">
@media (min-width: 768px) {
  .step__title {
    margin-left: 40px;
  }
}
@media (max-width: 992px) {
  .step__title {
    margin-left: 20px;
  }
}
.step__footer {
  display: none;
}
.step__header {
  display: flex;
}
@media (max-width: 768px) {
  .step__header {
    display: none;
  }
  .step__footer {
    display: flex;
  }
}
.form-reg__col {
  background: #fff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px !important;
  @media (min-width: 992px) {
    gap: 20px;
    min-height: 400px;
  }
  @media (max-width: 992px) {
    padding: 20px !important;
    gap: 10px;
  }
  @media (max-width: 768px) {
    min-height: none;
  }
}
.form-reg__row {
  gap: 20px;
  margin: 0 !important;

  @media (max-width: 768px) {
    margin-bottom: 20px !important;
  }
}
</style>