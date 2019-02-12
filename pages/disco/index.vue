<template>
  <div class="container">
    <section class="disco">
      <div class="cd-wrapper">
        <div class="cd">
          <div class="cd-image">
            <img
              src="~/static/img/signalflag.png"
              alt="signalflag">
          </div>
          <div class="cd-detail">
            <h1 class="cd-title">Signal Flags</h1>
            <h2 class="cd-release-date">2017.11.11 発売</h2>
            <ol class="cd-track-list">
              <li class="cd-track">cider</li>
              <li class="cd-track">seaside</li>
              <li class="cd-track">toy box</li>
              <li class="cd-track">HAL</li>
              <li class="cd-track">エンドロール</li>
              <li class="cd-track">nanamagari</li>
            </ol>
          </div>
        </div>
        <div class="cd">
          <div class="cd-image">
            <img
              src="~/static/img/bythesea.png"
              alt="bythesea">
          </div>
          <div class="cd-detail">
            <h1 class="cd-title">BY THE SEA</h1>
            <h2 class="cd-release-date">2016.10.11 発売</h2>
            <ol class="cd-track-list">
              <li class="cd-track">nanamagari</li>
              <li class="cd-track">HAL</li>
              <li class="cd-track">lemonice</li>
              <li class="cd-track">渚にて死す</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Disco from '~/components/disco'
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    Disco,
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_DISCO_POST_TYPE_ID,
        // order: '-fields.publishedAt',
      })
      .then(entries => {
        console.log(entries.items)
        return {
          posts: entries.items,
        }
      })
      .catch(console.error)
  },
}
</script>

<style lang="scss" scoped>
.disco {
  margin: 0 20px;
  min-height: 70vh;
}
.container {
  max-width: 1080px;
  margin: 35px auto;
}
@media (min-width: 769px) {
  .cd-wrapper {
    padding: 0;
    .cd {
      display: flex;
      margin-bottom: 20px;
      img {
        width: 285px;
        height: 285px;
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5);
        margin-bottom: 25px;
        margin-right: 80px;
      }
      .cd-detail {
        width: 100%;
      }
      .cd-title {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 25px;
      }
      .cd-release-date {
        border-bottom: 2px solid black;
        width: 100%;
        margin-bottom: 10px;
      }
      .cd-track-list {
        padding-left: 15px;
        margin-left: 15px;
        li {
          list-style: decimal;
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  .cd-wrapper {
    padding: 0;
    .cd {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      align-items: center;
      img {
        width: 200px;
        height: 200px;
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5);
        margin-bottom: 25px;
      }
      .cd-detail {
        width: 100%;
      }
      .cd-title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 15px;
      }
      .cd-release-date {
        border-bottom: 2px solid black;
        font-size: 12px;
        width: 100%;
        margin-bottom: 10px;
      }
      .cd-track-list {
        margin-left: 10px;
        padding-left: 15px;
        li {
          list-style: decimal;
          margin-bottom: 10px;
          font-size: 12px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
