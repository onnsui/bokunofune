<template>
  <div class="card">
    <div class="card__image"><img :src="image.fields.file.url"></div>
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
    <el-button
      type="text"
      class="card__button"
      @click="dialogVisible = true">TICKET
    </el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      title="チケット予約"
      width="80%">
      <!--<form name="contact" method="POST" netlify>-->
      <!--<p>-->
      <!--<label>Your Name: <input type="text" name="name" /></label>-->
      <!--</p>-->
      <!--<p>-->
      <!--<label>Your Email: <input type="email" name="email" /></label>-->
      <!--</p>-->
      <!--<p>-->
      <!--<label>Your Role: <select name="role[]" multiple>-->
      <!--<option value="leader">Leader</option>-->
      <!--<option value="follower">Follower</option>-->
      <!--</select></label>-->
      <!--</p>-->
      <!--<p>-->
      <!--<label>Message: <textarea name="message"></textarea></label>-->
      <!--</p>-->
      <!--<p>-->
      <!--<button type="submit">Send</button>-->
      <!--</p>-->
      <!--</form>-->
      <!-- A little help for the Netlify bots if you're not using a SSG -->
      <form 
        name="contactform" 
        netlify 
        netlify-honeypot="bot-field" 
        hidden>
        <input 
          type="text" 
          name="name" >
        <input 
          type="email" 
          name="email" >
        <textarea name="remark"/>
      </form>
      <form
        name="contactform"
        method="POST"
        data-netlify="true">
        <input
          type="hidden"
          name="contactform"
          value="contactform" >
        <div class="card__form-wrapper">
          <span>お名前</span>
          <el-input
            v-model="name"
            placeholder="お名前"/>
        </div>
        <div class="card__form-wrapper">
          <span>チケット枚数</span>
          <el-input
            v-model="email"
            placeholder="チケット枚数"/>
        </div>
        <div class="card__form-wrapper">
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
            native-type="submit"
            @click="dialogVisible = false">チケット予約</el-button>
        </div>
      </form>

    </el-dialog>
    <!--<div class="card__button">-->
    <!--TICKET-->
    <!--</div>-->
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
.card {
  text-decoration: none;
  color: #333;
  padding: 20px;
  display: flex;
  font-size: 14px;
  align-items: center;
  &__image {
    margin-right: 35px;
    img {
      width: 280px;
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
</style>
