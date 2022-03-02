<template>
  <h2 class="tit-h2">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'tit-h2'
}
</script>

<style lang="scss">
.tit-h2 {
  font-family: "Oswald";
  font-weight: 700;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.7);

  @media (min-width: 992px) {
    font-size: 40px;
  }
  @media (max-width: 992px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
}
</style>