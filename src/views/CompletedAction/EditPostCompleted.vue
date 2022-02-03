<template>
  <cover-main>
    <div class="cover_post">
      <div class="post_title">
        <span>Пост отредактирован</span>
      </div>      
      <div class="btn_group">
        <post-button
        button_name = "Главная"
        @click="$router.push('/')" />          
        <post-button
        button_name = "Просмотр"
        @click="$router.push('/PostPage/' + $store.state.posts.copy_post_edit.id)"/>
      </div>
    </div>
    
  </cover-main>
</template>

<script>
export default {
    name: 'DeletePost'
};
</script>

<style scoped>

.cover_post {
  width: 100%;
}
span {
  color: #ffffff;
}
.post_title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px; 
  
}
.btn_group {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 100%;
}
</style>