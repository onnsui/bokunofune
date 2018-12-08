<template>
  <section class="index">
    <live
      v-for="post in posts"
      :key="post.fields.slug"
      :date="post.fields.date"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :locate="post.fields.place"
      :time="post.fields.time"
      :band="post.fields.band"
      :url="post.fields.url"
    />
  </section>
</template>

<script>
import Live from '~/components/live'
import { createClient } from '~/plugins/contentful'

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
        // order: '-fields.publishedAt',
      })
      .then(entries => {
        console.log(entries)
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
