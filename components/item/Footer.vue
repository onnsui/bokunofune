<template>
  <footer class="footer__wrapper">
    <div class="footer__content">
      <div class="footer__content-left">
        <span>© 2018 bokunofune</span>
        <span>site by ryo sato</span>
      </div>
      <div class="footer__content-right">
        <img src="~/static/img/twitter-icon.svg">
        <img src="~/static/img/youtube-icon.svg">
        <img src="~/static/img/instagram-icon.svg">
        <img src="~/static/img/soundcloud-icon.svg">
        <img src="~/static/img/apple-icon.svg">
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
footer {
  background-color: #212121;
  color: #fff;
}
.footer {
  &__wrapper {
    /*height: 101px;*/
  }
  &__content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 663px;
    justify-content: space-between;
  }
  &__content-left {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    justify-content: space-between;
    & span:first-child {
      margin-bottom: 20px;
    }
  }
  &__content-right {
    display: flex;
    img {
      fill: #fff;
      width: 28px;
    }
  }
}
@media (min-width: 769px) {
}
@media (max-width: 768px) {
}
</style>
