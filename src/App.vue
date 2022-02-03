<template>
  <div class="wrapper" @click="hide_navbar">
    <km-header />
    <nav>
      <nav-top
      @show_nav = 'show_left_navbar' />
    </nav>    
    <nav>
      <transition name="slide-fade">
        <nav-left
        @show_dialog = "show_dialog_window"
        v-model:show="show_navbar"/>
      </transition>
    </nav>
    <dialog-window
    v-model:show="show_dialog"/>>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <sidebar-left />
          </div>
          <div class="col-6">
            <router-view/>
          </div>
          <div class="col-3">
            <sidebar-right />
          </div>
        </div>
      </div>
    </main>
    <km-footer />
  </div>
</template>

<script>
import KmHeader from "./components/header/Header.vue";
import KmFooter from "./components/footer/Footer.vue";
import SidebarLeft from "./components/sidebars/SidebarLeft.vue";
import SidebarRight from "./components/sidebars/SidebarRight.vue";
import NavTop from "./components/navigation/NavTop.vue";
import NavLeft from "./components/navigation/NavLeft.vue";
export default {
  name: "App",
  components: {
    KmHeader,
    KmFooter,
    SidebarLeft,
    SidebarRight,    
    NavTop,
    NavLeft
  },
  data () {
    return {
      show_navbar: false,
      show_dialog: false,      
    }    
  },
  methods: {
    show_left_navbar () {
      this.show_navbar = true;        
    },
    show_dialog_window () {
      this.show_dialog = true;      
    },   
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@font-face {
  font-family: "intro_bold_italic";
  src: url("fonts/Intro_Bold_Italic/intro_bold_italic.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
* {
  font-family: intro_bold_italic;
  color: #000000;
}
main {
  margin-top: -20px;
}
input:focus {
  outline: 0;
}
a,
a:active {
  text-decoration: none;
}
.wrapper {
  background-image: url("img/all_background.jpg");
  min-height: 100%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
