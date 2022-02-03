<template>
  <cover-main>
    <div class="cover_post">
      <div class="post_title">
        <span>
          {{$store.state.posts.post_list.find((item) => item.id == $route.params.id).title}}
        </span>
      </div>
      <div class="post_image">
        <img :src="$store.state.posts.post_list.find((item) => item.id == $route.params.id).image"/>
      </div>
      <div class="post_body">
        <span>
          {{$store.state.posts.post_list.find((item) => item.id == $route.params.id).body}}
        </span>
      </div>
      <div class="btn_group">
        <post-button
        button_name = "Удалить"        
        @click="$store.commit('dellete_post',$route.params.id), $router.push('/DeletePostCompleted')"/>
        <like-group /> <!-- ТУТ КОМПОНЕНТ С ЛАЙКАМИ НЕ ЗАБЫТЬ бы...-->      
        <post-button
        button_name = "Редактировать"
        @click="$router.push('/EditPost'), $store.commit('copy_post_edit',$route.params.id)"/>
      </div>
    </div>
    
  </cover-main>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  color: #ffffff;
}
.post_title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;  
}
.post_image img {
  width: 100%;
}
.post_body {
  text-align: justify;
  margin: 10px 0;
}
.btn_group {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
}
</style>