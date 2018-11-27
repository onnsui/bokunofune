<template>
  <footer class="footer__wrapper">
    <div class="footer__content">
      <div class="footer__content-left">
        <span>© 2018 bokunofune</span>
        <span>site by ryo sato</span>
      </div>
      <div class="footer__content-right">
        a
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
  &__content {
    display: flex;
  }
  &__content-left {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 769px) {
}
@media (max-width: 768px) {
}
</style>
