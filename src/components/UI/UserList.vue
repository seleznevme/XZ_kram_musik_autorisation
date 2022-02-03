<template>
  <div class="list_cover">
    <span>Пользователи сайта:</span>
    <ul>
      <li v-for="index in $store.state.users.user_list" :key="index.login">
        {{ index.login }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "user-list",
};
</script>

<style scoped>
.list_cover *{  
  color: #ffffff;
  margin: 0;
  list-style-type: none;
  padding: 0;
}
li:before {
  font-size: 25px;
  content: "♫ ";
}

</style>