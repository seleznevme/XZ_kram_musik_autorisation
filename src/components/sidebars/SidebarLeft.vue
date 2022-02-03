<template>
  <part-sidebar>
    <form class="form_reg">
      <form-input
          custom_title = "Логин"
          custom_placeholder = "Ваше имя на сайте"
          custom_type = "name"
          v-model="sign_in.name"/>
        <form-input
          custom_title = "Пароль"
          custom_placeholder = "Введите пароль"
          custom_type = "password"
          v-model="sign_in.password"/>
        <div class = "btn_group">
          <form-submit
            custom_value = "Войти"/>      
          <span class="reg" @click="$router.push('/Registration')">регистрация</span>
        </div>      
    </form>
  </part-sidebar>
  <part-sidebar>
    <span>Хочу сделать что-то вроде музыкального портала города на котором
      публиковались бы новости музыкальной сферы и афиши событий.</span>
  </part-sidebar>
</template>

<script>

export default {
  name: "SidebarLeft",
  data () {
    return {
      sign_in: {
        name: '',
        password: ''
      }
    }
  }
};
</script>

<style scoped>
.reg {
  color: #ffffff;
  cursor: pointer;
  margin-left: auto;
}
.form_reg {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  text-align: start;
}
.btn_group {
  width: 100%;
  display: flex;
  margin-top: 10px;
}
</style>
