<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <nav-button @click.stop="show_nav" class="left_button">
          <div class="logo_menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>Меню сайта</span>
        </nav-button>
      </div>
      <div class="col-6">
        <nav-button v-if="$route.path == '/'">
          <span>Новости</span>
        </nav-button>
        <nav-button v-else-if="$route.path == '/AddNews'">
          <span>Добавление новости</span>
        </nav-button>
        <nav-button v-else-if="$route.path == '/Registration'">
          <span>Регистрация пользователя</span>
        </nav-button>
        <nav-button v-else-if="$route.path == '/About'">
          <span>О нас</span>
        </nav-button>
        <nav-button v-else>
          <span class="home_link" @click="$router.push('/')">Вернуться на главную</span>
        </nav-button>
      </div>
      <div class="col-3">
        <nav-button>
          <form>
            <input class="search_area" type="search" name="" placeholder="Поиск" />
            <input class="search_button" type="submit" value=" ">           
          </form>          
        </nav-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavTop",
  components: {
    
  }, 
  methods: {
    show_nav () {      
      this.$emit ('show_nav');      
    }    
  }
};

</script>

<style  scoped>
.logo_menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px 5px 5px -15px;
}
.logo_menu div {
  background-color: #000000;
  width: 20px;
  height: 2px;
  margin: 2px 5px;  
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
}
.search_area {
  height: 20px;
  background-color: #ff8100;
  border: 1px solid #000000;
  padding: 0 10px;
  font-size: 90%;
  line-height: 100%;  
  border-radius: 5px;
  width: 75%;
  margin-right: 5px;
}
.search_button {
  width: 20%;
  margin: 0 auto;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #000000;
  font-size: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('img/search.png');
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.left_button {
  cursor: pointer;
}
.home_link {
  cursor: pointer;
}
</style>
