<template>
  <div class="container">
    <section class="movie">
      <div class="movie__wrapper">
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
        <div class="movie__wrap">
          <div class="movie__youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OBwhHHgHYZ8?controls=0?showinfo=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen/>
          </div>
        </div>
        <div class="movie__wrap">
          <div class="movie__youtube">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/YfpxhEcRChQ?controls=0?showinfo=0" 
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@media (min-width: 769px) {
  .container {
    max-width: 1080px;
    margin: 0 auto;
  }

  .movie {
    margin: 35px 0;
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }
    &__wrap {
      width: 33%;
    }
    &__youtube {
      position: relative;
      padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
      height: 0;
      overflow: hidden;
      width: 100%;
      margin-right: 15px;
      box-shadow: 0 6px 6px #ddd;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  .movie {
    margin: 20px 0;
    &__wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &__wrap {
      width: 100%;
      margin-bottom: 20px;
      width: 80%;
    }
    &__youtube {
      position: relative;
      padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
      height: 0;
      overflow: hidden;
      width: 100%;
      box-shadow: 0 6px 6px #ddd;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
