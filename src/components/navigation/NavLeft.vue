<template>
  <div class="cover" @click="nav_hide" v-if="show">
    <div @click.stop class="wrapper">
      <span class="site_name"
      @click="$router.push('/')">Kram-music</span>
      <nav-button
        class="btn_nav_left"
        :class="{ btn_active: $route.path == '/' }"
        @click="$router.push('/')"
      >
        <span>Главная</span>
      </nav-button>
      <nav-button
        class="btn_nav_left"
        :class="{ btn_active: $route.path == '/AddNews' }"
        @click="$router.push('/AddPost')"
      >
        <span>Добавить новостть</span>
      </nav-button>
      <nav-button
        class="btn_nav_left"
        :class="{ btn_active: $route.path == '/Registration' }"
        @click="$router.push('/Registration')">
        <span>Регистрация</span>
      </nav-button>
      <nav-button
        class="btn_nav_left"
        :class="{ btn_active: $route.path == '/About' }"
        @click="$router.push('/About')"
      >
        <span>О нас</span>
      </nav-button>
      <nav-button
        class="btn_nav_left"        
        @click="show_dialog">
        <span>Напишите нам</span>
      </nav-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLeft",

  data() {
    return {
      path1: "/",
      path2: "/AddNews",
      path3: "/Registration",
      path4: "/About",
      user_list: '',
    };
  },
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    nav_hide() {
      this.$emit("update:show", false);
    },
    show_dialog() {
      this.$emit("show_dialog");
    },
  },
};
</script>

<style scoped>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: rgba(25, 30, 55, 0.9);
  background-image: none;
}
.btn_nav_left {
  width: 90%;
  margin: 5px auto;
  cursor: pointer;
}
.btn_active {
  background-color: #ffd400 !important;
}
.site_name {
  color: #ff8100;
  margin: 20px 0 10px 0;
  line-height: 100%;
  font-size: 20px;
  cursor: pointer;
}
</style>
