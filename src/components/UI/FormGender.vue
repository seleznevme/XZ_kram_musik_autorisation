<template>
  <div class="gender_wrapper">
    <span class="title">Пол:</span>
    <input type="radio" @change="male" name="gender"/>
    <span class="label">M</span>
    <input type="radio" @change="female" name="gender"/>
    <span class="label">Ж</span>
  </div>
</template>

<script>
export default {
  name: "form-gender",
  props: {
    modelValue: {
      type: String,
    }
  },
  methods: {
    male () {
      this.$emit ('update:modelValue','мужской')      
    },
    female () {
      this.$emit ('update:modelValue','женский')
    }
  }
};
</script>

<style scoped>
.gender_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  color: #ffffff;
  margin: 5px 0; 
}
.label {
  margin-left: 10px;
  color: #ffffff;
}
input {
  width: 15px;
  height: 15px;
  margin-left: 15px;
}
</style>