<template>
  <div class="container">
    <section class="gallery">
      <img src="~/static/img/gallery1.png">
      <img src="~/static/img/gallery2.jpg">
      <img src="~/static/img/gallery3.jpg">
      <img src="~/static/img/gallery4.jpg">
      <img src="~/static/img/gallery5.jpg">
      <img src="~/static/img/gallery6.jpg">
      <img src="~/static/img/gallery7.jpg">
      <img src="~/static/img/gallery8.jpg">
      <img src="~/static/img/gallery9.jpg">
      <img src="~/static/img/gallery10.jpg">
      <img src="~/static/img/gallery11.jpg">
      <img src="~/static/img/gallery12.jpg">
      <!--<div-->
      <!--v-for="(item, index) in Gallery"-->
      <!--:key="index"-->
      <!--class="gallery">-->
      <!--<img :src="item">-->
      <!--</div>-->
    </section>
  </div>
</template>

<script>
import Gallery from '../../config/gallery'
import { createClient } from '~/plugins/contentful'

const client = createClient()
export default {
  data() {
    return {
      Gallery,
    }
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        gallery_type: env.CTF_GALLERY_POST_TYPE_ID,
        // order: '-fields.publishedAt',
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

<style  lang="scss" scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 35px 0;
    img {
      width: 24%;
      height: 24%;
      margin-right: 10px;
      margin-bottom: 10px;
      box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5);
    }
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  .gallery {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 30%;
      height: 30%;
      margin-bottom: 15px;
    }
  }
}
</style>
