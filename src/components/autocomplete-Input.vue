<template>
  <div class="autocomplete" @click="cl">
    <input
      autocomplete="odfdfvppoklf"
      :placeholder="placeholder"
      :disabled="disabled"
      type="text"
      class="form-reg__input autocomplete__input"
      v-model="InputValue"
      @input="apdateInput"
      @blur="autocompleteHide"
      @focus="autocompleteVisible = true"
    />
    <div class="autocomplete__list" v-show="autocompleteVisible">
      <button
        class="autocomplete__item"
        v-for="autocompleteItem in completeArray"
        @click="InputValue = autocompleteItem"
        @focus="autocompleteVisible = true"
        :key="autocompleteItem"
      >
        {{ autocompleteItem }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "autocomplete-input",
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean,
    tabIndex: Number,
    autocompleteArray: Array,
  },
  data() {
    return {
      autocompleteVisible: false,
      InputValue: this.value ? this.value : "",
      completeArray: [],
    };
  },
  methods: {
    apdateInput(e) {
      let value = e.target.value.toLowerCase();
      this.completeArray = this.autocompleteArray.filter(
        (p) => p.indexOf(value) !== -1
      );
    },
    autocompleteHide() {
      setTimeout(() => {
        this.autocompleteVisible = false;
      }, 100);
    },
    cl() {
      console.log(this.value);
    }
  },
  mounted() {
    
    this.InputValue = this.value;
  },
  watch: {
    InputValue() {
      this.$emit("input", this.InputValue);
    },
  },
};
</script>

<style lang="scss">
.autocomplete.unvalide {
  &.unvalide {
    border: solid 1px #de231b;
    color: #de231b;
  }
  &.unvalide:focus {
    outline: solid 1px #de231b;
  }
}
.autocomplete {
  position: relative;

  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;

    display: flex;
    flex-direction: column;

    background-color: #f6f8f9;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
  }

  &__item {
    cursor: pointer;
    width: 100%;
    padding: 10px 20px;
    border: none;
    text-align: left;

    @media (max-width: 576px) {
      font-size: 12px;
      padding: 12px 8px;
    }
  }
  &__item:hover {
    background: #0087d4;
    color: #fff;
  }
}
</style>