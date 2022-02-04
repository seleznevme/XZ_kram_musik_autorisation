<template>
  <cover-main>
    <div class="cover_post">
      <div class="post_title">
        <span>Пользователь добавлен</span>
      </div>      
      <div class="btn_group">
        <post-button
        button_name = "Главная"
        @click="$router.push('/')" />        
      </div>
    </div>
    
  </cover-main>
</template>

<script>
export default {
    name: 'AddUserComplete'
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