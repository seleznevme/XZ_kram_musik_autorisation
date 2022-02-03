<template>
  <span>{{custom_title}}</span>
  <input :value="modelValue" @input="updateInput" :type="custom_type" :placeholder="custom_placeholder" />
</template>

<script>
export default {
    name: 'form-input',
    props: {
      modelValue: {
      type: String,     
      },
      custom_title: {
      type: String,
      default: 'Название поля',      
      },
      custom_placeholder: {
      type: String,
      default: 'Подсказка',      
      },
      custom_type: {
      type: String,
      default: 'Подсказка',      
      }
    },
    methods: {
      updateInput (event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
}
</script>

<style scoped>
span {
  color: #ffffff;
  margin-top: 5px;
}
input {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 5px;
}
</style>