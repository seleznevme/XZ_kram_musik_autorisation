<template>
  <part-sidebar  v-if="!$store.state.users.sign_in">
    <form @submit.prevent class="form_reg">
      <form-input
        custom_title="mail"
        custom_placeholder="Ваш e-mail"
        custom_type="mail"
        :modelValue="$store.state.users.user_in.mail"
        @update:modelValue="(mail) => this.$store.commit('user_mail_in', mail)"
      />
      <form-input
        custom_title="Пароль"
        custom_placeholder="Пароль"
        custom_type="password"
        :modelValue="$store.state.users.user_in.pass"
        @update:modelValue="(pass) => this.$store.commit('user_pass_in', pass)"
      />
      <div class="btn_group">
        <form-submit @click="$store.commit('in_user')" custom_value="Войти" />
        <span class="reg" @click="$router.push('/Registration')"
          >регистрация</span
        >
      </div>
    </form>
  </part-sidebar>
  <part-sidebar v-if="$store.state.users.sign_in">
    <span>Вход выполнен</span>
  </part-sidebar>
  <part-sidebar>
    <span
      >Хочу сделать что-то вроде музыкального портала города на котором
      публиковались бы новости музыкальной сферы и афиши событий.</span
    >
  </part-sidebar>
</template>

<script>
export default {
  name: "SidebarLeft",  
};
</script>

<style scoped>
span {
  color: #ffffff;
}
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
