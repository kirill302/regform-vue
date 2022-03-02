<template>
  <p class="v-text">
    <slot>
      
    </slot>
  </p>
</template>

<script>
export default {
  name: 'v-text'
}
</script>

<style lang="scss">
.v-text {
  font-family: "Inter";
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  @media (max-width: 576px) {
    font-size: 12px;
    text-align: justify;
  }
}
</style>