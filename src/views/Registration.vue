<template>
  <div>
    <cover-main>
      <form @submit.prevent class="form_registration">
        <div class="reg_part_left">
          <form-input
            custom_title="Логин"
            custom_placeholder="Имя на сайте"
            custom_type="login"
            :modelValue="$store.state.users.user.login"
            @update:modelValue="(login) => this.$store.commit('user_login', login)"/>
          <form-input
            custom_title="Пароль"
            custom_placeholder="Пароль"
            custom_type="password"            
            :modelValue="$store.state.users.user.pass"
            @update:modelValue="(pass) => this.$store.commit('user_pass', pass)"/>
          <form-input
            custom_title="Повторите пароль"
            custom_placeholder="Еще раз"
            custom_type="password"
            :modelValue="$store.state.users.user.check_pass"
            @update:modelValue="(check_pass) => this.$store.commit('user_check_pass', check_pass)"/>
          <form-gender
          :modelValue="$store.state.users.user.gender"
          @update:modelValue="(gender) => this.$store.commit('user_gender', gender)"/>
          <form-select
          :modelValue="$store.state.users.user.music_ganre"
          @update:modelValue="(music_ganre) => this.$store.commit('user_music_ganre', music_ganre)"/>
        </div>
        <div class="reg_part_right">
          <form-input
            custom_title="Имя"
            custom_placeholder="Ваше имя"
            custom_type="name"
            :modelValue="$store.state.users.user.name"
            @update:modelValue="(name) => this.$store.commit('user_name', name)"/>
          <form-input
            custom_title="mail"
            custom_placeholder="Ваш e-mail"
            custom_type="mail"
            :modelValue="$store.state.users.user.mail"
            @update:modelValue="(mail) => this.$store.commit('user_mail', mail)"/>
          <form-textarea
            custom_title="О себе"
            custom_placeholder="необязательно.."
            custom_height="120px"
            :modelValue="$store.state.users.user.about"
            @update:modelValue="(about) => this.$store.commit('user_about', about)"/>
          <div class="btn_group">
            <form-submit @click="$store.commit('add_user')" custom_value="Реггистрация" />
          </div>
        </div>
      </form>
    </cover-main>
  </div>
</template>

<script>
export default {
  name: "Registration",  
};
</script>

<style scoped>
.cover {
  background-color: #ffffff;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 30, 55, 0.8);
  padding: 15px;
}
span {
  color: #ffffff;
}
.form_registration {
  display: flex;
  width: 80%;
  max-width: 500px;
}
.form_registration * {
  outline: none;
}
.reg_part_left {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
.reg_part_right {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin: 0 5px;
}
.btn_group {
  display: flex;
  justify-content: flex-end;
}
</style>
