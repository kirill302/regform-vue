<template>
  <a class="v-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'v-link'
}
</script>

<style lang="scss">
.v-link{
  color: rgba(0, 135, 212, 0.8);
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  &:disabled {
    color: #C4C4C4;
    cursor: default;
  }

  @media (max-width:768px) {
    text-decoration: none;
  }
  @media (max-width:567px) {
    font-size: 12px;
  }
  &:hover {
    color: rgb(0, 127, 201);
  }
}
</style>