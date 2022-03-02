<template>
  <input class="form-reg__input" :value="value" @input="apdateInput"/>
</template>

<script>
export default {
  name: 'v-input',
  props: {
    value: {
      type: String,
    }
  },
  methods: {
    apdateInput(e) {
      this.$emit('input', e.target.value)
    }
  }
};
</script>

<style lang="scss">

.form-reg__input {
  padding: 10px 20px 9px 20px;
  background: #f6f8f9;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;

  @media (max-width:568px) {
    padding: 5px 10px 6px 10px;
    font-size: 12px;
  }
  &:focus {
    outline: 1.5px solid rgba(29, 133, 201, 0.8);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  // unvalide
  &.unvalide {
    border: solid 1px #de231b;
    color: #de231b;
  }
  &.unvalide:focus {
    outline: solid 1px #de231b;
  }
  &:disabled {
    opacity: .6;
  }
}
</style>