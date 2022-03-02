<template>
  <div class="modal-bg" v-show="this.visible">
    <div class="v-modal">
      <div class="v-modal__close" @click="modalHide">
        <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line
            y1="-0.5"
            x2="35.3553"
            y2="-0.5"
            transform="matrix(0.707106 0.707107 -0.707106 0.707107 0 1)"
            stroke="#C4C4C4"
          />
          <line
            y1="-0.5"
            x2="35.3553"
            y2="-0.5"
            transform="matrix(-0.707106 0.707107 -0.707106 -0.707107 25 1)"
            stroke="#C4C4C4"
          />
        </svg>
      </div>

      <h2 class="v-modal__title tit-h2 mb-4"><slot name="title"></slot></h2>

      <p class="v-modal__text">
        <slot name="text"></slot>
      </p>

      <div class="v-modal-footer d-flex">
        <span class="v-modal-footer__txt me-3">
          Бесплатный звонок по России:
        </span>
        <span class="v-modal-footer__num">8 (800) 700-83-83</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    modalHide() {
      this.$emit("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  z-index: 12009;
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
}
.v-modal {
  position: relative;
  @media (min-width: 768px) {
    max-width: 700px;
    width: 100%;
    border: 13px solid #0087d4;
    padding: 80px 30px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    border: 4px solid #0087d4;
    padding: 30px 30px 55px 30px;
  }
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__close {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 35px;
    right: 35px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
      top: 16px;
      right: 16px;
    }
  }
  &__close:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.6));
  }
  &__title {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 16px;
      font-family: "Inter";
    }
  }

  &__text {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;

    @media (max-width: 567px) {
      font-size: 12px;
    }
  }
}
.v-modal-footer {
  @media (min-width: 768px) {
    position: absolute;
    bottom: 35px;
    right: 35px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    background: #0087d4;
    color: #fff;
    margin: 0 -30px;
    padding: 30px;
    flex-direction: column;
  }

  &__txt {
    font-weight: 700;
    font-size: 14px;
    @media (max-width: 567px) {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }

  &__num {
    font-family: "Oswald";
    color: rgba(0, 135, 212, 0.8);
    font-size: 24px;
    font-weight: bold;
    display: flex;

    @media (max-width: 768px) {
      color: #fff;
    }
  }
}
</style>