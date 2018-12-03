<template>
  <section class="index">
    <live
      v-for="post in posts"
      :key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :header-image="post.fields.headerImage"
      :published-at="post.fields.publishedAt"/>
  </section>
</template>

<script>
import Live from '~/components/live.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    Live,
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishedAt',
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
.index {
  display: flex;
  flex-wrap: wrap;
}
</style>
