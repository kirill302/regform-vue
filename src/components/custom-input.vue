<template>
  <label class="custom">
    <slot></slot>
    <span class="custom__input"></span>
  </label>
</template>

<script>
export default {
  type: String,
  name: 'custom-input'
};
</script>

<style lang="scss">
// checkbox style
.custom {
  padding-top: 4px;
  width: 20px;
  min-height: 20px;
  position: relative;
}
input[type="checkbox"] {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="checkbox"].unvalide + .custom__input {
  background-image: url("~@/assets/images/check-unvalide.svg");
}
input[type="checkbox"] + .custom__input {
  @media (max-width:567px) {
    min-width: 15px;
    min-height: 15px;
    border-radius: 2px;
    top: 7px;
  }
  position: absolute;
  top: 5px;
  left: 0;
  min-width: 20px;
  min-height: 20px;
  background-image: url("~@/assets/images/check-default.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  border-radius: 4px;
}
input[type="checkbox"]:checked + .custom__input {
  background-image: url("~@/assets/images/check-checked.svg");
}
input[type="checkbox"]:checked:focus + .custom__input {
  background-image: url("~@/assets/images/check-checked.svg");
}
input[type="checkbox"]:disabled + .custom__input {
  opacity: 0.5;
}
input[type="checkbox"]:checked:disabled + .custom__input {
  background-image: url("~@/assets/images/check-checked.svg");
  opacity: 0.5;
}

// radio style

input[type="radio"] {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="radio"] + .custom__input {
  @media (max-width:567px) {
    min-width: 15px;
    min-height: 15px;
    border-radius: 2px;
    top: 8px;
  }
  position: absolute;
  top: 5px;
  left: 0;
  min-width: 20px;
  min-height: 20px;
  background-image: url("~@/assets/images/radio-default.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 50%;
}
input[type="radio"].unvalide + .custom__input {
  background-image: url("~@/assets/images/radio-unvalide.svg");
}
input[type="radio"]:checked + .custom__input {
  background-image: url("~@/assets/images/radio-cheсked.svg");
}
input[type="radio"]:checked:focus + .custom__input {
  background-image: url("~@/assets/images/radio-cheсked.svg");
}
.radio__input:disabled + .radio__btn {
  opacity: 0.5;
}
input[type="radio"]:checked:disabled + .custom__input {
  background-image: url("~@/assets/images/radio-cheсked.svg");
  opacity: 0.5;
}
</style>