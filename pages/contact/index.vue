<template>
  <div class="contact">
    <div class="contact__title">お問い合わせ</div>
    <div class="contact__box">
      <div class="contact__wrapper">
        <form
          name="contactform"
          data-netlify="true">
          <input
            type="hidden"
            name="form-name"
            value="contactform">
          <div class="contact__form-wrapper">
            <span>お名前</span>
            <el-input
              v-model="name"
              placeholder="お名前"/>
          </div>
          <div class="contact__form-wrapper">
            <span>チケット枚数</span>
            <el-input
              v-model="mail"
              placeholder="メールアドレス"/>
          </div>
          <div class="contact__form-wrapper last">
            <span>備考欄</span>
            <el-input
              :rows="3"
              v-model="remark"
              type="textarea"
              placeholder="その他"/>
          </div>
          <div
            slot="footer"
            class="dialog-footer">
            <el-button
              type="primary"
              @click="dialogVisible = false">チケット予約
            </el-button>
          </div>
        </form>
      </div>
    </div>
    <!--<div class="contact__button">-->
    <!--TICKET-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      mail: '',
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
.contact {
  margin: 35px 0;
  &__box {
    width: 70%;
    margin: 0 auto;
    background-color: #ededed;
    padding: 35px 80px;
  }
  &__wrapper {
    margin-bottom: 20px;
  }
  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
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
</style>
