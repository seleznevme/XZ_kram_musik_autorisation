<template>
   <div class="part_side">
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: "part-sidebar",
};
</script>

<style scoped>
.part_side {
  text-align: center;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  background-image: url("./img/part_background.jpg");
  margin: 10px 0;
}
.part_side * {
  width: 95%;
  text-align: center;
  margin: 5px;
  color: #ffffff;
}
</style>
