<template>
  <div class="container">
    <section class="index">
      <live
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
    </section>
  </div>
</template>

<script>
import Live from '~/components/live'
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  components: {
    Live,
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

<style scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
}
.index {
  display: flex;
  flex-wrap: wrap;
}
</style>
