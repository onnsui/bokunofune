<template>
  <header class="header__wrapper">
    <div class="container">
      <div class="header__content">
        <ul>
          <li>LIVE</li>
          <li>DISCO</li>
          <li>PROFILE</li>
          <li><img src="~/static/img/logo.png"></li>
          <li>MOVIE</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.header__wrapper {
  left: 0;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
}
.container {
  max-width: 1080px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .header {
    &__wrapper {
      padding: 20px;
      border-bottom: 1px solid #979797;
    }
    &__content {
      & ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      & img {
        width: 160px;
      }
      & li {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 768px) {
}
</style>
