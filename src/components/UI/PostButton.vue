<template>
   <div class="post_btn">
       <span>{{ button_name }}</span>
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: "post-button",
  props: {
      button_name: {
          type: String,
          default: 'Имя кнопки не задано'
      }
    }
};
</script>

<style scoped>
.post_btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8100;
  border-radius: 10px;
  padding: 10px;
  height: 35px;
}
.post_btn:hover {  
  background-color: #ffd400;  
}
</style>
