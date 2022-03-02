<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "v-button",
};
</script>

<style lang="scss">
.v-button {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  display: inline-block;
  padding: 10px 40px;
  font-size: 14px;
  text-align: center;
  border: none;
  transition: 0.1s;

  background: #ffffff;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 567px) {
    padding: 8px 20px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  }
  &.gray {
    background: #f6f8f9;
  }
}
.v-button:hover {
  background: #0087d4;
  color: #fff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}

.v-button:disabled {
  background: #f6f8f9;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>