<template>
   <div class="cover">
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: "cover-main",
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
</style>
