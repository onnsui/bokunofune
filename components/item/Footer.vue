<template>
  <footer class="footer__wrapper">
    <div class="footer__content">
      <div class="footer__content-left">
        <span>© 2018 bokunofune</span>
        <span class="sp">site by ryo sato</span>
      </div>
      <div class="footer__content-right">
        <ul class="sns-link">
          <li class="twitter">
            <a
              href="https://twitter.com/suihei_liebe"
              target="_blank">
              <img
                src="~/static/img/twitter-icon.svg">
            </a>
          </li>
          <li class="youtube">
            <a
              href="https://www.youtube.com/channel/UCIiOZl8y2BAzdx3T2GPwReg"
              target="_blank">
              <img
                src="~/static/img/youtube-icon.svg">
            </a>
          </li>
          <li class="instagram">
            <a
              href="https://www.instagram.com/_bokunofune/?hl=ja"
              target="_blank">
              <img
                src="~/static/img/instagram-icon.svg">
            </a>
          </li>
          <li class="soundcloud">
            <a
              href="https://soundcloud.com/bokunofune"
              target="_blank">
              <img
                src="~/static/img/soundcloud-icon.svg">
            </a>
          </li>
          <li class="apple">
            <a
              href="https://itunes.apple.com/jp/artist/bokunofune/1412576184"
              target="_blank">
              <img
                src="~/static/img/apple-icon.svg">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
li {
  list-style: none;
}
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
    width: 55%;
    img {
      fill: #fff;
      width: 50px;
      height: 50px;
      padding: 10px;
    }
  }
}
.sns-link {
  display: flex;
  justify-content: space-between;
  li {
    background-color: gray;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5);
    &:hover {
      border-radius: 100%;
    }
    border-radius: 100%;
  }
}
.twitter {
  &:hover {
    background-color: #55acee;
  }
}
.youtube {
  &:hover {
    background-color: #cd201f;
  }
}
.instagram {
  &:hover {
    background-image: linear-gradient(222deg, #3023ae, #c86dd7);
  }
}
.soundcloud {
  &:hover {
    background-color: #ff3a00;
  }
}
.apple {
  &:hover {
    background-image: linear-gradient(43deg, #ae2378, #53a0fd 48%, #b4ec51);
  }
}
@media (min-width: 769px) {
}
@media (max-width: 768px) {
  .sp {
    display: none;
  }
  ul {
    padding: 0;
  }
  .footer__content {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }
  .footer__content-left {
    margin: 20px 0 10px 0;
    padding: 0;
    text-align: center;
    & span:first-child {
      margin-bottom: 0;
    }
  }
  .footer__content-right {
    width: 100%;
    margin-bottom: 20px;
    img {
      fill: #fff;
      width: 30px;
      height: 30px;
      padding: 5px;
    }
  }
}
</style>
