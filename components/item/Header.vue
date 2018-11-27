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
      <div class="header__nav">
        <div class="header__nav-logo"><img src="http://placehold.jp/160x40.png"></div>
        <div id="nav-drawer">
          <input
            id="nav-input"
            type="checkbox"
            class="nav-unshown">
          <label
            id="nav-open"
            for="nav-input"><span/></label>
          <label
            id="nav-close"
            class="nav-unshown"
            for="nav-input"/>
          <div id="nav-content">
            <ul>
              <li><img src="~/static/img/logo_fune.png"></li>
              <li>LIVE</li>
              <li>DISCO</li>
              <li>PROFILE</li>
              <li>MOVIE</li>
              <li>GALLERY</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
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
@media (min-width: 769px) {
  .container {
    max-width: 1080px;
    margin: 0 auto;
  }
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
    &__nav {
      display: none;
    }
  }
}
@media (max-width: 768px) {
  .header {
    &__wrapper {
      padding: 17px;
      border-bottom: 1px solid #979797;
    }
    &__content {
      & ul {
        display: none;
      }
    }
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  #nav-drawer {
    position: relative;
  }

  /*チェックボックス等は非表示に*/
  .nav-unshown {
    display: none;
  }

  /*アイコンのスペース*/
  #nav-open {
    display: inline-block;
    width: 30px;
    height: 22px;
    vertical-align: middle;
  }

  /*ハンバーガーアイコンをCSSだけで表現*/
  #nav-open span,
  #nav-open span:before,
  #nav-open span:after {
    position: absolute;
    height: 3px; /*線の太さ*/
    width: 25px; /*長さ*/
    border-radius: 3px;
    background: #555;
    display: block;
    content: '';
    cursor: pointer;
  }
  #nav-open span:before {
    bottom: -8px;
  }
  #nav-open span:after {
    bottom: -16px;
  }

  /*閉じる用の薄黒カバー*/
  #nav-close {
    display: none; /*はじめは隠しておく*/
    position: fixed;
    z-index: 99;
    top: 0; /*全体に広がるように*/
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  /*中身*/
  #nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999; /*最前面に*/
    padding: 30px;
    width: 50%; /*右側に隙間を作る（閉じるカバーを表示）*/
    max-width: 330px; /*最大幅（調整してください）*/
    height: 100%;
    background: #fff; /*背景色*/
    transition: 0.3s ease-in-out; /*滑らかに表示*/
    -webkit-transform: translateX(150%);
    transform: translateX(150%); /*左に隠しておく*/
    & ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    & li {
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 20px;
      & img {
        width: 108px;
      }
    }
  }

  /*チェックが入ったらもろもろ表示*/
  #nav-input:checked ~ #nav-close {
    display: block; /*カバーを表示*/
    opacity: 0.5;
  }

  #nav-input:checked ~ #nav-content {
    -webkit-transform: translateX(0%);
    transform: translateX(0%); /*中身を表示（右へスライド）*/
    box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
  }
}
</style>
