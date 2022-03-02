<template>
  <div
    class="v-select"
    :class="{ active: selectVisible }"
    @blur="selectVisible = false"
  >
    <div class="v-select__arr" @click="visbleSelect">
      <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3987 10.4018L19.8334 0.96715C20.0555 0.74501 20.0555 0.388746 19.8334 0.166606C19.6113 -0.0555352 19.255 -0.0555352 19.0328 0.166606L10.0005 9.19893L0.968198 0.166606C0.746058 -0.0555352 0.389794 -0.0555352 0.167653 0.166606C0.0586786 0.27558 -1.06388e-07 0.422277 -1.06388e-07 0.564782C-1.06388e-07 0.707288 0.0544872 0.853984 0.167653 0.962959L9.60235 10.3977C9.8203 10.6198 10.1808 10.6198 10.3987 10.4018Z"
          fill="#0087D4"
        />
      </svg>
    </div>
    <div class="v-select__wrapp">
      <div class="v-select__value" @click="visbleSelect">
        {{ value }}
      </div>
    </div>

    <transition name="fade">
      <div class="v-select__list" v-show="selectVisible">
        <div
          class="v-select__item"
          v-for="option in options"
          :key="option.id"
          :data-id="option.id"
          @click="setValue"
        >
          {{ option.text }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: Array,
  },
  data() {
    return {
      value: `—`,
      selectVisible: false,
    };
  },
  methods: {
    visbleSelect() {
      this.selectVisible = this.selectVisible ? false : true;
    },
    setValue(e) {
      const id = e.target.getAttribute("data-id");
      this.value = this.options[id].text;
      this.selectVisible = false;
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.v-select {
  max-height: 100%;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  background: #f6f8f9;
  user-select: none;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-family: "Inter";

  border: 1px solid #c4c4c4;

  &__arr {
    // content: "";
    display: block;
    position: absolute;
    right: 8px;

    top: 50%;
    transform: translateY(-50%);
    transition: 0.1s;
    width: 25px;

    svg {
      width: 100%;
      height: 100%;
      width: 20px;
      height: 10px;
      @media (max-width: 567px) {
        width: 13px;
        height: 8px;
      }
    }
    @media (max-width: 567px) {
      width: 13px;
      height: 8px;
      top: 38%;
    }
  }

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
    max-width: 100%;
    overflow: hidden;
    padding: 10px 20px;
    position: relative;

    @media (max-width: 567px) {
      padding: 8px 10px;
    }
    @media (max-width: 380px) {
      padding: 5px 8px;
    }
  }
  &__item:hover {
    background: #0087d4;
    color: #fff;
  }

  @media (max-width: 568px) {
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 10px;
  }
}
.v-select__value {
  padding: 10px 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: 568px) {
    padding: 7px 3px 8px 8px;
  }
  @media (max-width: 380px) {
    padding: 7px 3px 8px 5px;
  }
}
.v-select.active {
  .v-select__arr {
    transform: rotate(-180deg);
    top: 25%;
    @media (max-width: 567px) {
      top: 50%;
    }
  }
}
.v-select:hover {
  border-color: #888;
}
.v-select:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.v-select.unvalide {
  border-color: #de231b;
  .v-select__arr svg path {
    fill: #de231b;
  }
  .v-select__value {
    color: #de231b;
  }
}
</style>