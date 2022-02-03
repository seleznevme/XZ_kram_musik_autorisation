<template>
  <cover-main>
    <div class="cover_post">
      <div class="post_title">
        <span>Пост удален</span>
      </div>      
      <div class="btn_group">
        <post-button
        button_name = "Главная"
        @click="$router.push('/')" />          
        <post-button
        button_name = "Добавить новый"
        @click="$router.push('/AddPost')"/>
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