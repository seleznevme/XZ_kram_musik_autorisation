<template>
  <div>
    <cover-main>
      <form class="cover" @submit.prevent>
        <form-input
          custom_title = "Тема"
          custom_placeholder = "Тема статьи"
          custom_type = "name"          
          :modelValue="$store.state.posts.post.title"
          @update:modelValue="(title) => this.$store.commit('post_title', title)"/>               
        <form-textarea
          custom_title = "Содержание"
          custom_placeholder = "Текст статьи"
          custom_height = "200px"
          :modelValue="$store.state.posts.post.body"
          @update:modelValue="(body) => this.$store.commit('post_body', body)"/>                       
        <div class="btn_group">
          <div class="add_img">
            <span>Прикрепить изображение</span>
            <add-file />       
          </div>          
          <div class="btn_submit">
            <form-submit @click="$store.commit('add_post')"  
            custom_value = "Добавить"/>
          </div>
        </div>
      </form>
    </cover-main>
  </div>
</template>

<script>
import AddFile from '../components/UI/AddFile.vue';
export default {
  components: { AddFile },
  name: "AddNews",  
};
</script>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cover span {
  color: #ffffff;
  margin-top: 10px;
}
.btn_group {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.add_img {
  display: flex;
  flex-direction: column;
}
.btn_submit {
  margin-left: auto;
}
</style>
