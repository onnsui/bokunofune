<template>
  <div class="card">
    <nuxt-link
      :to="{ name: 'blog-slug', params: { slug: slug }}"
      class="card">
      <div class="card__image"><img src="http://placehold.jp/240x214.png"></div>
      <div class="card__contents">
        <div class="card__top">
          <span class="card__logo">LIVE</span>
          <span class="card__date">{{ date }}</span>
        </div>
        <div class="card__middle">
          <div class="card__title">{{ title }}</div>
          <div class="card__place">{{ place }}</div>
        </div>
        <div class="card__bottom">
          <div class="card__bottom-left">
            <p>OPEN / START</p>
            <p>ADV / DOOR</p>
            <p>WITH</p>
            <p>DETAIL</p>
          </div>
          <div class="card__bottom-right">
            <p class="card__time">{{ time }}</p>
            <p class="card__time">{{ fee }}</p>
            <p class="card__band">{{ band }}</p>
            <p class="card__url">{{ url }}</p>
          </div>
        </div>
      </div>
      <div class="card__button">
        TICKET
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    props: {
      // image: {
      //   type: object,
      //   default: '20123',
      // },
      date: {
        type: Date,
        default: 2019 / 1 / 1,
      },
      title: {
        type: String,
        default: 'ライブタイトル',
      },
      slug: {
        type: String,
        default: '1111',
      },
      place: {
        type: String,
        default: '恵比寿LIQUID ROOM',
      },
      time: {
        type: String,
        default: 'OPEN_START',
      },
      fee: {
        type: String,
        default: 'aa/aa/aa',
      },
      band: {
        type: String,
        default: 'aa/aa/aa',
      },
      url: {
        type: String,
        default: 'http://',
      },
    },
  }
</script>

<style lang="scss" scoped>

  .card {
    text-decoration: none;
    color: #333;
    padding: 20px;
    display: flex;
    font-size: 14px;
    align-items: center;
    &__image {
      margin-right: 35px;
    }
    &__top {
      margin-bottom: 16px;
    }
    &__logo {
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      border-radius: 2px;
      background-color: #000;
      padding: 5px 13px;
      margin-right: 20px;
    }
    &__date {
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
    }
    &__middle {
      margin-bottom: 24px;
    }
    &__title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &__bottom {
      display: flex;
      max-width: 500px;
    }
    &__bottom-left {
      margin-right: 68px;
      min-width: 100px;
      width: 20%;
      p {
        margin-bottom: 6px;
      }
    }
    &__bottom-right {
      width: 80%;
      p {
        margin-bottom: 6px;
      }
    }
    &__button {
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 0.6px;
      color: #ffffff;
      background-color: #000;
      padding: 12px 46px;
      border-radius: 4px;
      height: 52px;
    }
  }
</style>
