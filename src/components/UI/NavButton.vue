<template>
   <div class="nav_btn">
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: "nav-button",
};
</script>

<style scoped>
.nav_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8100;
  border-radius: 10px;
  padding: 10px;
  height: 35px;
}
</style>
