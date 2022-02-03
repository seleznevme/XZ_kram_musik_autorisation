<template>
  <input class="form_submit" :type="custom_type" :value="custom_value"/>
</template>

<script>
export default {
    name: "form-submit",
    props: {
      custom_value: {
      type: String,
      required: true
      },
      custom_type: {
      type: String,
      default: 'submit'
      }
    }          
}
</script>

<style  scoped>
.form_submit {
  border-radius: 5px;
  border: none;
  background-color: #ff8100;
  padding: 0 7px;
}
.form_submit:hover {
  background-color: #ffd400;
}
</style>