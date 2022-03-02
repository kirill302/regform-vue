<template>
  <header class="header">
    <b-container class="d-flex justify-content-between align-items-end">
      <div class="logo">
        <img src="~@/assets/images/logo.svg" alt="" />
      </div>

      <h1 class="tit-h1">Индивидуальный пенсионный план</h1>

      <div class="d-flex justify-content-center flex-column">
        <div class="header__num text-end">8 (800) 700-83-83</div>
        <div class="text-end w-100 header__text">
          звонок по России бесплатный
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 30px 0;
  background: #0087d4;
  font-family: "Inter";
  color: #fff;

  @media (min-width: 992px) {
    .logo {
      margin-left: 40px !important;
    }
  }
  @media (min-width: 768px) {
    .logo {
      margin-left: 20px;
    }
  }
  @media (max-width:768px) {
    padding: 20px;
    .logo {
      width: 40%;
    }
    .logo img{
      width: 82%;
      min-width: 103px;
      height: auto;
    }
  }
  @media (max-width: 567px) {
    font-size: 9px;
  }

  .tit-h1 {
    @media (max-width: 992px) {
      display: none;
    }
  }
  @media (max-width: 567px) {
    padding: 13px 20px;
  }
}
.header__num {
  margin: 0rem !important;
  font-family: "Oswald";
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 15px;
    font-family: "inter";
  }
  @media (max-width:567px) {
    font-weight: 300;
  }
}
.header__text {
  font-weight: 300;
  font-size: 12px;

  @media (max-width: 567px) {
    font-size: 9px;
    line-height: 8px;
  }
}
</style>