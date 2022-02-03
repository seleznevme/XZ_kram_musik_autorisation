<template>
  <div class="select_wrapper">
    <span>Какую музыку слушаете?</span>
    <select @change="select_ganre" v-model="selected">
        <option disabled value="">Выберите...</option>
        <option>Всё подряд...</option>
        <option>Electronic dance</option>
        <option>Rock</option>
        <option>Jazz</option>
        <option>rock ’n’ roll </option>
        <option>Metall</option>
        <option>Dubstep</option>
        <option>Rhythm and blues</option>
        <option>Techno</option>
        <option>Country</option>
        <option>Electro</option>
        <option>Indie-Rock</option>
        <option>Pop music</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "form-select",
  data() {
    return {
      selected: '',
    }
  },  
  methods: {
    select_ganre () {
      this.$emit('update:modelValue',this.selected)      
    },    
  }
};
</script>

<style scoped>

span {
  color: #ffffff;  
}
select {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 5px;
  outline: none;
}
</style>