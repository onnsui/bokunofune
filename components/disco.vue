<template>
  <div>
    {{ title }}
  </div>
</template>
<script>
export default {
  props: {
    // image: {
    //   type: Object,
    //   default: function () {
    //     return {example: 'aaa'}
    //   },
    // },
    // date: {
    //   type: Date,
    //   default: 2019 / 1 / 1,
    // },
    title: {
      type: String,
      default: 'CDタイトル',
    },
    // slug: {
    //   type: String,
    //   default: '1111',
    // },
    // place: {
    //   type: String,
    //   default: '恵比寿LIQUID ROOM',
    // },
    // time: {
    //   type: String,
    //   default: 'OPEN_START',
    // },
    // fee: {
    //   type: String,
    //   default: 'aa/aa/aa',
    // },
    // band: {
    //   type: String,
    //   default: 'aa/aa/aa',
    // },
    // url: {
    //   type: String,
    //   default: 'http://',
    // },
  },
}
</script>

<style scoped lang="scss">
</style>
