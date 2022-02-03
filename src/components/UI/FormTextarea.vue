<template>
  <span>{{custom_title}}</span>
  <textarea :value="modelValue" :style="height_textarea" @input="updateTextarea" :placeholder="custom_placeholder" />
</template>

<script>
export default {
    name: 'form-textarea',
    data () {
        return {
          height_textarea: 'height: ' + this.custom_height + ';',
        }
    },    
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
      default: 'Описание',      
      },
      custom_height: {
      type: String,
      default: '100px',      
      },            
    },
    methods: {
      updateTextarea (event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
}
</script>

<style scoped>
span {
  color: #ffffff;
  margin-top: 5px;
}
textarea {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 15px;
  outline: none;  
}
</style>