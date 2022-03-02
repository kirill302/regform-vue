<template>
  <h3 class="tit-h3">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'tit-h3'
}
</script>

<style lang="scss">
.tit-h3 {
  font-family: "Oswald";
  font-weight: 700;

  color: rgba(0, 0, 0, 0.7);

  margin-bottom: 20px;

  @media (min-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 992px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-family: "Inter";
    font-size: 16px;
    font-weight: 500;
  }
}

</style>