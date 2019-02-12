<template>
  <div>
    <section class="hero"/>
    <section class="live">
      <div>
        <nuxt-link
          to="/live"
          class="live-wrapper">
          <live-card
            v-for="post in posts"
            :key="post.fields.slug"
            :image="post.fields.image"
            :date="post.fields.date"
            :title="post.fields.title"
            :slug="post.fields.slug"
            :place="post.fields.place"
            :time="post.fields.time"
            :fee="post.fields.fee"
            :band="post.fields.band"
            :url="post.fields.url"
          />
        </nuxt-link>
      </div>
    </section>
    <section class="music">
      <div class="music__wrapper">
        <div class="movie__wrap">
          <div class="movie__youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mod3ROgKvsc?controls=0?showinfo=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen/>
          </div>
        </div>
        <div class="vertical"/>
        <div class="movie__wrap">
          <div class="movie__apple">
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameborder="0"
              height="318"
              style="width:100%;max-width:600px;overflow:hidden;background:transparent;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/signal-flags-ep/1412577938?app=music"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LiveCard from '~/components/LiveCard'
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  components: {
    LiveCard,
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
      })
      .then(entries => {
        return {
          posts: entries.items,
        }
      })
      .catch(console.error)
  },
}
</script>
<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
@media (min-width: 1025px) {
  .hero {
    background: url(~static/img/hero.png);
    background-size: cover;
    min-height: 60rem;
    margin-top: -20%;
    width: 100%;
  }
  .live {
    background-color: #ededed;
    overflow: hidden;
  }
  .live-wrapper {
    width: 90%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
  }
  .music {
    .music__wrapper {
      display: flex;
      margin: 40px 0;
    }
    .movie__wrap {
      width: 40%;
      margin: 0 auto;
    }
    .movie__youtube {
      position: relative;
      padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
      height: 0;
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .apple__wrap {
      width: 40%;
      margin: 0 auto;
    }
    .movie__apple {
      position: relative;
      padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
      height: 0;
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .vertical {
      border-right: 1px solid black;
    }
  }
}
@media (max-width: 1024px) {
  .hero {
    width: 100%;
    height: 0;
    padding-top: 66.35%;
    background-repeat: no-repeat;
    background-position: center center;
    background: url(~static/img/hero.png);
    background-size: cover;
  }
  .live {
    background-color: #ededed;
    overflow: hidden;
  }
  .live-wrapper {
    width: 90%;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .music {
    .music__wrapper {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
    .movie__wrap {
      width: 90%;
      margin: 0 auto 15px auto;
    }
    .movie__youtube {
      position: relative;
      padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
      height: 0;
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .apple__wrap {
      margin: 0 auto;
    }
    .movie__apple {
      position: relative;
      padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
      height: 0;
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .vertical {
      display: none;
    }
  }
}
</style>
