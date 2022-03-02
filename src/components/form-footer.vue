<template>
  <footer class="footer">
    <b-container
      class="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap"
    >
      <div class="footer__right">
        <h2 class="tit-h3 m-0 mb-1">Сформируйте свой пенсионный капитал!</h2>
        <p class="footer__text">о Вашей пенсии позаботится АО «НПФ ГАЗФОНД» </p>
      </div>
      <div class="col-md-7 col-12">
        <p class="text-md-end footer__copy m-0 mb-1">&copy; 1994-2021 АО «НПФ ГАЗФОНД» </p>
        <p class="text-md-end footer__text _2">
          Лицензия №274/2 от 21.05.2004 выдана Министерством труда и социального развития.
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 20px;
  background: #1D85C9;
  font-family: "Inter";
  color: #fff;

  @media (min-width: 992px) {
    .footer__right {
      margin-left: 40px !important;
    }
  }
  @media (min-width: 768px) {
    .footer__right {
      margin-left: 20px;
    }
  }
  @media (max-width: 768px) {
    .footer__right {
      margin-left: 0;
      margin-bottom: 10px;
    }
    .tit-h3 {
      font-size: 14px;
    }
    .footer__text {
      font-size: 10px;
    }
    &__copy {
      font-size: 10px;
    }
  }
  &__text {
    font-size: 12px;
    font-weight: 300;
  }
  &__text._2 {
    font-size: 8px;
  }


  .tit-h3 {
    font-weight: 500;
    color: #fff;
  }
}
</style>