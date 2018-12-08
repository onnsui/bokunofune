<template>
  <article class="card">
    <nuxt-link
      :to="{ name: 'blog-slug', params: { slug: slug }}"
      class="wrapper">
      <h1 class="card_title">{{ title }}</h1>
      <p class="card_place">{{ place }}</p>
      <p class="card_place">{{ time }}</p>
      <p class="card_place">{{ band }}</p>
      <p class="card_place">{{ url }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
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
      default: 'at',
    },
    time: {
      type: String,
      default: '2018/01/01',
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

<style scoped>
</style>
