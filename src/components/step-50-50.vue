<template>
  <div class="step">
    <b-form-group>
      <div class="d-flex justify-content-between align-items-center step__row">
        <tit-h2 class=" step__title">
          <!-- ----------------------- -->
          <slot name="title"></slot>
          <!-- ------------------------ -->
        </tit-h2>
        <div
          class="col-md-6 step__header"
          :class="{
            'justify-content-between': !!stepNum && !!amountSteps,
            'justify-content-end': !stepNum,
          }"
        >
          <tit-h2 v-if="this.stepNum && this.amountSteps" class="align-items-center">
            <span class="fw-bold">{{ this.stepNum }}</span
            > / <span class="fw-normal">{{ this.amountSteps }}</span>
          </tit-h2>
          <div class="d-flex align-items-center gap-4">
            <slot name="button-prev"> </slot>
            <slot name="button-next"> </slot>
          </div>
        </div>
      </div>
      <b-row class="justify-content-between  form-reg__row ">
        <b-col class="form-reg__col from-reg__col1 col-md-6 col-12 d-flex flex-column">
          
          <!-- ------------------------ -->
          <slot name="col1-content"></slot>
          <!-- ------------------------ -->
        </b-col>
        <b-col class="form-reg__col from-reg__col2 d-flex flex-column ">
          
          <!-- ------------------------ -->
          <slot name="col2-content"></slot>
          <!-- ------------------------ -->
        </b-col>
      </b-row>
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
  name: 'step-50-50',
  props: {
    stepNum: Number,
    amountSteps: Number,
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
</style>