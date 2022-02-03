<template>
  <cover-main
    class="cover_post"
    v-for="index in $store.state.posts.post_list"
    :key="index.id"
    @click="$router.push('/PostPage/' + index.id)">
    <div class="news_img">
      <img :src="index.image" />
    </div>
    <div class="news_text">
      <strong>{{ index.title }}</strong>
    </div>
  </cover-main>
</template>

<script>
export default {
  name: "KmNews",
};
</script>

<style scoped>
.news_img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100px;
}
.news_img img {
  max-height: 100px;
  max-width: 100%;
  margin: 0 15px;
}
.news_text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 65%;
  margin-left: auto;
}
.news_text strong {
  display: block;
  color: #ffffff;
  margin: 0 10px;
}
.cover_post {
  cursor: pointer;
}
</style>
