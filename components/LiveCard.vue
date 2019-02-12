<template>
  <div class="card">
    <div class="card__contents">
      <div class="card__top">
        <span class="card__logo">LIVE</span>
        <span class="card__date">{{ date }}</span>
      </div>
      <div class="card__image"><img :src="image.fields.file.url"></div>
      <div class="card__middle">
        <div class="card__title">{{ title }}</div>
        <div class="card__place">{{ place }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: function() {
        return { example: 'aaa' }
      },
    },
    date: {
      type: String,
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
  data() {
    return {
      dialogVisible: false,
      name: '',
      email: '',
      remark: '',
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 1025px) {
  .card {
    background-color: #ffffff;
    text-decoration: none;
    color: #333;
    padding: 20px;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    width: 30%;
    &__contents {
      padding: 12px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__image {
      margin-bottom: 10px;
      align-self: center;
      img {
        max-width: 300px;
        width: 100%;
        height: 230px;
      }
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
      margin-right: 10px;
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
    &__title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &__place {
      text-align: right;
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
    &__border {
      border-bottom: #979797 solid 2px;
    }
    &__form-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      span {
        width: 20%;
        font-weight: bold;
      }
      .el-input {
        width: 30%;
        /deep/ &__inner {
          border: 1px solid #8b94a5;
        }
      }
      .el-textarea {
        width: 60%;
        /deep/ &__inner {
          border: 1px solid #8b94a5;
        }
      }
    }
  }
  .dialog-footer {
    margin: 0 auto;
    width: 450px;
  }
  /deep/ .el-dialog {
    &__header {
      background-color: #000;
      color: #fff;
    }
    &__title {
      color: #fff;
      font-weight: bold;
    }
    &__footer {
      text-align: center;
    }
  }
  .el-button--primary {
    background-color: #000;
    font-weight: bold;
    width: 450px;
  }
}
@media (max-width: 1024px) {
  .card {
    background-color: #ffffff;
    text-decoration: none;
    color: #333;
    padding: 20px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 15px;
    &__contents {
      display: flex;
      flex-direction: column;
    }
    &__image {
      margin-bottom: 10px;
      align-self: center;
      img {
        max-width: 300px;
        width: 100%;
        height: 230px;
      }
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
      margin-right: 10px;
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
    &__place {
      text-align: right;
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
    &__border {
      border-bottom: #979797 solid 2px;
    }
    &__form-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      span {
        width: 20%;
        font-weight: bold;
      }
      .el-input {
        width: 30%;
        /deep/ &__inner {
          border: 1px solid #8b94a5;
        }
      }
      .el-textarea {
        width: 60%;
        /deep/ &__inner {
          border: 1px solid #8b94a5;
        }
      }
    }
  }
  .dialog-footer {
    margin: 0 auto;
    width: 450px;
  }
  /deep/ .el-dialog {
    &__header {
      background-color: #000;
      color: #fff;
    }
    &__title {
      color: #fff;
      font-weight: bold;
    }
    &__footer {
      text-align: center;
    }
  }
  .el-button--primary {
    background-color: #000;
    font-weight: bold;
    width: 450px;
  }
}
</style>
