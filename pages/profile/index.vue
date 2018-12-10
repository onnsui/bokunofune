<template>
  <div class="container">
    <div class="profile">
      <div class="profile__image">
        <img src="../../static/img/profile.svg">
      </div>
      <div class="profile__textbox">
        <div class="profile__text">
          2005年に活動を開始し、2007年にメジャーデビュー。
          <br><br>
          日本の文学性を巧みに内包させる歌詞やフォーキーなメロディ、ロックバンドフォーマットからクラブミュージックアプローチまでこなす変容性。様々な表現方法を持つ5人組のバンド。全国ツアーは常にチケットソールドアウト、出演するほとんどの大型野外フェスではヘッドライナーで登場するなど、現在の音楽シーンを代表するロックバンドである。
        </div>
        <div class="profile__order"><span>L > R</span></div>
        <div class="profile__member">
          <div class="profile__member-list">
            <div class="profile__member-list-left">Megumi Sugawara</div>
            <div class="profile__member-list-right">(Gt & Vo)</div>
          </div>
          <div class="profile__member-list">
            <div class="profile__member-list-left">Rio Kato</div>
            <div class="profile__member-list-right">(Gt & Vo)</div>
          </div>
          <div class="profile__member-list">
            <div class="profile__member-list-left">Yusuke Hoshino</div>
            <div class="profile__member-list-right">(Ba)</div>
          </div>
          <div class="profile__member-list">
            <div class="profile__member-list-left">Ryo Sato</div>
            <div class="profile__member-list-right">(Dr)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .profile {
    padding: 35px 0;
    display: flex;
    &__image {
      margin-right: 25px;
      width: 50%;
      img {
        width: 100%;
        max-width: 100%;
        height: auto;
        /*width: 480px;*/
        /*height: 325px;*/
      }
    }
    &__textbox {
      width: 50%;
    }
    &__text {
      margin-bottom: 30px;
    }
    &__order {
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 5px;
    }
    &__member-list {
      display: flex;
      font-size: 17px;
    }
    &__member-list-left {
      width: 150px;
      font-weight: bold;
      margin-right: 40px;
    }
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  .profile {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    &__image {
      width: 100%;
      padding-top: 20px;
      margin-bottom: 25px;
      img {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }
    &__textbox {
      display: flex;
      flex-direction: column;
    }
    &__text {
      order: 3;
    }
    &__order {
      order: 1;
      width: 80%;
      margin: 0 auto;
      font-weight: bold;
    }
    &__member {
      order: 2;
      width: 80%;
      margin: 0 auto 25px auto;
    }
    &__member-list {
      display: flex;
    }
    &__member-list-left {
      width: 145px;
      margin-right: 20px;
      font-weight: bold;
    }
  }
}
</style>
